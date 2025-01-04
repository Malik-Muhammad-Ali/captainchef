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
import useAppStore from "../../store/store";

const OrderModal = ({ modalOpen, setModalOpen }) => {
  const navigate = useNavigate();
  const { language, finalDeliveryType, setFinalDeliveryType } = useAppStore();
  const isArabic = language === "ar";
  const isMobile = useMediaQuery("(max-width:600px)");

  // States
  const [deliveryType, setDeliveryType] = useState(null);

  const arr = [
    { key: "pickup", label: isArabic ? "الاستلام" : "Pickup" },
    { key: "homeDelivery", label: isArabic ? "التوصيل إلى المنزل" : "Home Delivery" },
  ];

  const handleDeliveryType = (event) => {
    setDeliveryType(event.target.value);
  };

  const handleSubmit = () => {
    if (deliveryType) {
      setModalOpen(false);
      if (deliveryType === "homeDelivery") {
        setFinalDeliveryType("delivery");
        navigate("/deliveryaddress");
      } else if (deliveryType === "pickup") {
        setFinalDeliveryType("pickup");
        navigate("/pickupaddress");
      }
    }
  };

  const modalProps = {
    disablePortal: modalOpen,
  };

  return (
    <Modal open={modalOpen} {...modalProps}>
      <motion.div
        initial={{
          opacity: 0,
          y: isMobile ? "100%" : -20,
        }}
        animate={{
          opacity: 1,
          y: isMobile ? 0 : 0,
        }}
        exit={{
          opacity: 0,
          y: isMobile ? "100%" : -20,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: isMobile ? "100%" : "400px",
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
              mr: 2,
            }}
          >
            {isArabic ? "اختر نوع الطلب" : "Select Order Type"}
          </Typography>

          <RadioGroup
            value={deliveryType}
            onChange={handleDeliveryType}
            sx={{
              width: "100%",
            }}
          >
            {arr.map(({ key, label }, index) => (
              <FormControlLabel
                key={key}
                value={key}
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
                    {label}
                    {key === "homeDelivery" && deliveryType === "homeDelivery" && (
                      <span
                        style={{
                          marginLeft: "8px",
                          color: "#D92531",
                          fontSize: "12px",
                          fontFamily: "work sans",
                        }}
                      >
                        {isArabic ? "(تنطبق الرسوم)" : "(Charges apply)"}
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
                  deliveryType === key ? "#FAE9EA" : "#F8F8F8",
                  border:
                  deliveryType === key
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
            disabled={!deliveryType}
            sx={{
              width: "91%",
              mt: 2,
              ml: 2,
              mr: 2,
              height: "48px",
              borderRadius: "12px",
              bgcolor: "#D92531",
              "&:hover": { bgcolor: "#D92550" },
            }}
          >
            {isArabic ? "التالي" : "Next"}
          </Button>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default OrderModal;
