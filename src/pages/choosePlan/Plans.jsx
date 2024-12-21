import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Grid2, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlanCard from "../../components/planCard/PlanCard";
import useAppStore from "../../store/store";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const Plans = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("weekly");
  const [loading, setLoading] = useState(true);
  const { fetchPlans, plans, language } = useAppStore();

  useEffect(() => {
    setLoading(true);
    if (plans.length === 0) {
      fetchPlans(categoryId);
    }
    setLoading(false);
  }, [categoryId]);
  const isArabic = language === "ar";

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      {/* Header Box */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "flex-start", sm: "space-between" },
          alignItems: "center",
          borderRadius: "10px",
          width: { xs: "350px", sm: "90%", md: "100%", lg: "95%", xl: "92.8%" },
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
              width: { xs: "48px", sm: "56px" },
              height: { xs: "48px", sm: "56px" },
              display: "flex",
              alignItems: "center",
              // m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
              justifyContent: "center",
              borderRadius: "20%",
              backgroundColor: "#fff",
              width: { xs: "40px", sm: "40px", md: "45px" },
              height: { xs: "40px", sm: "40px", md: "45px" },
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon
              sx={{
                transform: isArabic ? "rotate(180deg)" : "none",
                fontSize: "24px",
                ml: "7px",
              }}
            />
          </IconButton>

          {/* "Choose Plan" Typography */}
          {/* Box for mobile screens only */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "space-between",
              p: "0 10px",
              width: { lg: "900px", md: "720px", sm: "664px", xs: "330px" },
              mt: { lg: "30px", md: "30px", sm: "15px", xs: "24px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: {
                  xs: "10px",
                  sm: "30px",
                  md: "30px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "15px" },
                  fontWeight: "600",
                  color: "#000",
                }}
              >
                {isArabic ? "اختر خطة" : "Choose Plan"}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px" },
                  color: "#D92531",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {isArabic ? "خطة مخصصة" : "Custom Plan"}
              </Typography>
            </Box>
          </Box>

          {/* Box for larger screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: { xs: "center" },
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "20px", md: "24px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              {isArabic ? "اختر خطة" : "Choose Plan"}
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
              {isArabic ? "خطة مخصصة" : "Custom Plan"}
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
            onClick={() => setSelectedPlan("weekly")}
            sx={{
              flex: 1,
              textAlign: "center",
              backgroundColor:
                selectedPlan === "weekly" ? "#D92531" : "transparent",
              color: selectedPlan === "weekly" ? "#fff" : "#000",
              padding: {
                xs: "18px 2px", // For small screens (mobile)
                sm: "12px 0px", // For larger screens (tablet and above)
              },
              marginLeft: { xs: "4px", sm: "0" },
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: { xs: "12px", sm: "14px" },
              // transition: "background-color 0.3s ease",
            }}
          >
            {isArabic ? "أسبوعي" : "Weekly"}
          </Box>

          {/* Monthly Option */}
          <Box
            onClick={() => setSelectedPlan("monthly")}
            sx={{
              flex: 1,
              textAlign: "center",
              backgroundColor:
                selectedPlan === "monthly" ? "#D92531" : "transparent",
              color: selectedPlan === "monthly" ? "#fff" : "#000",
              padding: {
                xs: "18px 10px", // For small screens (mobile)
                sm: "12px 0px", // For larger screens (tablet and above)
              },
              marginRight: { xs: "4px", sm: "0" },
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: { xs: "12px", sm: "14px" },
            }}
          >
            {isArabic ? "شهري" : "Monthly"}
          </Box>
        </Box>
      </Box>

      {/* Conditional Rendering: Show Loading or Content */}
      {loading ? (
        <Loader />
      ) : (
        <Grid2
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              sm: "flex-start",
              md: "flex-start",
              lg: "flex-start",
            },
            mt: "40px",
            textAlign: "left",
            width: { lg: "1270px", sm: "630px" },
          }}
        >
          {plans
            .filter((plan) => plan.plan_type_range === selectedPlan)
            .map((plan) => (
              <Grid2
                xs={12}
                sm={6}
                md={3}
                key={plan.id}
                id={plan.id}
                sx={{
                  display: "flex",
                }}
              >
                <PlanCard
                  plan={plan}
                  range={plan.plan_type_range}
                  title={isArabic ? plan.title_ar : plan.title}
                  heading={
                    isArabic
                      ? plan.subscription_cat_name_ar
                      : plan.subscription_cat_name
                  }
                  planID={plan.id}
                  days={plan.total_days}
                  freePlans={plan.free_plans || []} // Pass free_plans array or default to an empty array
                  language={language}
                  delivery={plan.city}
                  items={plan.no_of_items.items.filter(
                    (item) => item.value > 0
                  )} // Only show items with value > 0
                />
              </Grid2>
            ))}
        </Grid2>
      )}
    </Box>
  );
};

export default Plans;
