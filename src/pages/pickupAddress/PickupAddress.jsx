import { Box, Button, Radio, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const PickupAddress = () => {
  const navigate = useNavigate();
  const {language} = useAppStore();
  const arr = ["Home1", "Home2", "Office", "Playground"];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [error, setError] = useState(null);
  const isArabic = language == 'ar';
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleNavigation = () => {
    if (selectedIndex === null) {
      setError("Please select an address");
    } else {
      setError(null);
      navigate("/checkout");
    }
  };
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
            {isArabic ? "عنوان الاستلام" : "Pickup Address"}
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
          >
            {isArabic?"إضافة جديد":"Add new"}
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
          {arr.map((key, index) => (
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
                height: { xs: "96px", sm: "76px", md: "64px", lg: "64px" },
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
                    {key}
                  </Typography>
                </Box>
                {/* {isMobile && (
          <IconButton
            sx={{
              // backgroundColor: "#FAE9EA",
              // color: "#D92531",
              padding: "4px",
              borderRadius: "50%",
            }}
          >
            <img
                  src="/Trash_light.png"
                  alt="trash-icon"
                  style={{
                    width: "100%",
                    maxWidth: "24px",
                    objectFit: "contain",
                  }}
                />
          </IconButton>
        )} */}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:{lg:"flex-end",md:"flex-end",sm:"flex-end",xs:"flex-start"},
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
                  Short address here
                </Typography>
              </Box>
              {/* {isDesktopOrTablet && (
          <IconButton
            sx={{
              // backgroundColor: "#FAE9EA",
              color: "#D92531",
              padding: "4px",
              borderRadius: "50%",
            }}
          >
            <img
                  src="/Trash_light.png"
                  alt="trash-icon"
                  style={{
                    width: "100%",
                    maxWidth: "24px",
                    objectFit: "contain",
                  }}
                />
          </IconButton>
        )} */}
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
            alignItems: "flex-end",
            boxShadow: "none",
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
    </>
  );
};

export default PickupAddress;
