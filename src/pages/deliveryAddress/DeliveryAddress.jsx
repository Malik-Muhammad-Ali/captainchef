import { Box, Button, Radio, Typography, IconButton, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";
import { useEffect } from "react";
import { useTheme } from "@emotion/react";

const DeliveryAddress = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  const isDesktopOrTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const { fetchAddress, address, language, user, deleteAddress } =
    useAppStore();
  const isArabic = language == "ar";

  // States
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [error, setError] = useState(null);

  // handle select
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  // handle navigation
  const handleNavigation = () => {
    if (selectedIndex === null) {
      setError("Please select an address");
    } else {
      setError(null);
      navigate("/cart");
    }
  };

  const handleDelete = async (addressId) => {
    console.log(addressId, user?.id);
    const status = await deleteAddress(user?.id, addressId);
    if (status === "success") {
      fetchAddress(user?.id);
    }
  };

  // useEffect
  useEffect(() => {
    fetchAddress(user?.id);
  }, []);

  // Components
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { lg: "30px", md: "30px", sm: "15px", xs: "24px" },
        bgcolor: "#F8F8F8",
        height: "calc(100vh - 170px)",
        overflowY: "scroll",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: "0 10px",
          width: { lg: "1100px", md: "920px", sm: "664px", xs: "311px" },
          mt: { lg: "30px", md: "30px", sm: "15px", xs: "24px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: {
              xs: "10px",
              sm: "30px",
              md: "30px",
            },
          }}
        >
          <IconButton
            sx={{
              borderRadius: "20%",
              backgroundColor: "#fff",
              width: { xs: "40px", sm: "48px", md: "56px" },
              height: { xs: "40px", sm: "48px", md: "56px" },
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon
              sx={{
                fontSize: "24px",
                ml: language === "ar" ? "-10px" : "10px", // Adjust margin conditionally
                transform:
                  language === "ar" ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </IconButton>
          <Typography
            sx={{
              fontSize: { md: "32px", sm: "32px", xs: "20px" },
              fontWeight: { md: "700px", sm: "32px", xs: "500px" },
              fontFamily: "Work Sans",
            }}
          >
            {isArabic ? "عنوان التسليم" : "Delivery Address"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#D92531",
              textDecoration: "underline",
              cursor: "pointer",
              fontFamily: "Work Sans",
            }}
            onClick={() => navigate("/addDeliveryAddress")}
          >
            {isArabic ? "إضافة جديد" : "Add new"}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          marginBottom: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: { lg: "1100px", md: "920px", sm: "664px", xs: "311px" },
            bgcolor: "#F8F8F8",
            borderRadius: "16px",
          }}
        >
          {address?.map((singleAddress, index) => (
            <Box
              key={index}
              onClick={() => handleSelect(index)}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                padding: "8px 16px",
                border:
                  selectedIndex === index
                    ? "2px solid #D92531"
                    : "1px solid #e0e0e0",
                borderRadius: "12px",
                bgcolor: selectedIndex === index ? "#FAE9EA" : "#FFFFFF",
                width: { lg: "1080px", md: "900px", sm: "644px", xs: "280px" },
                minHeight: { xs: "96px", sm: "76px", md: "64px", lg: "64px" },
                margin: "8px 0",
                boxShadow: "none",
                cursor: "pointer",
              }}
            >
              <Box
                checked={selectedIndex === index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Radio
                    checked={selectedIndex === index}
                    onChange={() => handleSelect(index)}
                    sx={{
                      color: selectedIndex === index ? "#D92531" : "#e0e0e0",
                      "&.Mui-checked": {
                        color: "#D92531",
                        bgcolor: "#FAE9EA",
                      },
                      padding: 0,
                      marginRight: "8px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { md: "18px", xs: "16px" },
                      fontWeight: "400px",
                      fontFamily: "work sans",
                    }}
                  >
                    {singleAddress.address_type}
                  </Typography>
                </Box>
                {isMobile && (
                  <IconButton
                  sx={{
                    border: "none",
                    transition: "none",
                  }}
                  onClick={() => {
                    event.stopPropagation();
                    handleDelete(singleAddress.id);
                  }}
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
        )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: {
                    lg: "flex-end",
                    md: "flex-end",
                    sm: "flex-end",
                    xs: "flex-start",
                  },
                  marginTop: { xs: "8px", sm: "0" },
                  padding: "8px",
                  gap: "6x",
                  borderRadius: "8px",
                  width: { sm: "100%", xs: "100%", md: "100%", lg: "100%" },
                }}
              >
                <LocationOnOutlinedIcon />
                <Typography
                  fontSize="14px"
                  fontWeight="400px"
                  fontFamily="work sans"
                >
                  {singleAddress.address}
                </Typography>
              </Box>
              {isDesktopOrTablet && (
          <IconButton
                  sx={{
                    border: "none",
                    transition: "none",
                  }}
                  onClick={() => {
                    event.stopPropagation();
                    handleDelete(singleAddress.id);
                  }}
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
        )}
            </Box>
          ))}
          <p
            style={{
              textAlign: "center",
              fontSize: "22px",
              color: "red",
              fontWeight: "500",
            }}
          >
            {error}
          </p>
        </Box>
      </Box>
    </Box>
      <Box
        sx={{
          bgcolor: "#F8F8F8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "none",
          width: "100%",
          height: "50px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#D92531",
            width: { xs: "280px", md: "130px", sm: "130px" },
            borderRadius: { xs: "12px", sm: "16px", md: "16px", lg: "16px" },
            height: "48px",
            boxShadow: "none",
          }}
          onClick={() => handleNavigation()}
        >
          {isArabic ? "التالي" : "Next"}
        </Button>
      </Box>
    </>
  );
};

export default DeliveryAddress;
