import { Box, Grid2, Typography, IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const BarCode = () => {
  const { language } = useAppStore();
  const isArabic = language === "ar";
  const navigate = useNavigate();
  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          direction: isArabic ? "rtl" : "ltr", // Set direction conditionally
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
              ml: language === "ar" ? "-7px" : "10px", // Adjust margin conditionally
              transform: language === "ar" ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </IconButton>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              gap: "10px",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="/barcode.png"
              alt={isArabic ? "توضيح المصادقة" : "Authentication Illustration"}
              sx={{
                width: { xs: "60%", sm: "50%", md: "50%", lg: "420px" },
                height: "auto",
                maxHeight: { xs: "300px", sm: "350px", md: "400px" },
                borderRadius: "8px",
              }}
            />

            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                fontSize: { lg: "32px", md: "32px", sm: "28px", xs: "20px" },
              }}
            >
              {isArabic
                ? "قم بتنزيل تطبيق الهاتف الآن"
                : "Download Mobile App Now"}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#666",
                marginBottom: "35px",
                fontWeight: "400px",
                fontSize: "20px",
              }}
            >
              {isArabic
                ? "للتفعيل، قم بتنزيل التطبيق الآن. اذهب إلى اشتراكاتي وجدولها."
                : "For Activation, Download the app Now. Go to my subscriptions and schedule it."}
            </Typography>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default BarCode;
