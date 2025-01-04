import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  useMediaQuery,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorModal = ({ modalOpen, setModalOpen }) => {
  const theme = useTheme();

  //   const [selectedPayment, setSelectedPayment] = useState(null);
  //   const navigate = useNavigate();
  const { language } = useAppStore();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const isArabic = language === "ar";
  //   const [selectedCity, setSelectedCity] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isOpen, setIsOpen] = useState(true);

  const modalProps = {
    disablePortal: modalOpen,
  };

  return (
    <Modal open={isOpen} {...modalProps}>
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
          left: isMobile ? 0 : isTablet ? "20%" : "35%",
          bottom: isMobile ? 0 : isTablet ? "10%" : "auto",
          top: isMobile ? "auto" : isTablet ? "25%" : "30%",
          transform: isMobile ? "none" : "translate(-50%, -50%)",
          outline: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignitems: "center",
            justifyContent: "center",
            height: "auto",
            gap: "40px",
            // width: { xs: "100vw" },

            mb: { sm: "350px", md: "0", xs: "0", lg: "0" },
            // border: "1px solid red",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "24px",
              gap: "24px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              backgroundColor: "background.paper",
            }}
          >
            <ErrorOutlineIcon
              sx={{
                color: "#e63946",
                fontSize: "56px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "24px",
                  md: "28px",
                },
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                color: "#333333",
              }}
            >
              {language === "ar" ? (
                "حدث خطأ ما"
              ) : (
                <>
                  Oops! <br /> Something Went Wrong
                </>
              )}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                },
                fontWeight: 400,
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                color: "#555555",
              }}
            >
              {language === "ar"
                ? "يرجى المحاولة مرة أخرى لاحقًا."
                : " Please try again later."}
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e63946",
                color: "#ffffff",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "16px",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#d62828",
                },
              }}
              onClick={() => {
                setIsOpen(false);
                setModalOpen(false);
              }}
            >
              {language === "ar" ? "حسناً" : "Okay"}
            </Button>
          </Paper>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default ErrorModal;
