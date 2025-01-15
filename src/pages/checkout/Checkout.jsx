import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckoutRightComponent from "../../components/checkoutRightComponent/CheckoutRightComponent";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";
import axios from "axios";
import PaymentModal from "../../components/paymentModal/PaymentModal";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    user,
    city,
    authenticated,
    language,
    paymentNoon,
    cartData,
    cities,
    setPaymentResult,
    paymentWallet,
  } = useAppStore();
  const isArabic = language === "ar";

  // States
  const [couponData, setCouponData] = useState();
  const [couponError, setCouponError] = useState();
  const [code, setCode] = useState("");
  const [freePlan, setFreePlan] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const [collapsedComments, setCollapsedComments] = useState(false);
  const [internalPostUrl, setInternalPostUrl] = useState("");
  const [showIframe, setShowIframe] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [discount, setDiscount] = useState();
  const iframeRef = useRef(null);
  const [loadCount, setLoadCount] = useState(0);
  const [noonOrderId, setNoonOrderId] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [couponButton, setCouponButton] = useState(false);

  const freePlans = cartData
    .map((plan) => plan?.free_plans)
    .filter((freePlan) => freePlan !== undefined && freePlan !== null)
    .flat();

  const discountType = couponData?.data?.discount_type || "";
  const removeDelivery = couponData?.data?.remove_delivery_charges || "no";
  const selectedCity = cities.find(
    (currentCity) => currentCity.city_name === city
  );

  const cart = cartData.map((item) => ({
    planName: item.plan.title,
    planName_ar: item.plan.title_ar,
    planPrice:
      item.plan.discount_offer_only === "yes"
        ? parseFloat(item.plan.discounted_amount)
        : parseFloat(item.plan.basic_amount),
    delivery_charges:
      (item.delivery_charges && parseFloat(item.delivery_charges)) || 0,
    plan_id: item?.plan_id,
    delivery_type: item?.delivery_type,
    delivery_address_id: item?.delivery_address_id,
    delivery_address: item?.address?.address,
    branch_id: item?.branch_id,
    branch_name: item?.branch?.branch_name,
    city: city,
    city_id: selectedCity?.id,
    paid_amount_for_plan:
      item.plan.discount_offer_only === "yes"
        ? parseFloat(item.plan.discounted_amount)
        : parseFloat(item.plan.basic_amount),
  }));

  // Calculate the discounted price for each plan
  const discountedCart = cartData.map((item) => {
    let planPrice =
      item.plan.discount_offer_only === "yes"
        ? parseFloat(item.plan.discounted_amount)
        : parseFloat(item.plan.basic_amount);

    let discountedPrice = planPrice;
    if (item?.plan?.coupon_apply === "yes" && discountType === "percent") {
      discountedPrice = (planPrice - (planPrice * discount) / 100).toFixed(2);
    } else if (item?.plan?.coupon_apply === "yes" && discountType === "fixed") {
      discountedPrice = (
        planPrice - parseFloat(item.plan.discounted_amount)
      ).toFixed(2);
    }
    return {
      planName: item.plan.title,
      planName_ar: item.plan.title_ar,
      planPrice: planPrice,
      delivery_charges:
        (item.delivery_charges && parseFloat(item.delivery_charges)) || 0,
      plan_id: item?.plan_id,
      delivery_type: item?.delivery_type,
      delivery_address_id: item?.delivery_address_id,
      delivery_address: item?.address?.address,
      branch_id: item?.branch_id,
      branch_name: item?.branch?.branch_name,
      city: city,
      city_id: selectedCity?.id,
      paid_amount_for_plan: discountedPrice,
      discountedPrice: Math.max(discountedPrice, 0),
      coupon_apply: item?.plan?.coupon_apply,
    };
  });

  // Calculate the total price with discounts applied
  const totalPrice = discountedCart.reduce((total, item, index) => {
    const deliveryCharge = removeDelivery === "yes" ? 0 : item.delivery_charges;
    return total + item.discountedPrice + deliveryCharge;
  }, 0);

  // VAT calculation
  const VAT = 0.15 * totalPrice;
  const subTotal = (totalPrice + VAT).toFixed(2);
  // setTotalPriceWithVAT(subTotal);

  // Toggle Collapse
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };

  const toggleComments = () => {
    setCollapsedComments(!collapsedComments);
  };

  // handle modal
  const handleModal = () => {
    setPaymentModal(true);
  };

  const removeCoupon = () => {
    setCode("");
    setCouponData();
    setCouponButton(false);
    setFreePlan(true);
  }

  // handle coupon API
  const handleCoupon = async () => {
    const dataSend = {
      contact_id: user?.contact_id,
      code: code,
    };
    try {
      const response = await axios.post(
        "https://portal.captainchef.net/public/connector/api/coupon/apply",
        dataSend
      );
      let min_cart_amount =
        parseFloat(response?.data?.data?.min_cart_amount) || 0;
      if (response.data.status === "success" && subTotal >= min_cart_amount) {
        setCouponError();
        setCouponData(response.data);
        setFreePlan(false);
        setDiscount(response.data.data.discount);
        setCouponButton(true);
      } else if (
        response.data.status === "success" &&
        subTotal < min_cart_amount
      ) {
        setCouponError("Cart amount is less");
        setCouponData();
      } else {
        setCouponData();
        setCouponError("Enter a Valid Coupon Code");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addedPlans = discountedCart.map((SinglePlan) => ({
    plan_id: SinglePlan?.plan_id, //done
    addon_ids: [], //done
    delivery_type: SinglePlan?.delivery_type, //done
    city: SinglePlan?.city, //done
    city_id: SinglePlan?.city_id, //done
    delivery_charges: SinglePlan?.delivery_charges, //done
    delivery_address_id: SinglePlan?.delivery_address_id, //done
    delivery_address: SinglePlan?.delivery_address, //done
    branch_id: SinglePlan?.branch_id, //done
    branch_name: SinglePlan?.branch_name, //done
    paid_amount_for_plan: SinglePlan?.paid_amount_for_plan, //done
    discount_amount_for_plan: SinglePlan?.discountedPrice, //done
    coupon_name_applied_for_plan: couponData?.data?.title, //done
    coupon_percent_for_plan: couponData?.data?.discount, //done
    coupon_id: couponData?.data?.id, //done
  }));

  // Payment Status Check Function For Noor
  const paymentStatusCheckFunction = async (noon_order_id) => {
    try {
      const response = await axios.get(
        `https://backend-api-captain-chef-production.up.railway.app/paymentStatusCheckAPI/${noon_order_id}`
      );
      console.log(response?.data?.result?.order?.status);
      if (response?.data?.result?.order?.status === "CAPTURED") {
        setPaymentResult("CAPTURED");
        navigate("/mysubscriptions");
      } else {
        setPaymentResult("REJECTED");
        navigate("/mysubscriptions");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Payment
  const handlePayment = async () => {
    if (paymentMethod === "master") {
      const { post_url, noon_order_id, message } = await paymentNoon(
        addedPlans,
        subTotal,
        couponData,
        user
      );
      setInternalPostUrl(post_url);
      setNoonOrderId(noon_order_id);
      if (post_url) {
        setShowIframe(true);0
      }
    } else if (paymentMethod === "wallet") {
      const { message } = await paymentWallet(
        addedPlans,
        subTotal,
        couponData,
        user
      );
      if (message) {
        setLoading(false);
      }
      if (message === "success") {
        setPaymentResult("CAPTURED");
      } else if (message === "failed") {
        setPaymentResult("REJECTED");
      }
      navigate("/mysubscriptions");
    }
  };

  // Handle Iframe Load
  const handleIframeLoad = () => {
    setLoadCount(loadCount + 1);
    if (loadCount > 0) {
      paymentStatusCheckFunction(noonOrderId);
    }
  };

  // useEffect
  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated]);

  // Component
  return (
    <>
      {showIframe === false ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f5f5f5",
              alignItems: "center",
              gap: "10px",
              direction: isArabic ? "rtl" : "ltr",
              height: "calc(100vh - 190px)",
              overflowY: "scroll",
            }}
          >
            <Box
              sx={{
                maxWidth: {
                  lg: "1150px",
                  md: "880px",
                  sm: "750px",
                  xs: "400px",
                },
                minWidth: {
                  lg: "1170px",
                  md: "900px",
                  sm: "750px",
                  xs: "380px",
                },
                display: "flex",
                justifyContent: "flex-start",
                marginInlineStart: { lg: "-100px", xs: "0" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  p: { xs: "15px", sm: "15px", md: "20px" },
                  mr: { xs: "15px", sm: "0", md: "0", lg: "0" },
                }}
              >
                <IconButton
                  sx={{
                    width: { xs: "48px", sm: "56px" },
                    height: { xs: "48px", sm: "56px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20%",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(-1)}
                >
                  <ArrowBackIosIcon
                    sx={{
                      fontSize: "24px",
                      ml: language === "ar" ? "-7px" : "7px",
                      transform:
                        language === "ar" ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </IconButton>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", sm: "28px", md: "26px" },
                    fontWeight: "700",
                  }}
                >
                  {language === "ar" ? "الدفع" : "Checkout"}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: { lg: "40px", md: "40px", sm: "24px", xs: "2px" },
                justifyContent: "center",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
                maxWidth: {
                  lg: "1170px",
                  md: "900px",
                  sm: "750px",
                  xs: "400px",
                },
                marginBottom: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: { xs: "28px", sm: "0", md: "0", lg: "0" },
                  height: "auto",
                  gap: "40px",
                  mb: { sm: "210px", md: "0", xs: "0", lg: "0" },
                }}
              >
                {/*paper 1 of items list*/}
                <CheckoutRightComponent
                  couponData={couponData}
                  cart={cart}
                  discountedCart={discountedCart}
                  totalPrice={totalPrice}
                  VAT={VAT}
                  subTotal={subTotal}
                />

                {/*paper 2 of 2nd container free plan*/}

                {freePlans.length > 0 && freePlan && (
                  <Paper
                    elevation={0}
                    sx={{
                      padding: "16px",
                      width: {
                        lg: "600px",
                        md: "480px",
                        sm: "600px",
                        xs: "345px",
                      },
                      height: isCollapsed ? "auto" : "164px", // Adjust height dynamically
                      margin: "0 auto",
                      borderRadius: "24px",
                      gap: "40px",
                      border: "1px solid green",
                      top: "24px",
                      right: "32px",
                      bottom: "40px",
                      left: "32px",
                      background: "#CCFFDB",
                    }}
                  >
                    <Box
                      sx={{
                        height: "48px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          height: "48px",
                          fontSize: "20px",
                          fontWeight: "600",
                          direction: isArabic ? "rtl" : "ltr",
                          textAlign: isArabic ? "right" : "left",
                        }}
                      >
                        {isArabic ? "الخطة المجانية" : "Free Plan"}
                      </Typography>

                      <Box
                        sx={{
                          width: "48px",
                          height: "48px",
                          cursor: "pointer", // Add cursor pointer for better UX
                        }}
                        onClick={toggleCollapse} // Add toggle logic
                      >
                        {isCollapsed ? (
                          <KeyboardArrowDownIcon sx={{ fontSize: "35px" }} />
                        ) : (
                          <KeyboardArrowUpIcon sx={{ fontSize: "35px" }} />
                        )}
                      </Box>
                    </Box>
                    {!isCollapsed && ( // Conditionally render this content
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: "30px",
                          width: "100%",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            marginRight: "8px",
                            color: "#333",
                            direction: isArabic ? "rtl" : "ltr",
                            textAlign: isArabic ? "right" : "left",
                          }}
                        >
                          {isArabic
                            ? "مبلغ الخطة المجانية كهدية"
                            : "Gift free plan Amount"}
                        </Typography>

                        <Box
                          sx={{
                            flexGrow: 1,
                            height: "1px",
                            backgroundColor: "#e0e0e0",
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            marginLeft: "8px",
                            color: "#333",
                          }}
                        >
                          0 SAR
                        </Typography>
                      </Box>
                    )}
                  </Paper>
                )}
              </Box>

              {/*paper 3 of apply couon*/}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: { xs: "28px", sm: "-170px", md: "0", lg: "0" },
                  height: "auto",
                  gap: "40px",
                  mb: { sm: "10px", md: "0", xs: "0", lg: "0" },
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    padding: "16px",
                    width: {
                      lg: "600px",
                      md: "480px",
                      sm: "600px",
                      xs: "345px",
                    },
                    height: isCollapsed1 ? "auto" : "164px", // Adjust height dynamically
                    margin: "0 auto",
                    borderRadius: "24px",
                    gap: "40px",
                    top: "24px",
                    right: "32px",
                    bottom: "40px",
                    left: "32px",
                  }}
                >
                  <Box
                    sx={{
                      height: "48px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        height: "48px",
                        fontSize: "20px",
                        fontWeight: "600",
                        direction: isArabic ? "rtl" : "ltr",
                        textAlign: isArabic ? "right" : "left",
                      }}
                    >
                      {isArabic ? "الخصومات" : "Discounts"}
                    </Typography>

                    <Box
                      sx={{
                        width: "48px",
                        height: "48px",
                        cursor: "pointer", // Add cursor pointer for better UX
                      }}
                      onClick={toggleCollapse1} // Toggle logic
                    >
                      {isCollapsed1 ? (
                        <KeyboardArrowDownIcon sx={{ fontSize: "35px" }} />
                      ) : (
                        <KeyboardArrowUpIcon sx={{ fontSize: "35px" }} />
                      )}
                    </Box>
                  </Box>
                  {!isCollapsed1 && ( // Conditionally render this content
                    <Box
                      sx={{
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "8px",
                        // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        mt: "16px", // Add margin top for spacing
                      }}
                    >
                      <TextField
                        label={isArabic ? "تطبيق القسيمة" : "Apply Coupon"}
                        margin="normal"
                        variant="standard"
                        value={code}
                        error={couponError ? true : false}
                        helperText={couponError}
                        onChange={(e) => setCode(e.target.value)}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        InputLabelProps={{
                          sx: {
                            position: "absolute",
                            top: "-10px",
                            left: isArabic
                              ? {
                                  lg: "310px",
                                  md: "235px",
                                  sm: "155px",
                                  xs: "175px",
                                }
                              : "16px",
                            fontSize: "14px",
                            background: "white",
                            padding: "0 4px",
                            transform: "translate(0, 0)",
                            pointerEvents: "none",
                            "&.Mui-focused": {
                              color: "grey",
                            },
                          },
                        }}
                        placeholder=""
                        sx={{
                          width: {
                            lg: "530px",
                            md: "450px",
                            sm: "420px",
                            xs: "313px",
                          },
                          height: {
                            lg: "64px",
                            md: "64px",
                            sm: "56px",
                            xs: "63px",
                          },
                          border: couponError ? "1px solid red" : "none",
                          backgroundColor: "#F8F8F8",
                          borderRadius: "12px",
                          paddingLeft: "14px",
                          paddingRight: "10px",
                          fontSize: "16px",
                          display: "flex",
                          position: "relative",
                        }}
                      />

                      {!couponButton && (
                        <Button
                          variant="contained"
                          sx={{
                            width: {
                              lg: "193px",
                              md: "193px",
                              sm: "150px",
                              xs: "",
                            },
                            height: "60px",
                            marginLeft: "8px",
                            border: !code ? "none" : "1px solid #D92531",
                            backgroundColor: "white",
                            color: "#D92531",
                            textTransform: "none",
                            fontSize: "16px",
                            fontWeight: "bold",
                            borderRadius: "10px",
                          }}
                          onClick={() => handleCoupon()}
                          disabled={!code}
                        >
                          {isArabic ? "تطبيق" : "Apply"}
                        </Button>
                      )}

                      {couponButton && (
                        <Button
                          variant="contained"
                          sx={{
                            width: {
                              lg: "193px",
                              md: "193px",
                              sm: "150px",
                              xs: "",
                            },
                            height: "60px",
                            marginLeft: "8px",
                            border: "1px solid #D92531",
                            backgroundColor: "white",
                            color: "#D92531",
                            textTransform: "none",
                            fontSize: "16px",
                            fontWeight: "bold",
                            borderRadius: "10px",
                          }}
                          onClick={() => removeCoupon()}
                        >
                          {language === "en" ? "Remove" : "يزيل"}
                        </Button>
                      )}
                    </Box>
                  )}
                </Paper>

                {/* paper 4 of additional comments */}

                <Paper
                  elevation={0}
                  sx={{
                    padding: "16px",
                    width: {
                      lg: "600px",
                      md: "480px",
                      sm: "600px",
                      xs: "345px",
                    },
                    height: "auto",
                    margin: "0 auto",
                    borderRadius: "24px",
                    gap: "40px",
                    top: "24px",
                    right: "32px",
                    bottom: "40px",
                    left: "32px",
                  }}
                >
                  <Box
                    sx={{
                      height: "auto",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        mb: "8px",
                      }}
                    >
                      {isArabic ? "تعليقات إضافية" : "Additional Comments"}
                    </Typography>

                    <Box
                      sx={{
                        width: "48px",
                        height: "48px",
                        cursor: "pointer",
                      }}
                      onClick={toggleComments}
                    >
                      {collapsedComments ? (
                        <KeyboardArrowDownIcon sx={{ fontSize: "35px" }} />
                      ) : (
                        <KeyboardArrowUpIcon sx={{ fontSize: "35px" }} />
                      )}
                    </Box>
                  </Box>
                  {!collapsedComments && (
                    <Box
                      sx={{
                        mt: "0px",
                        width: "100%",
                      }}
                    >
                      <TextField
                        label={isArabic ? "تعليقات" : "Comments"}
                        margin="normal"
                        variant="standard"
                        multiline
                        rows={3}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        InputLabelProps={{
                          sx: {
                            position: "absolute",
                            top: "-10px",
                            left: isArabic
                              ? {
                                  lg: "500px",
                                  md: "420px",
                                  sm: "298px",
                                  xs: "282px",
                                }
                              : "16px",
                            fontSize: "14px",
                            background: "white",
                            padding: "0 4px",
                            transform: "translate(0, 0)",
                            pointerEvents: "none",
                            "&.Mui-focused": {
                              color: "grey",
                            },
                          },
                        }}
                        placeholder=""
                        sx={{
                          width: {
                            lg: "530px",
                            md: "450px",
                            sm: "560px",
                            xs: "313px",
                          },
                          minHeight: {
                            lg: "64px",
                            md: "64px",
                            sm: "56px",
                            xs: "63px",
                          },
                          backgroundColor: "#F8F8F8",
                          borderRadius: "12px",
                          paddingLeft: "14px",
                          paddingRight: "10px",
                          position: "relative",
                          fontSize: "16px",
                        }}
                      />
                    </Box>
                  )}
                </Paper>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "70px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                width: { lg: "220px", md: "220px", sm: "300px", xs: "345px" },
                height: "50px",
                borderRadius: "16px",
                background: "#D92531",
                color: "white",
                fontSize: "22px",
                fontWeight: "400",
                textTransform: "none",
              }}
              onClick={() => handleModal()}
            >
              {isArabic ? "ادفع الفاتورة الآن" : "Pay Bill Now"}
            </Button>
          </Box>
          <PaymentModal
            loading={loading}
            setLoading={setLoading}
            paymentModal={paymentModal}
            setPaymentMethod={setPaymentMethod}
            paymentMethod={paymentMethod}
            setPaymentModal={setPaymentModal}
            setShowIframe={setShowIframe}
            handlePayment={handlePayment}
            subTotal={subTotal}
          />
        </>
      ) : (
        <>
          <iframe
            ref={iframeRef}
            id="payment-iframe"
            src={internalPostUrl}
            title="Payment Iframe"
            onLoad={handleIframeLoad}
            style={{ width: "100%", height: "100vh", border: "none" }}
          ></iframe>
        </>
      )}
    </>
  );
};

export default Checkout;
