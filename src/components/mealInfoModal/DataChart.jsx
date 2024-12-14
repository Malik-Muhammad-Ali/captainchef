import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import NutritionalProgress from "./NutritionalProgress";

const DataChart = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  let size;
  if (isXs) size = 40;
  else if (isSm) size = 60; 
  else if (isMd) size = 80;
  else if (isLg) size = 100;

  const stats = [
    { value: 80, label: "Protein", color: "green", maxValue: 100 },
    { value: 50, label: "Carbs", color: "gold", maxValue: 150 },
    { value: 586, label: "Fat", color: "red", maxValue: 1000 },
    { value: 706, label: "Calories", color: "blue", maxValue: 2000 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {stats.map((stat, index) => (
        <NutritionalProgress
          key={index}
          value={stat.value}
          label={stat.label}
          color={stat.color}
          maxValue={stat.maxValue}
          size={size}
        />
      ))}
    </Box>
  );
};

export default DataChart;
