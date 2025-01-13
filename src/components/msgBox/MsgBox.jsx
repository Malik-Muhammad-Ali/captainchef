import { Box } from "@mui/material";
import React from "react";
import useAppStore from "../../store/store";

const Msgbox = () => {
  const { language } = useAppStore();
  const isRTL = language === "ar";
  return (
    <Box
      sx={{
        height: {
          lg: "50px",
          sm: "40px",
          xs: "35px",
        },
        width: {
          lg: "180px",
          md: "180px",
          sm: "160px",
          xs: "150px",
        },
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e53935",
        color: "white",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: { lg: "16px", md: "14px", sm: "14px", xs: "12px" },
        fontFamily: "Arial, sans-serif",
        position: "relative",
        "::after": {
          content: '""',
          position: "absolute",
          bottom: { xs: "6px", md: "12px", sm: "9px" },
          left: !isRTL && { lg: "99%", md: "98%", sm: "95%", xs: "90%" },
          right: isRTL &&{ lg: "99%", md: "98%", sm: "95%", xs: "90%" },
          marginLeft: "0px",
          width: 0,
          height: 0,
          borderLeft: !isRTL && "25px solid #e53935",
          borderRight: isRTL && "25px solid #e53935",
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
        },
      }}
    >
      {language === "en" ? "My Subscriptions" : "اشتراكاتي"}
    </Box>
  );
};

export default Msgbox;
