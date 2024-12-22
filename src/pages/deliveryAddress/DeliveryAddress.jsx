import { Box, Button, Radio, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";
import { useEffect } from "react";

const DeliveryAddress = () => {
  const navigate = useNavigate();
  const { fetchAddress, address, language, user } = useAppStore();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [error, setError] = useState(null);
  const isArabic = language == "ar";
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleNavigation = () => {
    if (selectedIndex === null) {
      setError("Please select an address");
    } else {
      setError(null);
      navigate("/cart");
    }
  };
  useEffect(() => {
    fetchAddress(user.user_id);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { lg: "30px", md: "30px", sm: "15px", xs: "24px" },
        bgcolor: "#F8F8F8",
        height: "calc(100vh - 170px)",
        overflowY:"scroll",
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
                paddingLeft: { xs: "5px", sm: "8px" },
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
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
    <Box sx={{
        bgcolor: "#F8F8F8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
        width:"100%",
        height:"50px"
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
          {isArabic?"التالي":"Next"}
      </Button>
    </Box>
  </Box>
);
};

export default DeliveryAddress;
