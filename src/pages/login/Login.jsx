import {
  Box,
  Button,
  Grid2,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, language } = useAppStore();
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!mobileNumber.startsWith("5")) {
      setError(true);
      return;
    }

    setError(false);
    await loginUser(mobileNumber);
    navigate("/otp");
  };

  const handleMobileChange = (number) => {
    setMobileNumber(number);
    if (number.startsWith("5")) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          direction: language === "ar" ? "rtl" : "ltr",
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
              transform: language === "ar" ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </IconButton>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
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
              src="/authenticationImage.png"
              alt="Authentication Illustration"
              sx={{ width: "369px", height: "205px" }}
            />

            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                fontSize: { lg: "32px", md: "32px", sm: "28px", xs: "24px" },
                fontWeight: "600",
              }}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "en"
                ? "Login to your account"
                : "تسجيل الدخول إلى حسابك"}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#666",
                marginBottom: "35px",
                fontWeight: "400",
                fontSize: "20px",
              }}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "en"
                ? "Please Enter Your Mobile Number Before Further Move."
                : "الرجاء إدخال رقم هاتفك المحمول قبل الانتقال إلى مكان آخر."}
            </Typography>

            {/* Country Code TextField */}
            <Box sx={{ display: "flex", gap: "20px" }}>
              <TextField
                fullWidth
                variant="outlined"
                disabled
                value={966}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageIcon sx={{ color: "#666" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: { xs: "55%", sm: "100px", md: "90px" },
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "&.Mui-focused fieldset": {
                      border: "2px solid grey",
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                error={error}
                helperText={
                  error
                    ? language === "en"
                      ? "Enter a Mobile Number that starts with 5"
                      : "أدخل رقم الجوال الذي يبدأ بـ 5"
                    : ""
                }
                placeholder={
                  language === "en"
                    ? "Enter a Mobile Number that starts with 5"
                    : "أدخل رقم الجوال الذي يبدأ بـ 5"
                }
                label={
                  language === "en" ? "Mobile Number" : "رقم الهاتف المحمول"
                }
                variant="outlined"
                value={mobileNumber}
                onChange={(e) => handleMobileChange(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: "#666" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  width: { xs: "100%", sm: "360px", md: "512px" },
                  marginBottom: "20px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "&.Mui-focused fieldset": {
                      border: "2px solid grey",
                    },
                  },
                }}
              />
            </Box>

            {/* Submit Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D92531",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 16px",
                marginTop: "12px",
                width: { xs: "100%", sm: "360px", md: "512px" },
                height: { xs: "56px", sm: "56px", md: "56px" },
                boxShadow: "none",
              }}
              onClick={() => handleSubmit()}
            >
              {language === "en" ? "Submit" : "إرسال"}
            </Button>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default Login;
