import React from "react";
import { Box } from "@mui/material";
import "./circularAvt.css";

const CircularAvt = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: {
          xs: "80px",
          sm: "156px",
          md: "156px",
        },
        height: {
          xs: "80px",
          sm: "156px",
          md: "156px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      {/* Rings Around the Circle */}
      <Box className="ring"></Box>
      <Box className="ring"></Box>
      <Box className="ring"></Box>

      {/* Inner Circle */}
      <Box
        sx={{
          width: {
            lg: "90px",
            md: "80px",
            sm: "80px",
            xs: "50px",
          },
          height: {
            lg: "90px",
            md: "80px",
            sm: "80px",
            xs: "50px",
          },
          borderRadius: "50%",
          backgroundColor: "#e53935",
          color:"white", // Keep the main circle red
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2, // Ensure it's above the rings
        }}
      >
        <img src="/Vector.png" alt="Icon" width="55%" height="55%" />
      </Box>
    </Box>
  );
};

export default CircularAvt;
