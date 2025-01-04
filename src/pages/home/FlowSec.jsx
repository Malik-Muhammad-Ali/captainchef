import React, { useState } from "react";
import { Box, Typography, IconButton} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const steps = [
  {
    step: 1,
    heading: "Step 1",
    description: "Set Your Goal by Selection Category",
    image: "/Step1.svg",
  },
  {
    step: 2,
    heading: "Step 2",
    description: "Select Your Desired Plan from Multiple Options",
    image: "/Step2.svg",
  },
  {
    step: 3,
    heading: "Step 3",
    description: "Purchase Subscription Plan",
    image: "/Step3.svg",
  },
  {
    step: 4,
    heading: "Step 4",
    description: "Customise & Schedule Your Plan",
    image: "/Step4.svg",
  },
  {
    step: 5,
    heading: "Step 5",
    description: "Daily Track Your Order",
    image: "/Step5.svg",
  },
  {
    step: 6,
    heading: "Step 6",
    description: "View your Subscription Details",
    image: "/Step6.svg",
  },
];

const FlowSec = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handleBack = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
        mr: { xs: 2, sm: 4, md: 8 } ,
        ml: { xs: 2, sm: 4, md: 8 } ,
        gap:{lg:"50px",nd:"50px",sm:"30px",xs:"20px"},
        backgroundColor: "#f9f9f9",
        position:"relative"
      }}
    >
      <Box
      sx={{
        display: 'inline-block',
        padding: "4px",
        alignSelf: { xs: "center", sm: "center", md: "flex-start", lg: "flex-start" },
      }}
    >
      <Typography
        sx={{
          fontSize: {lg:"30px", md:"30px", sm:"24px",xs:"24px"},
          fontWeight: 600,
          borderBottom: "2px solid red",
          display: "inline-block",
        }}
      >
        Easy Simple Flow
      </Typography>
    </Box>

    <Box sx={{
        display: "flex",
        flexDirection:{xs:"column",sm:"row",md:"row",lg:"row"}, 
        alignItems: "center",
        justifyContent: "flex-start",
        gap:"20px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
    }}>
      {/* Left Side - Heading and Description */}
      <Box
        sx={{
          flex: 1,
          maxWidth: "400px",
          textAlign: { xs: "center", sm: "left" },
          width:"65%",
          minHeight:{lg:"150px",md:"150px",sm:"100px",xs:"100px"}
        }}
      >
        <Typography sx={{
          fontSize:{lg:"42px", md:"42px",sm:"26px",xs:"26px"},
          fontWeight:{lg:600, md:500,sm:600,xs:600},
          color:"#CE2729"
        }} gutterBottom>
          {steps[currentStep].heading}
        </Typography>
        <Typography sx={{
          fontSize:{lg:"22px", md:"22px",sm:"16px",xs:"16px"}
        }} variant="body1">
          {steps[currentStep].description}
        </Typography>
      </Box>

      <Box>
      <Box
  sx={{
    flex: 1,
    width: { lg: "300px", md: "300px", sm: "185px", xs: "164px" },
    height: { lg: "500px", md: "500px", sm: "375px", xs: "330px" },
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundImage: `url('/public/Body.svg')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 0.5s ease-in-out",
  }}
>
  <Box
    sx={{
      width: "85%",
      height: "85%", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}
  >
    <img
      src={steps[currentStep].image}
      alt="Step Content"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: {lg:"20px",md:"20px",sm:"8px",xs:"8px"},
      }}
    />
  </Box>
</Box>

      </Box>
    </Box>
    <Box>
        <IconButton
          onClick={handleBack}
          sx={{
            backgroundColor: "#f0f0f0",
            "&:hover": { backgroundColor: "#ddd" },
            height:"60px",
          width:"35px",
          borderRadius:"10px",
          position:"absolute",
          top:{lg:"50%",md:"50%",sm:"65%",xs:"60%"},
          right:{lg:"5%",md:"5%",sm:"unset",xs:"unset"},
          left:{lg:"unset", md:"unset",sm:"2%",xs:"5%"}
          }}
          size="large"
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "#f0f0f0",
            "&:hover": { backgroundColor: "#ddd" },
            height:"60px",
            width:"35px",
            borderRadius:"10px",
            position:"absolute",
          top:{lg:"50%",md:"50%",sm:"65%",xs:"60%"},
          right:{lg:"1%",md:"1%",sm:"unset",xs:"5%"},
          left:{lg:"unset", md:"unset",sm:"8%",xs:"unset"}
          }}
          size="large"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FlowSec;
