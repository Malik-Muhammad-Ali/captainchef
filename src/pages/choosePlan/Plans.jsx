import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Grid2, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlanCard from "../../components/planCard/PlanCard";
import useAppStore from "../../store/store";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [selectedPlan, setSelectedPlan] = useState("weekly");
  const [loading, setLoading] = useState(true);
  const { fetchPlans, plans, language } = useAppStore();

  useEffect(() => {
    setLoading(true);
    fetchPlans(categoryId);
    setLoading(false);
  }, [categoryId]);
  const isArabic = language === "ar";
  // console.log(plans);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          // border: "2px solid black",
          mr: { lg: "20px", sm: "0px", md: "0px", xs: "0px" },
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
          onClick={() => navigate(-1)}
        >
          {/* Icon */}
          <IconButton
            sx={{
              width: { xs: "48px", sm: "56px" },
              height: { xs: "48px", sm: "56px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
              borderRadius: "20%",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <ArrowBackIosIcon
              sx={{
                fontSize: "24px",
                ml: language === "ar" ? "-10px" : "10px", // Adjust margin conditionally
                transform:
                  language === "ar" ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </IconButton>

          {/* "Choose Plan" Typography */}
          {/* Box for mobile screens only */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "space-between",
              flexWrap: "wrap",
              alignItems: "center",
              width: "100%",
              gap: "170px",
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
            <Box sx={{}}>
              <Typography
                sx={{
                  color: "#D92531",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: { xs: "12px" },
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
              gap: "10px",
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
                xs: "18px 2px",
                sm: "12px 0px",
              },
              marginLeft: { xs: "4px", sm: "0" },
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: { xs: "12px", sm: "14px" },
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
                xs: "18px 10px",
                sm: "12px 0px",
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
          {plans.filter((plan) => plan.plan_type_range === selectedPlan)
            .length > 0 ? (
            plans
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
                    freePlans={plan.free_plans || []}
                    language={language}
                    delivery={plan.city}
                    items={plan.no_of_items.items.filter(
                      (item) => item.value > 0
                    )}
                  />
                </Grid2>
              ))
          ) : (
            <Grid2
              xs={12}
              sx={{
                textAlign: "center",
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "50vh",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.5rem",
                  color: "#d92531",
                  fontWeight: "bold",
                }}
              >
                {language === "ar"
                  ? selectedPlan === "weekly"
                    ? "لا توجد خطط أسبوعية متاحة"
                    : "لا توجد خطط شهرية متاحة"
                  : selectedPlan === "weekly"
                  ? "No Weekly Plans Available"
                  : "No Monthly Plans Available"}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  color: "#555",
                  marginTop: "10px",
                }}
              >
                {language === "ar"
                  ? "يرجى التحقق مرة أخرى لاحقًا للحصول على خطط محدثة."
                  : "Please check back later for updated plans."}
              </Typography>
            </Grid2>
          )}
        </Grid2>
      )}
    </Box>
  );
};

export default Plans;
