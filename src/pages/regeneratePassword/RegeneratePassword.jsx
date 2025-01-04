import {
  Box,
  Button,
  Grid2,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import useAppStore from "../../store/store";

const RegeneratePassword = () => {
  const navigate = useNavigate();
  const { language } = useAppStore();
  const isArabic = language == "ar";

  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          direction: isArabic ? "rtl" : "ltr", // Set text direction based on language
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
          onClick={() => navigate("/authentication")}
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
              src="/regenerate.png"
              alt="Authentication Illustration"
              sx={{ width: "369px", height: "205px" }}
            />

            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                alignSelf: "center",
                fontSize: { lg: "32px", md: "32px", sm: "28px", xs: "24px" },
              }}
            >
              {isArabic
                ? "أعد إنشاء كلمة المرور الخاصة بك"
                : "Regenerate Your Password"}
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
              {isArabic
                ? "أنت عميل تم التحقق منه، يرجى إعادة إنشاء كلمة المرور الخاصة بك"
                : "You Are Verified Customer, Please Regenerate Your Password"}
            </Typography>

            {/* Phone Number TextField */}
            <TextField
              fullWidth
              placeholder={
                isArabic ? "أدخل كلمة المرور هنا" : "Enter your password here"
              }
              label={isArabic ? "كلمة المرور الجديدة" : "New Password"}
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
                  fontWeight: "500",
                },
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
            <TextField
              fullWidth
              placeholder={
                isArabic
                  ? "أعد إدخال كلمة المرور هنا"
                  : "Re enter your password here"
              }
              label={isArabic ? "تأكيد كلمة المرور" : "Confirm Password"}
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
                  fontWeight: "500",
                },
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

            {/* Submit Button */}
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
                boxShadow: "none",
              }}
              onClick={() => navigate("/authentication")}
            >
              {isArabic ? "إرسال" : "Submit"}
            </Button>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default RegeneratePassword;
