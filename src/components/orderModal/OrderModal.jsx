import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Modal,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OrderModal = ({ modalOpen, setModalOpen }) => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedCity) {
      setModalOpen(false);
      if (selectedCity === "Home Delivery") {
        navigate("/deliveryaddress");
      } else if (selectedCity === "Pickup") {
        navigate("/pickupaddress");
      }
    }
  };
  const modalProps = {
    disablePortal: modalOpen, // Prevent internal layering
    // hideBackdrop: true,  // Remove the default backdrop
  };

  return (
    <Modal open={modalOpen} {...modalProps}>
      <motion.div
        initial={{
          opacity: 0,
          y: isMobile ? "100%" : -20, // Start from the bottom on mobile, slightly above on web/tablet
        }}
        animate={{
          opacity: 1,
          y: isMobile ? 0 : 0, // Slide to 0 (bottom of screen for mobile, center for web/tablet)
        }}
        exit={{
          opacity: 0,
          y: isMobile ? "100%" : -20, // Return to starting position when closing
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: isMobile ? "100%" : "400px",
          // maxWidth: "400px",
          left: isMobile ? 0 : "35%",
          bottom: isMobile ? 0 : "auto",
          top: isMobile ? "auto" : "20%",
          transform: isMobile ? "none" : "translate(-50%, -50%)",
          outline: "none",
        }}
      >
        <Box
          sx={{
            borderTopLeftRadius: isMobile ? "16px" : "8px",
            borderTopRightRadius: isMobile ? "16px" : "8px",
            borderRadius: isMobile ? "16px 16px 0 0" : "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            outline: "none",
            backgroundColor: "background.paper",
            padding: isMobile ? "24px" : "32px",
          }}
        >
          <Typography
            id="city-selector-modal"
            sx={{
              fontSize: {
                xs: "18px",
                sm: "22px",
                md: "28px",
                lg: "28px",
                xl: "32px",
              },
              fontWeight: 500,
              fontFamily: "work sans",
              marginBottom: 2,
              ml: 2,
            }}
          >
            Select Order Type
          </Typography>

          <RadioGroup
            value={selectedCity}
            onChange={handleCityChange}
            sx={{
              width: "100%",
            }}
          >
            {["Pickup", "Home Delivery"].map((city) => (
              <FormControlLabel
                key={city}
                value={city}
                control={
                  <Radio
                    sx={{
                      color: "#D92531",
                      "&.Mui-checked": {
                        color: "#D92531",
                      },
                    }}
                  />
                }
                label={
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {city}
                    {city === "Home Delivery" &&
                      selectedCity === "Home Delivery" && (
                        <span
                          style={{
                            marginLeft: "8px",
                            color: "#D92531",
                            fontSize: "14px",
                            fontFamily: "work sans",
                          }}
                        >
                          (Charges apply)
                        </span>
                      )}
                  </span>
                }
                sx={{
                  display: "flex",
                  ml: 2,
                  alignItems: "center",
                  padding: "8px 16px",
                  marginBottom: "8px",
                  borderRadius: "8px",
                  backgroundColor:
                    selectedCity === city ? "#FAE9EA" : "#F8F8F8",
                  border:
                    selectedCity === city
                      ? "2px solid #D92531"
                      : "1px solid #e0e0e0",
                  fontSize: "18px",
                  fontWeight: 400,
                  fontFamily: "work sans",
                }}
              />
            ))}
          </RadioGroup>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!selectedCity}
            sx={{
              width: "91%",
              mt: 2,
              ml: 2,
              height: "48px",
              borderRadius: "12px",
              bgcolor: "#D92531",
              "&:hover": { bgcolor: "#D92550" },
            }}
          >
            Next
          </Button>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default OrderModal;
