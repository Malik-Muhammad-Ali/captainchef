import React from "react";
import { CircularProgress, Box } from "@mui/material";

const SuspenceLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        backgroundColor: "#f5f5f5", // Light background for contrast
      }}
    >
      <CircularProgress
        sx={{
          color: "#CE2729", // Red color
          animation: "spin 1.5s linear infinite",
        }}
        thickness={4} // Adjust thickness for more boldness
        size={60} // Adjust size to your preference
      />
    </Box>
  );
};

export default SuspenceLoader;
