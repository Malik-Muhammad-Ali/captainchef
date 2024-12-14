import React, { useState } from "react";
import { Box, Grid2, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlanCard from "../../components/planCard/PlanCard";
import { useParams } from "react-router-dom";

const plans = () => {
  const { categoryId } = useParams();
  console.log(categoryId);
  const [selectedPlan, setSelectedPlan] = useState("Weekly");

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "flex-start", sm: "space-between" },
          alignItems: "center",
          borderRadius: "10px",
          width: { xs: "100%", sm: "84%", md: "94%", lg: "95%", xl: "92.8%" },
          ml: { lg: "35px", md: "30px", sm: "60px", xs: "0", xl: "100px" },
        }}
      >
        {/* First Child Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: {
              lg: "center",
              md: "center",
              sm: "center",
              xs: "flex-start",
            },
            justifyContent: "center",
            gap: "15px",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          }}
        >
          {/* Icon */}
          <IconButton
            sx={{
              borderRadius: "20%",
              backgroundColor: "#fff",
              // boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
              width: { xs: "40px", sm: "40px", md: "45px" },
              height: { xs: "40px", sm: "40px", md: "45px" },
            }}
          >
            <ArrowBackIosIcon
              sx={{
                // color: "#000",
                paddingLeft: { xs: "5px", sm: "8px" },
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
              }}
            />
          </IconButton>

          {/* "Choose Plan" Typography */}
          {/* Box for mobile screens only */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" }, // Visible only on xs screens
              justifyContent: "space-between",
              alignItems: "center",
              width: "90vw", // Full width for mobile
              // px: "16px", // Optional padding for spacing
              pr: "14px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              Choose Plan
            </Typography>
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "#D92531",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: { xs: "12px" },
                  justifySelf: "end",
                  alignSelf: "flex-end",
                }}
              >
                Custom Plan
              </Typography>
            </Box>
          </Box>

          {/* Box for larger screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" }, // Hidden on xs screens
              justifyContent: { xs: "center" },
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "20px", md: "24px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              Choose Plan
            </Typography>
            <Typography
              sx={{
                color: "#D92531",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: { sm: "16px", md: "16px" },
                ml: { md: "10px", lg: "10px", sm: "10px" },
              }}
            >
              Custom Plan
            </Typography>
          </Box>
        </Box>

        {/* Second Child Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: "1px solid #ddd",
            width: { xs: "100%", sm: "200px" },
            marginTop: { xs: "30px", sm: "0" },
            height: { xs: "63px", sm: "", md: "", lg: "" },
          }}
        >
          {/* Weekly Option */}
          <Box
            onClick={() => setSelectedPlan("Weekly")}
            sx={{
              flex: 1,
              textAlign: "center",
              backgroundColor:
                selectedPlan === "Weekly" ? "#D92531" : "transparent",
              color: selectedPlan === "Weekly" ? "#fff" : "#000",
              padding: {
                xs: "18px 2px", // For small screens (mobile)
                sm: "12px 0px", // For larger screens (tablet and above)
              },
              marginLeft: '4px',
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: { xs: "12px", sm: "14px" },
              transition: "background-color 0.3s ease",
            }}
          >
            Weekly
          </Box>

          {/* Monthly Option */}
          <Box
            onClick={() => setSelectedPlan("Monthly")}
            sx={{
              flex: 1,
              textAlign: "center",
              backgroundColor:
                selectedPlan === "Monthly" ? "#D92531" : "transparent",
              color: selectedPlan === "Monthly" ? "#fff" : "#000",
              padding: {
                xs: "18px 10px", // For small screens (mobile)
                sm: "12px 0px", // For larger screens (tablet and above)
              },
              marginRight: '4px',
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: { xs: "12px", sm: "14px" },
              // fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
          >
            Monthly
          </Box>
        </Box>
      </Box>

      <Grid2
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "40px",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid2
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlanCard planId={index} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default plans;
