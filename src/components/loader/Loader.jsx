import React, { useState, useEffect } from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide the loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return showLoader ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        background: "#f7f7f7", // Light background for contrast
      }}
    >
      <CircularProgress
        sx={{
          color: "#d92531", // Vibrant red loader
        }}
        size={60}
        thickness={5}
      />
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          fontSize: "1.2rem",
          color: "#d92531", // Matching text color
          fontWeight: "bold",
        }}
      >
        Loading, please wait...
      </Typography>
    </Box>
  ) : null; // Hide the loader completely
};

export default Loader;
