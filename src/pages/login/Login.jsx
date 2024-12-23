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
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, user, authenticated, planDetailUrl, language } =
    useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const [language, setLanguage] = useState("en"); // 'en' for English, 'ar' for Arabic

  const handleSubmit = async () => {
    const user_info = await loginUser(email, password);
    console.log(user_info);
    if (user_info) {
      console.log("True Condition");
      setError(false);
      navigate(planDetailUrl, { replace: true });
    } else {
      console.log("False Condition");
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
              ml: language === "ar" ? "-7px" : "7px", // Adjust margin conditionally
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
                ? "Please Enter Your Username and Password Before Further Move."
                : "يرجى إدخال اسم المستخدم وكلمة المرور قبل المتابعة."}
            </Typography>

            {/* Email TextField */}
            <TextField
              fullWidth
              error={error}
              helperText={
                error
                  ? language === "en"
                    ? "Please Enter a Valid Email"
                    : "يرجى إدخال بريد إلكتروني صالح"
                  : ""
              }
              placeholder={language === "en" ? "" : "البريد الإلكتروني"}
              label={language === "en" ? "Email" : "البريد الإلكتروني"}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#666" }} />
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

            {/* Password TextField */}

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "360px", md: "512px" },
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <TextField
                  fullWidth
                  error={error}
                  helperText={
                    error
                      ? language === "en"
                        ? "Please Enter Correct Password"
                        : "يرجى إدخال كلمة مرور صحيحة"
                      : ""
                  }
                  placeholder={language === "en" ? "" : "كلمة المرور"}
                  label={language === "en" ? "Password" : "كلمة المرور"}
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#666" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    width: "100%",
                    marginBottom: "6px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                      "&.Mui-focused fieldset": {
                        border: "2px solid grey",
                      },
                    },
                  }}
                />
                <Typography
                  sx={{
                    alignSelf: "flex-end",
                    color: "#D92531",
                    cursor: "pointer",
                    fontWeight: "Bold",
                  }}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en" ? "Forget Password" : "نسيت كلمة المرور"}
                </Typography>
              </Box>
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
            <Box
              sx={{ display: "flex", gap: "6px" }}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <Typography>
                {language === "en"
                  ? "Don't Have any Account?"
                  : "ليس لديك أي حساب؟"}
              </Typography>
              <Typography
                sx={{ cursor: "Pointer", color: "#D92531", fontWeight: "Bold" }}
                onClick={() => navigate("/createaccount")}
              >
                {language === "en" ? "Create Account" : "إنشاء حساب"}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default Login;
