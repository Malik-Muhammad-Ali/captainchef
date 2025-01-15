import React, { useState } from "react";
import { Box, IconButton, Typography, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useAppStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import Step1 from "../../components/customPlanSteps/Step1";

const CustomPlan = () => {
  const navigate = useNavigate();
  const { language } = useAppStore();
  const [step, setStep] = useState(1);

  const totalSteps = 6;
  const completedPercentage = (step / totalSteps) * 100;

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleBack = () => {
    if (step === 1) {
      navigate(-1);
    } else {
      prevStep();
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        {/* Back Icon */}
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
          onClick={() => handleBack()}
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

        {/* Progress */}
        <Box sx={{ width: "100%", padding: 2 }}>
          {/* Progress Text */}
          <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
            {step-1}/{totalSteps} Completed
          </Typography>

          {/* Progress Bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "10px",
              background: "#e0e0e0",
              borderRadius: "5px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {Array.from({ length: totalSteps }, (_, index) => (
              <Box
                key={index}
                sx={{
                  width: `${100 / totalSteps}%`,
                  height: "100%",
                  backgroundColor: index < step-1 ? "yellow" : "transparent",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>

        <Step1 />
      </Box>
    </>
  );
};

export default CustomPlan;
