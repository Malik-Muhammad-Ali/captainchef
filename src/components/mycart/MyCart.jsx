import {
  Box,
  Button,
  Divider,
  Grid2,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useAppStore from "../../store/store";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const MyCart = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/checkout");
  };
  const { language, user, fetchCartData, totalPrice, cartData } = useAppStore();
  const isArabic = language == "ar";
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // handle delete meal from cart
  const handleDelete = async (productId) => {
    try {
      await axios.get(
        "https://portal.captainchef.net/public/api/ver2/delete-item-from-cart",
        {
          params: {
            user_id: user?.id,
            id: productId,
          },
        }
      );
      // Update cart after deletion
      fetchCartData(user?.id);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { message } = await fetchCartData(user?.id);
      if (message === "success") {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Component
  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          direction: isArabic ? "rtl" : "ltr",
          height: "calc(100vh - 180px)",
          overflowY: "scroll",
        }}
      >
        {/* Back Arrow Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            m: { xs: "12px", sm: "16px" },
          }}
        >
          {/* Icon Container */}
          <Box
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
          </Box>

          {/* Typography Container */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "18px", sm: "18px" },
              ml: language === "ar" ? "8px" : "16px",
              mr: language === "ar" ? "16px" : "8px",
              textAlign: "center",
            }}
          >
            {language === "ar" ? "عربة التسوق" : "Cart"}
          </Typography>
        </Box>

        {/* Main Content */}
        {loading === true ? (
          <Loader title="Cart" />
        ) : (
          <Grid2
            sx={{
              display: "flex",
              padding: "12px",
            }}
          >
            <Paper
              elevation={1}
              sx={{
                padding: "20px",
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                textAlign: "center",
                borderRadius: "12px",
                display: { xs: "none", sm: "block" },
              }}
            >
              {/* Headings */}
              {cartData.length > 0 ? (
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 2,
                    padding: "15px 20px",
                    borderRadius: "8px",
                    marginBottom: "30px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {isArabic ? "المنتج" : "Product"}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {isArabic ? "السعر" : "Price"}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {isArabic ? "النوع" : "Type"}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", opacity: 0 }}
                  >
                    {isArabic ? "فارغ" : "Empty"}
                  </Typography>
                </Box>
              ) : (
                <Typography
                  varient="h1"
                  sx={{
                    fontSize: "34px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Cart is Empty
                </Typography>
              )}

              {/* Product Rows */}
              {cartData?.map((product, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    alignItems: "center",
                    padding: "15px 20px",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    marginBottom: "25px",
                    gap: 2,
                  }}
                >
                  {/* Sub-grid for image, title, and description */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "50px auto",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    {/* Small picture */}
                    {isLoaded === true ? (
                      <Box
                        component="img"
                        src={`https://portal.captainchef.net/public/modules/Captainchef/sub_plan_images/${product?.plan?.plan_image}`}
                        alt="product-thumbnail"
                        sx={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    ) : (
                      <Box
                        component="img"
                        src='/Banner.png'
                        alt="product-thumbnail"
                        sx={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onLoad={() => setIsLoaded(true)}
                      />
                    )}
                    <Box sx={{ textAlign: "left" }}>
                      {/* Title */}
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          marginBottom: "4px",
                          ml: language == "ar" ? "25px" : "25px",
                          mr: language == "ar" ? "25px" : "80px",
                          textAlign: "start",
                        }}
                      >
                        {language === "en"
                          ? product?.plan?.title
                          : product?.plan?.title_ar}
                      </Typography>
                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          ml: language == "ar" ? "35px" : "22px",
                          mr: language == "ar" ? "0px" : "15px",
                        }}
                      >
                        {product?.plan?.plan_type_range} Plan
                      </Typography>
                    </Box>
                  </Box>

                  {/* Price */}
                  <Typography variant="body1" sx={{ color: "#D52931" }}>
                    {product?.plan?.discount_offer_only === "yes"
                      ? product?.plan?.discounted_amount
                      : product?.plan?.basic_amount}
                  </Typography>

                  {/* Delivery Type */}
                  <Typography variant="body1" sx={{ color: "#D92531" }}>
                    {product?.delivery_type === "delivery" &&
                      (language === "en"
                        ? "Home Delivery"
                        : "توصيل إلى المنزل")}
                    {product?.delivery_type === "pickup" &&
                      (language === "en" ? "Pick Up" : "يلتقط")}
                  </Typography>

                  {/* Delete Icon */}
                  <Grid2>
                    <IconButton
                      sx={{
                        border: "none",
                        transition: "none",
                      }}
                      onClick={() => handleDelete(product?.id)}
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2_150)">
                          <path
                            d="M26.2499 4.99998H22.3749C22.0848 3.58925 21.3172 2.32167 20.2014 1.41088C19.0857 0.500097 17.6901 0.0018029 16.2499 -1.52588e-05L13.7499 -1.52588e-05C12.3096 0.0018029 10.914 0.500097 9.79831 1.41088C8.6826 2.32167 7.915 3.58925 7.62488 4.99998H3.74988C3.41836 4.99998 3.10041 5.13168 2.86599 5.3661C2.63157 5.60052 2.49988 5.91846 2.49988 6.24998C2.49988 6.58151 2.63157 6.89945 2.86599 7.13387C3.10041 7.36829 3.41836 7.49998 3.74988 7.49998H4.99988V23.75C5.00186 25.407 5.66098 26.9955 6.83265 28.1672C8.00433 29.3389 9.59288 29.998 11.2499 30H18.7499C20.4069 29.998 21.9954 29.3389 23.1671 28.1672C24.3388 26.9955 24.9979 25.407 24.9999 23.75V7.49998H26.2499C26.5814 7.49998 26.8993 7.36829 27.1338 7.13387C27.3682 6.89945 27.4999 6.58151 27.4999 6.24998C27.4999 5.91846 27.3682 5.60052 27.1338 5.3661C26.8993 5.13168 26.5814 4.99998 26.2499 4.99998ZM13.7499 2.49998H16.2499C17.0252 2.50093 17.7813 2.7417 18.4144 3.18929C19.0475 3.63687 19.5266 4.26935 19.7861 4.99998H10.2136C10.4731 4.26935 10.9523 3.63687 11.5854 3.18929C12.2185 2.7417 12.9745 2.50093 13.7499 2.49998ZM22.4999 23.75C22.4999 24.7445 22.1048 25.6984 21.4015 26.4016C20.6983 27.1049 19.7444 27.5 18.7499 27.5H11.2499C10.2553 27.5 9.30149 27.1049 8.59823 26.4016C7.89497 25.6984 7.49988 24.7445 7.49988 23.75V7.49998H22.4999V23.75Z"
                            fill="#CE2729"
                          />
                          <path
                            d="M12.5 22.4992C12.8315 22.4992 13.1495 22.3675 13.3839 22.1331C13.6183 21.8987 13.75 21.5807 13.75 21.2492V13.7492C13.75 13.4177 13.6183 13.0998 13.3839 12.8653C13.1495 12.6309 12.8315 12.4992 12.5 12.4992C12.1685 12.4992 11.8505 12.6309 11.6161 12.8653C11.3817 13.0998 11.25 13.4177 11.25 13.7492V21.2492C11.25 21.5807 11.3817 21.8987 11.6161 22.1331C11.8505 22.3675 12.1685 22.4992 12.5 22.4992Z"
                            fill="#CE2729"
                          />
                          <path
                            d="M17.4998 22.4992C17.8313 22.4992 18.1493 22.3675 18.3837 22.1331C18.6181 21.8987 18.7498 21.5807 18.7498 21.2492V13.7492C18.7498 13.4177 18.6181 13.0998 18.3837 12.8653C18.1493 12.6309 17.8313 12.4992 17.4998 12.4992C17.1683 12.4992 16.8504 12.6309 16.6159 12.8653C16.3815 13.0998 16.2498 13.4177 16.2498 13.7492V21.2492C16.2498 21.5807 16.3815 21.8987 16.6159 22.1331C16.8504 22.3675 17.1683 22.4992 17.4998 22.4992Z"
                            fill="#CE2729"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_150">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </IconButton>
                  </Grid2>
                </Box>
              ))}
            </Paper>

            {/* mobile paper*/}
            <Paper
              elevation={1}
              sx={{
                padding: "10px",
                width: "100%",
                textAlign: "start",
                borderRadius: "12px",
                display: { xs: "block", sm: "none" },
                backgroundColor: "#ffffff",
                marginBottom: "20px",
              }}
            >
              {cartData?.map((product, index) => {
                return (
                  <div key={index}>
                    {/* Main Container */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      {/* Product Image */}
                      <Box
                        component="img"
                        src="userfollowingthree.jpg" // Replace with your image URL or import
                        alt="product-thumbnail"
                        sx={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />

                      {/* Text and Details */}
                      <Box
                        sx={{
                          flex: 1,
                          marginLeft: language === "en" ? "15px" : "0px", // Adjust based on language
                          marginRight: language === "ar" ? "15px" : "0px",
                        }}
                      >
                        {/* Product Title */}
                        <Typography variant="h6">
                          {language === "en"
                            ? product?.plan?.title
                            : product?.plan?.title_ar}
                        </Typography>

                        {/* Price */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#D92531",
                            marginTop: "4px",
                          }}
                        >
                          {product?.plan?.discount_offer_only === "yes"
                            ? product?.plan?.discounted_amount
                            : product?.plan?.basic_amount}
                        </Typography>

                        {/* Delivery Type */}
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#D92531",
                            marginTop: "2px",
                          }}
                        >
                          {product?.delivery_type === "delivery" &&
                            (language === "en"
                              ? "Home Delivery"
                              : "توصيل إلى المنزل")}
                          {product?.delivery_type === "pickup" &&
                            (language === "en" ? "Pick Up" : "يلتقط")}
                        </Typography>
                      </Box>

                      {/* Delete Icon */}
                      <IconButton
                        sx={{
                          border: "none",
                          transition: "none",
                        }}
                        onClick={() => handleDelete(product?.id)}
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2_150)">
                            <path
                              d="M26.2499 4.99998H22.3749C22.0848 3.58925 21.3172 2.32167 20.2014 1.41088C19.0857 0.500097 17.6901 0.0018029 16.2499 -1.52588e-05L13.7499 -1.52588e-05C12.3096 0.0018029 10.914 0.500097 9.79831 1.41088C8.6826 2.32167 7.915 3.58925 7.62488 4.99998H3.74988C3.41836 4.99998 3.10041 5.13168 2.86599 5.3661C2.63157 5.60052 2.49988 5.91846 2.49988 6.24998C2.49988 6.58151 2.63157 6.89945 2.86599 7.13387C3.10041 7.36829 3.41836 7.49998 3.74988 7.49998H4.99988V23.75C5.00186 25.407 5.66098 26.9955 6.83265 28.1672C8.00433 29.3389 9.59288 29.998 11.2499 30H18.7499C20.4069 29.998 21.9954 29.3389 23.1671 28.1672C24.3388 26.9955 24.9979 25.407 24.9999 23.75V7.49998H26.2499C26.5814 7.49998 26.8993 7.36829 27.1338 7.13387C27.3682 6.89945 27.4999 6.58151 27.4999 6.24998C27.4999 5.91846 27.3682 5.60052 27.1338 5.3661C26.8993 5.13168 26.5814 4.99998 26.2499 4.99998ZM13.7499 2.49998H16.2499C17.0252 2.50093 17.7813 2.7417 18.4144 3.18929C19.0475 3.63687 19.5266 4.26935 19.7861 4.99998H10.2136C10.4731 4.26935 10.9523 3.63687 11.5854 3.18929C12.2185 2.7417 12.9745 2.50093 13.7499 2.49998ZM22.4999 23.75C22.4999 24.7445 22.1048 25.6984 21.4015 26.4016C20.6983 27.1049 19.7444 27.5 18.7499 27.5H11.2499C10.2553 27.5 9.30149 27.1049 8.59823 26.4016C7.89497 25.6984 7.49988 24.7445 7.49988 23.75V7.49998H22.4999V23.75Z"
                              fill="#CE2729"
                            />
                            <path
                              d="M12.5 22.4992C12.8315 22.4992 13.1495 22.3675 13.3839 22.1331C13.6183 21.8987 13.75 21.5807 13.75 21.2492V13.7492C13.75 13.4177 13.6183 13.0998 13.3839 12.8653C13.1495 12.6309 12.8315 12.4992 12.5 12.4992C12.1685 12.4992 11.8505 12.6309 11.6161 12.8653C11.3817 13.0998 11.25 13.4177 11.25 13.7492V21.2492C11.25 21.5807 11.3817 21.8987 11.6161 22.1331C11.8505 22.3675 12.1685 22.4992 12.5 22.4992Z"
                              fill="#CE2729"
                            />
                            <path
                              d="M17.4998 22.4992C17.8313 22.4992 18.1493 22.3675 18.3837 22.1331C18.6181 21.8987 18.7498 21.5807 18.7498 21.2492V13.7492C18.7498 13.4177 18.6181 13.0998 18.3837 12.8653C18.1493 12.6309 17.8313 12.4992 17.4998 12.4992C17.1683 12.4992 16.8504 12.6309 16.6159 12.8653C16.3815 13.0998 16.2498 13.4177 16.2498 13.7492V21.2492C16.2498 21.5807 16.3815 21.8987 16.6159 22.1331C16.8504 22.3675 17.1683 22.4992 17.4998 22.4992Z"
                              fill="#CE2729"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_150">
                              <rect width="30" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </IconButton>
                    </Box>

                    {/* Divider with Margin */}
                    <Divider sx={{ mt: "20px", mb: "10px" }} />
                  </div>
                );
              })}
            </Paper>
          </Grid2>
        )}
      </Grid2>
      {/* Desktop Button */}

      <Box
        sx={{
          bgcolor: "#F8F8F8",
          justifyContent: "space-between",
          direction: isArabic ? "rtl" : "ltr",
          alignItems: "center",
          boxShadow: "none",
          mb: "10px",
          padding: "20px",
          display: { xs: "flex", md: "none" },
        }}
      >
        {/* First Division: Typography */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Plan2 Typography */}
          {/* <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              fontSize: "12px",
              textAlign: "center",
              marginBottom: "5px",
            }}
          >
            {isArabic ? "الخطة 2" : "Plan 2"}
          </Typography> */}

          {/* Total Typography */}
          <Box sx={{ ml: "20px" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "500",
                fontSize: "12 px",
                textAlign: "center",
                marginBottom: "5px",
                mr: isArabic ? "20px" : "0px",
              }}
            >
              {isArabic ? "إجمالي" : "Total"}
            </Typography>

            {/* 1193Sr Typography */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                fontSize: "12px",
                color: "#D92531",
                textAlign: "center",
                mr: isArabic ? "20px" : "0px",
              }}
            >
              {totalPrice}
            </Typography>
          </Box>
        </Box>

        {/* Second Division: Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#D92531",
              width: "50%",
              borderRadius: "16px",
              height: "48px",
              boxShadow: "none",
            }}
            onClick={() => handleNavigation()}
          >
            {isArabic ? "الدفع" : "Checkout"}
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#F8F8F8",
          position: "fixed",
          display: { md: "flex", xs: "none" },
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "none",
          mb: "10px",
          width: "100%",
          height: "50px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#D92531",
            width: { xs: "280px", md: "180px", sm: "180px" },
            borderRadius: { xs: "12px", sm: "16px", md: "16px", lg: "16px" },
            height: "48px",
            boxShadow: "none",
          }}
          onClick={() => handleNavigation()}
        >
          {isArabic ? "الدفع" : "Checkout"}
        </Button>
      </Box>
    </>
  );
};

export default MyCart;
