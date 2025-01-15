import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const NotRegisterYet = () => {
  const navigate = useNavigate();
  const { otp, message, planDetailUrl, setAuthenticated, language } =
    useAppStore();
  const [pin, setPin] = useState(["", "", "", ""]);
  const [error, setError] = useState();
  console.log(otp);

  useEffect(() => {
    if (!otp) {
      navigate("/login");
    }
  });

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (value && index < 3) {
        document.getElementById(`pin-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = () => {
    const pinValue = pin.join("");
    if (pinValue === otp && message === "Exists") {
      setError(null);
      setAuthenticated(true);
      navigate(planDetailUrl);
    } else if (pinValue === otp && message === "Not Exists") {
      setError(null);
      navigate("/createaccount");
    } else {
      setError("Invalid OTP");
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      document.getElementById(`pin-${index - 1}`).focus();
    }
  };

  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: { xs: "48px", sm: "56px" },
            height: { xs: "48px", sm: "56px" },
            display: "flex",
            alignItems: "center",
            m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
            justifyContent: "center",
            borderRadius: "20%",
            boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fff",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosIcon sx={{ fontSize: "24px", ml: "7px" }} />
        </Box>
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
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="/notregister.png"
              alt="Authentication Illustration"
              sx={{ width: "369px", height: "205px" }}
            />
            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                fontSize: { lg: "32px", md: "32px", sm: "28px", xs: "24px" },
              }}
            >
              {language === "en" ? "Enter OTP" : "أدخل كلمة المرور لمرة واحدة"}
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
              {language === "en"
                ? "We have sent an OTP to your provided number."
                : "لقد أرسلنا كلمة مرور لمرة واحدة (OTP) إلى الرقم الذي قدمته."}{" "}
              <br />{" "}
              {language === "en"
                ? "Enter that OTP to procceed further."
                : "أدخل كلمة المرور لمرة واحدة (OTP) للمضي قدمًا."}
            </Typography>

            {/* Password TextField */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                mb: "24px",
              }}
            >
              {pin.map((digit, index) => (
                <TextField
                  key={index}
                  placeholder="-"
                  id={`pin-${index}`}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  inputProps={{
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      fontSize: "24px",
                      fontWeight: "bold",
                    },
                  }}
                  sx={{
                    width: "56px",
                    height: "56px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        border: "2px solid #ccc",
                      },
                      "&:hover fieldset": {
                        border: "2px solid #888",
                      },
                      "&.Mui-focused fieldset": {
                        border: "2px solid #D92531",
                        boxShadow: "0 0 8px rgba(217, 37, 49, 0.5)",
                      },
                    },
                  }}
                />
              ))}
            </Box>
            <p
              style={{ color: "red", textAlign: "center", fontWeight: "bold" }}
            >
              {error}
            </p>
            {/* Button with Forgot Password */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "360px", md: "512px" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D92531",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  width: { xs: "100%", sm: "360px", md: "512px" },
                  height: { xs: "56px", sm: "56px", md: "56px" },
                }}
                onClick={() => handleSubmit()}
              >
                {language === "en" ? "Submit" : "يُقدِّم"}
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default NotRegisterYet;
