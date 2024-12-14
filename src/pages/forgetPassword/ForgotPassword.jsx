import { Box, Button, Grid2, TextField, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState(["", "", "", ""]);

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
        <IconButton
          sx={{
            width: { xs: "48px", sm: "56px" },
            height: { xs: "48px", sm: "56px" },
            display: "flex",
            alignItems: "center",
            m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
            justifyContent: "center",
            borderRadius: "20%",
            backgroundColor: "#fff",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosIcon sx={{ fontSize: "24px", ml: "7px" }} />
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
              src="/forgot.png"
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
              Forgot Your Password?
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#666",
                marginBottom: "35px",
                fontSize: "20px",
              }}
            >
              Don’t worry about that, Please Enter The OTP Code Below And <br />
              Re Generate Your Password
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
                  cursor: "pointer",
                  boxShadow: 'none'
                }}
                onClick={() => navigate("/regeneratepassword")}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default ForgotPassword;
