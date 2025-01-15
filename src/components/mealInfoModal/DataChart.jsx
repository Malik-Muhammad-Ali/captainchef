import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import NutritionalProgress from "./NutritionalProgress";

const DataChart = ({protein, carbs, fats, calories, modalData}) => {
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
    { value: protein, label: "Protein", color: "green", maxValue: 100 },
    { value: carbs, label: "Carbs", color: "gold", maxValue: 100 },
    { value: fats, label: "Fats", color: "red", maxValue: 100 },
    { value: calories, label: "Calories", color: "blue", maxValue: calories > 1000 ? 5000 : 1000 },
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
