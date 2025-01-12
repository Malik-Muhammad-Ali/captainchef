import { Box, Button, IconButton, Radio, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import MySubscriptionCard from "../../components/mySubscriptionCard/MySubscriptionCard";

const MySubscriptions = () => {
  const navigate = useNavigate();
  const { user, authenticated, paymentResult, language } = useAppStore();

  // States
  const [isPlanTypesExpanded, setIsPlanTypesExpanded] = useState(true);
  const [isPlanStatusExpanded, setIsPlanStatusExpanded] = useState(true);
  const [selectedPlanType, setSelectedPlanType] = useState("running");
  const [selectedPlanStatus, setSelectedPlanStatus] = useState();
  const [subscribedPlans, setSubscribedPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [renderedPlans, setRenderedPlans] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [planStatusOptions, setPlanStatusOptions] = useState({
    running: [
      { name: "Active", name_ar: "نشيط" },
      { name: "Inactive", name_ar: "غير نشط" },
      { name: "Hold", name_ar: "يمسك" },
    ],
    others: [
      { name: "Payment Pending", name_ar: "الدفع معلق" },
      { name: "Completed", name_ar: "مكتمل " },
    ],
  });

  // Batching function for rendering plans
  const batchRenderPlans = (plans, batchSize = 50) => {
    setRenderedPlans([]); // Clear previous rendered plans
    let index = 0;

    const renderBatch = () => {
      const nextBatch = plans.slice(index, index + batchSize);
      setRenderedPlans((prev) => [...prev, ...nextBatch]);
      index += batchSize;

      if (index < plans.length) {
        requestAnimationFrame(renderBatch);
      }
    };

    renderBatch();
  };

  // hanlde plan type
  const handlePlanTypeSelect = (type) => {
    let finalType;
    if (type === "running") {
      finalType = "paid";
    } else if (type === "others") {
      finalType = "unpaid";
    }

    const filtered = subscribedPlans?.filter((plan) => {
      if (plan?.order_details?.length > 0) {
        return plan?.order_details[0]?.payment_status === finalType;
      } else {
        return null;
      }
    });

    setFilteredPlans(filtered);
    batchRenderPlans(filtered); // Batch render the filtered plans
    setSelectedPlanType(type);
    setSelectedPlanStatus("");
  };

  // handle plan status
  const handlePlanStatusSelect = (status) => {
    let finalStatus;
    if (status === "Active") {
      finalStatus = "active";
    } else if (status === "Inactive") {
      finalStatus = "inactive";
    } else if (status === "Hold") {
      finalStatus = "cancel";
    } else if (status === "Payment Pending") {
      finalStatus = "waiting_for_payment";
    } else if (status === "Completed") {
      finalStatus = "completed";
    }

    const filtered = subscribedPlans?.filter((plan) => {
      if (plan?.order_details?.length > 0) {
        return plan?.order_details[0]?.status === finalStatus;
      } else {
        return null;
      }
    });

    setFilteredPlans(filtered);
    batchRenderPlans(filtered); // Batch render the filtered plans
    setSelectedPlanStatus(status);
  };
  console.log(filteredPlans);

  // fetch My Subscriptions
  const fetchMySubscriptions = async () => {
    console.log("Api Hit");
    try {
      const response = await axios.get(
        `https://portal.captainchef.net/public/contact/get-purchased-subscription?user_id=${user?.id}`
      );
      setSubscribedPlans(response?.data?.data);
      // setFilteredPlans(
      //   response?.data?.data.filter((plan) => {
      //     if (plan?.order_details?.length > 0) {
      //       return plan.order_details[0].payment_status === "paid";
      //     } else {
      //       return null;
      //     }
      //   })
      // );
      const initialFiltered = response?.data?.data?.filter((plan) => {
        if (plan?.order_details?.length > 0) {
          return plan.order_details[0].payment_status === "paid";
        } else {
          return null;
        }
      });
      setFilteredPlans(initialFiltered);
      batchRenderPlans(initialFiltered);
      return { message: "success" };
    } catch (error) {
      console.log(error);
    }
  };

  // Use Effect
  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated]);

  useEffect(() => {
    const fetchData = async () => {
      const { message } = await fetchMySubscriptions();
      console.log(message);
      if (message === "success") {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Component
  return (
    <>
      <Box
        sx={{
          px: { xs: 1, sm: 2, md: 4 },
          backgroundColor: "#F8F8F8",
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        {/* Back Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
          }}
        >
          <IconButton
            sx={{
              width: { xs: "48px", sm: "56px" },
              height: { xs: "48px", sm: "56px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
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
        </Box>

        {/* HURRAY!!! Content */}
        {paymentResult === "CAPTURED" && (
          <Box
            sx={{
              display: { lg: "flex", sm: "none", md: "flex", xs: "none" },
              flexDirection: "column",
              alignItems: "center",
              mt: { xs: 4, sm: 6, md: 8 },
              px: { xs: 2, sm: 4 },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="/hurray.png"
              alt="Authentication Illustration"
              sx={{
                width: { xs: "90%", sm: "70%", md: "369px" },
                height: "auto",
              }}
            />

            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                fontWeight: 600,
                mt: 2,
              }}
            >
              {language === "en" ? "Hurray!!!" : "!!! يا هلا"}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#666",
                marginBottom: "35px",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
              }}
            >
              {language === "en"
                ? "You have successfully purchased a subscription plan. But it's inactive now. For Activation, Download the app Now. Go to my subscriptions and schedule it."
                : "لقد قمت بشراء خطة الاشتراك بنجاح. لكنه كذلك غير نشط الآن. للتفعيل قم بتحميل التطبيق الآن. اذهب الى بلدي الاشتراكات وجدولتها."}
            </Typography>
          </Box>
        )}

        {/*OOPS content */}
        {paymentResult === "REJECTED" && (
          <Box
            sx={{
              display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
              flexDirection: "column",
              alignItems: "center",
              mt: { xs: 4, sm: 6, md: 8 },
              px: { xs: 2, sm: 4 },
            }}
          >
            <Box
              component="img"
              src="/oops.png"
              alt="Authentication Illustration"
              sx={{
                width: { xs: "90%", sm: "70%", md: "369px" },
                height: "auto",
              }}
            />

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                fontWeight: 600,
                mt: 2,
              }}
            >
              {language === "en" ? "Oops!!!" : "!!! أُووبس"}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#666",
                marginBottom: "35px",
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
              }}
            >
              {language === "en"
                ? "Payment Failed, It is held till your payment paid successfully. For Try again, Please press complete Payment button."
                : "فشل الدفع، يتم تعليقه حتى يتم سداد دفعتك بنجاح. للمحاولة مرة أخرى، يرجى الضغط على زر إتمام الدفع."}
            </Typography>
          </Box>
        )}

        {/*container to be displayed as on mobile app of CC*/}
        <Box
          sx={{
            mt: "20px",
            padding: "16px",
            display: { xs: "block", md: "none" },
          }}
        >
          {/* Tabs Section */}
          <Box
            sx={{
              display: "flex",
              gap: 0,
              mb: 2,
              borderRadius: "12px",
              overflow: "hidden",
              height: "40px",
            }}
          >
            <Button
              onClick={() => {
                handlePlanTypeSelect("running");
              }}
              sx={{
                flex: 1,
                borderRadius: "10px",
                bgcolor: selectedPlanType === "running" ? "#D92531" : "white",
                color: selectedPlanType === "running" ? "#fff" : "#000",
                fontSize: "12px",
                ":hover": {
                  bgcolor:
                    selectedPlanType === "running" ? "#D92531" : "#e0e0e0",
                },
              }}
            >
              {language === "ar" ? "جاري" : "Running"}
            </Button>
            <Button
              onClick={() => {
                handlePlanTypeSelect("others");
              }}
              sx={{
                flex: 1,
                borderRadius: "10px",
                bgcolor: selectedPlanType === "others" ? "#D92531" : "white",
                color: selectedPlanType === "others" ? "#fff" : "#000",
                fontSize: "12px",
                ":hover": {
                  bgcolor:
                    selectedPlanType === "others" ? "#D92531" : "#e0e0e0",
                },
              }}
            >
              {language === "ar" ? "أخرى" : "Others"}
            </Button>
          </Box>

          {/* Heading Section */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#333", fontSize: "16px", mb: 2 }}
          >
            {selectedPlanType === "running"
              ? "Running Subscriptions"
              : "Other Subscriptions"}
          </Typography>

          {/* Status Buttons Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            {selectedPlanType === "running" ? (
              <>
                {/* Active, Inactive, Hold Buttons */}
                <Button
                  onClick={() => {
                    setSelectedStatus("Active");
                    handlePlanStatusSelect("Active");
                  }}
                  sx={{
                    flex: 1,
                    bgcolor: selectedStatus === "Active" ? "#4caf50" : "white",
                    color: selectedStatus === "Active" ? "#fff" : "#000",
                    height: "44px",
                    fontSize: "12px",
                    borderRadius: "8px",
                    ":hover": {
                      bgcolor:
                        selectedStatus === "Active" ? "#388e3c" : "#e0e0e0",
                    },
                  }}
                >
                  {language === "en" ? "Active" : "نشيط"}
                </Button>
                <Button
                  onClick={() => {
                    setSelectedStatus("Inactive");
                    handlePlanStatusSelect("Inactive");
                  }}
                  sx={{
                    flex: 1,
                    bgcolor:
                      selectedStatus === "Inactive" ? "#FFD700" : "white",
                    color: selectedStatus === "Inactive" ? "#fff" : "#000",
                    height: "44px",
                    fontSize: "12px",
                    borderRadius: "8px",
                    ":hover": {
                      bgcolor:
                        selectedStatus === "Inactive" ? "#e6c200" : "#e0e0e0",
                    },
                  }}
                >
                  {language === "en" ? "Inactive" : "غير نشط"}
                </Button>
                <Button
                  onClick={() => {
                    setSelectedStatus("Hold");
                    handlePlanStatusSelect("Hold");
                  }}
                  sx={{
                    flex: 1,
                    bgcolor: selectedStatus === "Hold" ? "#000" : "white",
                    color: selectedStatus === "Hold" ? "#fff" : "#000",
                    height: "44px",
                    fontSize: "12px",
                    borderRadius: "8px",
                    ":hover": {
                      bgcolor: selectedStatus === "Hold" ? "#333" : "#e0e0e0",
                    },
                  }}
                >
                  {language === "en" ? "Hold" : "يمسك"}
                </Button>
              </>
            ) : (
              <>
                {/* Payment Pending, Completed Buttons */}
                <Button
                  onClick={() => {
                    setSelectedStatus("Payment Pending");
                    handlePlanStatusSelect("Payment Pending");
                  }}
                  sx={{
                    flex: 1,
                    bgcolor:
                      selectedStatus === "Payment Pending"
                        ? "#FFD700"
                        : "white",
                    color:
                      selectedStatus === "Payment Pending" ? "#fff" : "#000",
                    height: "44px",
                    fontSize: "12px",
                    borderRadius: "8px",
                    ":hover": {
                      bgcolor:
                        selectedStatus === "Payment Pending"
                          ? "#FFD700"
                          : "#e0e0e0",
                    },
                  }}
                >
                  {language === "en" ? "Payment Pending" : "الدفع معلق"}
                </Button>
                <Button
                  onClick={() => {
                    setSelectedStatus("Completed");
                    handlePlanStatusSelect("Completed");
                  }}
                  sx={{
                    flex: 1,
                    bgcolor:
                      selectedStatus === "Completed" ? "#FFD700" : "white",
                    color: selectedStatus === "Completed" ? "#fff" : "#000",
                    height: "44px",
                    fontSize: "12px",
                    borderRadius: "8px",
                    ":hover": {
                      bgcolor:
                        selectedStatus === "Completed" ? "#FFD700" : "#e0e0e0",
                    },
                  }}
                >
                  {language === "en" ? "Completed" : "مكتمل"}
                </Button>
              </>
            )}
          </Box>
        </Box>

        {/* Paper */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 10, sm: 4 },
            direction: language === "en" ? "ltr" : "rtl",
          }}
        >
          <Box
            sx={{
              maxHeight: { lg: "475px", xl: "475px", md: "475px" },
              minHeight: { lg: "400px", xl: "400px", md: "400px" },
              backgroundColor: "white",
              padding: "16px",
              width: "350px",
              mb: "5px",
              ml: { xs: "10px" },
              mr: { lg: "40px", md: "40px", xs: "10px", xl: "40px" },
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              flexDirection: "column",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Plan Types Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                {language === "en" ? "Plan Types" : "أنواع الخطط"}
              </Typography>
              <IconButton
                sx={{ p: 0 }}
                onClick={() => setIsPlanTypesExpanded(!isPlanTypesExpanded)}
              >
                {isPlanTypesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            {isPlanTypesExpanded && (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor:
                      selectedPlanType === "running"
                        ? "#FAE9EA"
                        : "transparent",
                    padding: "10px",
                    borderRadius: "8px",
                    mb: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => handlePlanTypeSelect("running")}
                >
                  <Radio
                    checked={selectedPlanType === "running"}
                    sx={{
                      color: "#f28b82",
                      "&.Mui-checked": { color: "red" },
                    }}
                  />
                  <Typography sx={{ fontSize: "14px", ml: 1 }}>
                    {language === "en" ? "Running" : "جري"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor:
                      selectedPlanType === "others" ? "#FAE9EA" : "transparent",
                    padding: "10px",
                    borderRadius: "8px",
                    mb: 3,
                    cursor: "pointer",
                  }}
                  onClick={() => handlePlanTypeSelect("others")}
                >
                  <Radio
                    checked={selectedPlanType === "others"}
                    sx={{
                      color: "#f28b82",
                      "&.Mui-checked": { color: "red" },
                    }}
                  />
                  <Typography sx={{ fontSize: "14px", ml: 1 }}>
                    {language === "en" ? "Others" : "آحرون"}
                  </Typography>
                </Box>
              </Box>
            )}

            {/* Plan Status Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                {language === "en" ? "Plan Status" : "حالة الخطة"}
              </Typography>
              <IconButton
                sx={{ p: 0 }}
                onClick={() => setIsPlanStatusExpanded(!isPlanStatusExpanded)}
              >
                {isPlanStatusExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>

            {isPlanStatusExpanded && selectedPlanType && (
              <Box>
                {planStatusOptions[selectedPlanType].map((status, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor:
                        selectedPlanStatus === status.name
                          ? "#FAE9EA"
                          : "transparent",
                      padding: "10px",
                      borderRadius: "8px",
                      mb: 1,
                      cursor: "pointer",
                    }}
                    onClick={() => handlePlanStatusSelect(status.name)}
                  >
                    <Radio
                      checked={selectedPlanStatus === status.name}
                      sx={{
                        color: "#f28b82",
                        "&.Mui-checked": { color: "red" },
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", ml: 1 }}>
                      {language === "en" ? status.name : status.name_ar}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              width: "100%",
              gap: "1.5rem",
            }}
          >
            {/* Heading Section */}
            <Box
              sx={{
                textAlign: "start",
                padding: {
                  xs: "10px 20px",
                  sm: "10px 66px",
                  md: "10px 0px",
                  lg: "10px 0px",
                },
              }}
            >
              <Typography
                color="initial"
                sx={{
                  fontSize: { xs: "24px", sm: "28px", md: "28px", lg: "28px" },
                }}
              >
                {language === "en" ? "My Subscriptions" : "اشتراكاتي"}
              </Typography>
            </Box>

            {/* Cards Section */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                  sm: "center",
                  lg: "",
                },
                gap: 2,
                width: "100%",
              }}
            >
              {loading === true ? (
                <Loader title="Subscriptions" />
              ) : (
                renderedPlans?.map((plan, index) => {
                  if (plan?.order_details?.length > 0) {
                    return <MySubscriptionCard key={index} plan={plan} />;
                  }
                  return null;
                })
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MySubscriptions;
