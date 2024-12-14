import React, { useState } from 'react';
import { Box, Modal, Typography, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DataChart from './DataChart';
import Rating from './Rating';

const MealInfo = ({mealInfoModalOpen, setMealInfoModalOpen}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px) and (min-width:601px)');

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
          width:{xs:"300px"},
          height:{xs:"400px"},
          outline: "none",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}
      >
        <Box
          sx={{
          position: "absolute",
          top: {lg:"20%",md:"15%", sm:"5%",xs:"30%"},
          left: {lg:"20%",md:"15%", sm:"25%",xs:"5%"},
          right: {lg:"20%",md:"15%", sm:"25%",xs:"5%"},
          
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
        <Box sx={{
          position:"absolute",
          top:20,
          right:20,
          width:"40px",
          height:"40px",
          borderRadius:"50%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          "&:hover":{
            bgcolor:"#D6D6D6"
          } 
        }}>
        <CancelOutlinedIcon onClick={handleSubmit} sx={{
          fontSize:"32px",
          color:"#0A0A0C",
          opacity: 0.7,
          cursor:"pointer",
                   
        }}/>
        </Box>
          <Box
            sx={{
              width:{xs:"150px",sm:"200px",md:"250px",lg:"300px"},
              height:{xs:"150px",sm:"200px",md:"250px",lg:"300px"},
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="/meal.png"
              alt="Mobile App"
              sx={{
                padding: "10px",
                width:"100%",
                height:"100%",
                borderRadius: "50%",
              }}
            />
          </Box>

          {/* Content Box */}
          <Box
            sx={{
              width: isMobile ? "100%" : isTablet?'100%':"500px",
              display: "flex",
              flexDirection: "column",
              gap: {lg:"30px",md:"20px",sm:"10px",xs:"10px"},
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap:{lg:"8px"},alignItems:{sm:"center",xs:"center",md:"flex-start",lg:"flex-start"},}}>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 200, color: "#20A00B" }}
              >
                Non Alergic
              </Typography>
              <Typography
                sx={{ fontSize: {lg:"22px", md:"20px",sm:"18px",xs:"16px"}, fontWeight: 400, color: "#0F001A" }}
              >
                Zukini Penna Pasta
              </Typography>
              <Typography
                sx={{
                  fontSize: {lg:"18px", md:"16px",sm:"14px",xs:"12px"},
                  fontWeight: 300,
                  color: "#656565",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </Typography>
            </Box>
            <Box>
              <DataChart />
            </Box>
            <Box sx={{ display: "flex", justifyContent: {lg:"flex-start",md:"flex-start",sm:"center",xs:"center"} }}>
              <Rating />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default MealInfo;
