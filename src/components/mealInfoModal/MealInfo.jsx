import React, { useState } from "react";
import {
  Box,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import DataChart from "./DataChart";
import Rating from "./Rating";
import useAppStore from "../../store/store";

const MealInfo = ({ mealInfoModalOpen, setMealInfoModalOpen, modalData }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px) and (min-width:601px)");
  const { language } = useAppStore();
  const description = modalData?.description?.replace(/<\/?p>/g, '');
  const arabicdescription = modalData?.arabicdescription?.replace(/<\/?p>/g, '');

  const modalProps = {
    disablePortal: true,
  };

  const handleSubmit = () => {
    setMealInfoModalOpen(false);
  };
  return (
    <Modal open={mealInfoModalOpen} {...modalProps}>
      <motion.div
        initial={{
          opacity: 0,
          // y: -20,
        }}
        animate={{
          opacity: 1,
          // y: 20,
        }}
        exit={{
          opacity: 0,
          // y: -20,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          width: { xs: "300px" },
          height: { xs: "400px" },
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { lg: "20%", md: "15%", sm: "5%", xs: "30%" },
            left: { lg: "20%", md: "15%", sm: "25%", xs: "5%" },
            right: { lg: "20%", md: "15%", sm: "25%", xs: "5%" },

            display: "flex",
            flexDirection: isMobile ? "column" : isTablet ? "column" : "row",
            alignItems: isMobile ? "center" : "center",
            justifyContent: "center",
            borderRadius: isMobile ? "16px" : "32px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "background.paper",
            padding: isMobile ? "10px" : "20px",
            gap: isMobile ? "2px" : "15px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <CancelOutlinedIcon onClick={handleSubmit} sx={{
          fontSize:"32px",
          color:"#0A0A0C",
          opacity: 0.7,
          cursor:"pointer",
                   
        }}/> */}
            <IconButton
              onClick={handleSubmit}
              sx={{
                // backgroundColor: "#FAE9EA",
                // color: "#D92531",
                padding: "4px",
                borderRadius: "50%",
              }}
            >
              <svg
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28.207" cy="28.2461" r="13.5" stroke="#0A0A0C" />
                <path
                  d="M34.207 22.2461L22.207 34.2461"
                  stroke="#0A0A0C"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.207 22.2461L34.207 34.2461"
                  stroke="#0A0A0C"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </Box>
          <Box
            sx={{
              width: { xs: "150px", sm: "200px", md: "250px", lg: "300px" },
              height: { xs: "150px", sm: "200px", md: "250px", lg: "300px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={modalData.image}
              alt="Mobile App"
              sx={{
                padding: "10px",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </Box>

          {/* Content Box */}
          <Box
            sx={{
              width: isMobile ? "100%" : isTablet ? "100%" : "500px",
              display: "flex",
              flexDirection: "column",
              gap: { lg: "30px", md: "20px", sm: "10px", xs: "10px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { lg: "8px" },
                alignItems: {
                  sm: "center",
                  xs: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              {modalData?.isAlergic === 'no' && (
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 200, color: "#20A00B" }}
                >
                  {language === "en" ? "Non Alergic" : "غير معرض للحساسية"}
                </Typography>
              )}
              <Typography
                sx={{
                  fontSize: { lg: "22px", md: "20px", sm: "18px", xs: "16px" },
                  fontWeight: 400,
                  color: "#0F001A",
                }}
              >
                {language === "en" ? modalData.name : modalData.arabicName}
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "18px", md: "16px", sm: "14px", xs: "12px" },
                  fontWeight: 300,
                  color: "#656565",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {language === "en" ? description : arabicdescription}
              </Typography>
            </Box>
            <Box>
              <DataChart modalData={modalData} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "center",
                  xs: "center",
                },
              }}
            >
              <Rating modalData={modalData} />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default MealInfo;
