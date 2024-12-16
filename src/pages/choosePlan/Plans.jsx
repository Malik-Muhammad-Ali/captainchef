import { useEffect, useState } from "react";
import {
  Box,
  Grid2,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlanCard from "../../components/planCard/PlanCard";
import useAppStore from "../../store/store";

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState("Weekly");
  const [loading, setLoading] = useState(true); // Add a loading state
  const { fetchPlans, plans } = useAppStore();

  useEffect(() => {
    // Simulating a delay for fetching plans (optional, to see the loading state in action)
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      await fetchPlans();
      setLoading(false); // Set loading to false once the data is fetched
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: "#f5f5f5",
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
          width: { xs: "100%", sm: "84%", md: "94%", lg: "95%", xl: "92.8%" },
          ml: { lg: "35px", md: "30px", sm: "60px", xs: "0", xl: "100px" },
        }}
      >
        {/* Left Section */}
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
          {/* Back Icon */}
          <IconButton
            sx={{
              borderRadius: "20%",
              backgroundColor: "#fff",
              width: { xs: "40px", sm: "40px", md: "45px" },
              height: { xs: "40px", sm: "40px", md: "45px" },
            }}
          >
            <ArrowBackIosIcon
              sx={{
                paddingLeft: { xs: "5px", sm: "8px" },
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
              }}
            />
          </IconButton>

          {/* Title */}
          <Typography
            sx={{
              fontSize: { sm: "20px", md: "24px" },
              fontWeight: "600",
              color: "#000",
            }}
          >
            Choose Plan
          </Typography>
        </Box>

        {/* Plan Selection Box */}
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
            height: { xs: "63px", sm: "" },
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
              padding: { xs: "18px 2px", sm: "12px 0px" },
              marginLeft: "4px",
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
              padding: { xs: "18px 10px", sm: "12px 0px" },
              marginRight: "4px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: { xs: "12px", sm: "14px" },
              transition: "background-color 0.3s ease",
            }}
          >
            Monthly
          </Box>
        </Box>
      </Box>

      {/* Conditional Rendering: Show Loading or Content */}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress color="#D92531" />
          <Typography sx={{ marginLeft: 2, fontSize: "1.2rem" }}>
            Loading Plans...
          </Typography>
        </Box>
      ) : (
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
          {plans
            .filter((plan) => plan && plan.id) // Filter only valid plans
            .map((plan) => (
              <Grid2
                xs={12}
                sm={6}
                md={3}
                key={plan.id}
                id={plan.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PlanCard
                  plan={plan}
                  planID={plan.id}
                  days={plan.total_days}
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
