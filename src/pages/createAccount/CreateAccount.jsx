import {
  Box,
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const CreateAccount = () => {
  const navigate = useNavigate();
  const { registerUser, language } = useAppStore();
  const [error, setError] = useState("");
  const [createUser, setCreateUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "966",
    password: "",
    confirmPassword: "",
  });
  const isArabic = language == "ar";

  const handleRegistration = async () => {
    let errors = {};

    // Validation for each field
    if (!createUser.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!createUser.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!createUser.email.trim()) {
      errors.email = "Email a valid email";
    }
    if (!createUser.mobileNumber.startsWith("9665")) {
      errors.mobileNumber = "Enter a valid number";
    }
    if (!createUser.password.trim()) {
      errors.password = "Password is required";
    }
    if (createUser.password !== createUser.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (createUser.confirmPassword !== createUser.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }

    // If there are errors, set them and return
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    // Proceed with registration
    const registrationResponse = await registerUser(createUser);
    if (registrationResponse.status === false) {
      setError({ general: registrationResponse.message });
    }
    if (registrationResponse.status === true) {
      navigate("/login");
    }
  };

  return (
    <Grid2
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "40px",
        minHeight: "100vh",
        direction: isArabic ? "rtl" : "ltr", // Set text direction based on language
      }}
    >
      <Box
        sx={{
          width: { xs: "48px", sm: "56px" },
          height: { xs: "48px", sm: "56px" },
          display: "flex",
          alignItems: "center",
          // m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
          justifyContent: "center",
          borderRadius: "20%",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <IconButton
          sx={{
            width: { xs: "48px", sm: "56px" },
            height: { xs: "48px", sm: "56px" },
            display: "flex",
            alignItems: "center",
            // m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
            justifyContent: "center",
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
      </Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }} // Adjust amount to trigger earlier or later
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            backgroundColor: "#f5f5f5",
            mb: "40px",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src="/createaccount.png"
            alt="Authentication Illustration"
            sx={{
              width: "369px",
              height: "205px",
            }}
          />

          {/* Heading */}
          <Typography
            variant="h5"
            sx={{
              marginTop: "40px",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            {isArabic ? "قم بإنشاء حسابك" : "Create Your Account"}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666",
              marginBottom: "35px",
              fontSize: "16px",
            }}
          >
            {isArabic
              ? "الرجاء إدخال تفاصيلك لإنشاء حسابك في كابتن شيف بيزنس"
              : "Please Enter Your Details To Create Your Account In Captain Chef Business"}
          </Typography>

          {/* First Name TextField */}
          {/* First Name */}
          <TextField
            fullWidth
            placeholder={isArabic ? "أدخل اسمك هنا" : "Enter Your Name Here"}
            value={createUser.firstName}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
            error={!!error.firstName}
            helperText={error.firstName}
            label={isArabic ? "الاسم الأول" : "First Name"}
            variant="outlined"
            InputProps={{
              sx: {
                '& input[type="text"]': {
                  letterSpacing: "2px",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#444",
                fontWeight: "500",
              },
            }}
            sx={{
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />

          {/* Last Name */}
          <TextField
            fullWidth
            placeholder={
              isArabic ? "أدخل اسم عائلتك هنا" : "Enter Your Last Name Here"
            }
            label={isArabic ? "اسم العائلة" : "Last Name"}
            value={createUser.lastName}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
            error={!!error.lastName}
            helperText={error.lastName}
            variant="outlined"
            InputProps={{
              sx: {
                '& input[type="text"]': {
                  letterSpacing: "2px",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#444",
                fontWeight: "500",
              },
            }}
            sx={{
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />

          {/* Email */}
          <TextField
            fullWidth
            placeholder={
              isArabic ? "أدخل بريدك الإلكتروني هنا" : "Enter Your Email Here"
            }
            label={isArabic ? "البريد الإلكتروني" : "Email"}
            value={createUser.email}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            error={!!error.email}
            helperText={error.email}
            variant="outlined"
            InputProps={{
              sx: {
                '& input[type="text"]': {
                  letterSpacing: "2px",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#444",
                fontWeight: "500",
              },
            }}
            sx={{
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />

          {/* Mobile Number */}
          <TextField
            fullWidth
            placeholder={
              isArabic
                ? "أدخل رقم هاتفك المحمول هنا. ابدأ بـ 966"
                : "Enter Your Mobile Number Here. Start with 966"
            }
            label={isArabic ? "رقم الجوال" : "Mobile Number"}
            value={createUser.mobileNumber}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                mobileNumber: e.target.value,
              }))
            }
            error={!!error.mobileNumber}
            helperText={error.mobileNumber}
            variant="outlined"
            InputProps={{
              sx: {
                '& input[type="text"]': {
                  letterSpacing: "2px",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#444",
                fontWeight: "500",
              },
            }}
            sx={{
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />

          {/* Password */}
          <TextField
            fullWidth
            placeholder={
              isArabic
                ? "أدخل كلمة المرور الخاصة بك هنا"
                : "Enter Your Password Here"
            }
            label={isArabic ? "كلمة المرور" : "Password"}
            value={createUser.password}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            error={!!error.password}
            helperText={error.password}
            InputProps={{
              sx: {
                '& input[type="text"]': {
                  letterSpacing: "2px",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#444",
                fontWeight: "500",
              },
            }}
            sx={{
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />

          {/* Confirm Password */}
          <TextField
            fullWidth
            placeholder={
              isArabic
                ? "أعد إدخال كلمة المرور الخاصة بك هنا"
                : "Re Enter Your Password Here"
            }
            label={isArabic ? "تأكيد كلمة المرور" : "Confirm Password"}
            value={createUser.confirmPassword}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            error={!!error.confirmPassword}
            helperText={error.confirmPassword}
            variant="outlined"
            InputProps={{
              sx: {
                '& input[type="text"]': {
                  letterSpacing: "2px",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#444",
                fontWeight: "500",
              },
            }}
            sx={{
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
              },
            }}
          />

          {/* <Typography sx={{ color: "#D92531", marginBottom: "12px" }}>
            {error}
          </Typography> */}

          {/* Submit Button */}
          <div dir={isArabic ? "rtl" : "ltr"}>
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
                marginBottom: "10px",
              }}
              onClick={() => handleRegistration()}
            >
              {isArabic ? "تسجيل" : "Register"}
            </Button>

            <Box
              sx={{
                display: "flex",
                gap: "6px",
                paddingBottom: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography>
                {isArabic ? "هل لديك حساب بالفعل؟" : "Already Have an Account?"}
              </Typography>
              <Typography
                sx={{ cursor: "pointer", color: "#D92531", fontWeight: "bold" }}
                onClick={() => navigate("/login")}
              >
                {isArabic ? "تسجيل الدخول" : "Login"}
              </Typography>
            </Box>
          </div>
        </Box>
      </motion.div>
    </Grid2>
  );
};

export default CreateAccount;
