import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const NutritionalProgress = ({ value, label, color, maxValue, size = 80 }) => {
  const normalizedValue = (value / maxValue) * 100;
  const angle = (normalizedValue / 100) * 360;

  // Convert angle to position (trigonometric calculations for a circle)
  const getDotPosition = () => {
    const radius = size / 2;
    const radians = (angle - 90) * (Math.PI / 180);
    const x = radius + radius * Math.cos(radians);
    const y = radius + radius * Math.sin(radians);
    return { x, y };
  };

  const { x, y } = getDotPosition();

  return (
    <Box
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
        }}
      >
        {/* Background Circle */}
        <CircularProgress
          variant="determinate"
          value={100}
          sx={{
            color: "#f0f0f0",
            position: "absolute",
          }}
          size={size}
          thickness={1.5}
        />

        {/* Progress Circle */}
        <CircularProgress
          variant="determinate"
          value={normalizedValue}
          sx={{
            color: color,
          }}
          size={size}
          thickness={1.5}
        />

        {/* Center Content */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "light",
              fontSize: size * 0.25,
              color: color,
            }}
          >
            {value}g
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#00000099",
              fontSize: size * 0.15,
            }}
          >
            {label}
          </Typography>
        </Box>

        {/* Dot at the edge */}
        <Box
          sx={{
            position: "absolute",
            width: size * 0.1,
            height: size * 0.1,
            backgroundColor: color,
            borderRadius: "50%",
            top: `${y}px`,
            left: `${x}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </Box>
    </Box>
  );
};

export default NutritionalProgress;
