import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Msgbox from "../../components/msgBox/MsgBox";
import CircularAvt from "../../components/circularAvt/CircularAvt";
import Cards2 from "../../components/plansCategoryCard/PlansCategoryCard";
import Carousel from "../../components/carosel/Carosel";
import useAppStore from "../../store/store";
import Loader from "../../components/loader/Loader";

const Subscriptions = () => {
  const { fetchCategories, categories, language, city } = useAppStore();
  const isRTL = language === "ar";
  const [loading, setLoading] = useState(true);
  const handleCityChange = () => {
    useAppStore.setState({ city: "" });
  };

  useEffect(() => {
    setLoading(true);
    if (categories.length === 0) {
      fetchCategories();
    }
    setLoading(false);
  }, []);

  const getTextColor = [
    "#FFCA44",
    "#352A6E",
    "#0EA81D",
    "#CE2729",
    "#D2252B",
    "#AE77BA",
    "#2A70B6",
    "#FD88BF",
  ];

  // Component
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginBottom: { lg: "80px", md: "70px", sm: "160px", xs: "150px" },
          flexDirection: "column",
          alignItems: "center",
          height: "calc(100vh - 200px)",
          overflowY: "scroll",
        }}
      >
        <Carousel />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: { lg: "20px", md: "20px", sm: "20px", xs: "5px" },
          }}
        >
          <Box
            sx={{
              mt: {
                xs: "25px",
                sm: "20px",
                md: "35px",
              },
              display: "flex",
              justifyContent: isRTL ? "flex-start" : "flex-end",
              alignSelf: isRTL ? "flex-end" : "flex-start",
            }}
          >
            <Typography
              sx={{
                color: "#1F1F1F",
                fontWeight: {
                  xs: 600,
                  sm: 700,
                  md: 700,
                },
                fontSize: {
                  xs: "22px",
                  sm: "32px",
                  md: "40px",
                },
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              {language === "en" ? "Plan Categories" : "أقسام الخطط "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: isRTL ? "flex-start" : "flex-end",
              alignSelf: isRTL ? "flex-end" : "flex-start",
            }}
          >
            <Typography
              sx={{
                mb: {
                  xs: "25px",
                  sm: "20px",
                  md: "35px",
                },
                display: "flex",
                gap: "10px",
              }}
            >
              <span>{city ? city : ""}</span>
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => handleCityChange()}
              >
                {language === "en" ? "Change City" : "تغيير المدينة"}
              </span>
            </Typography>
          </Box>
          {loading ? (
            <Loader />
          ) : (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: "10px", sm: "32px", lg: "50px", xl: "70px" },
                maxWidth: {
                  xs: "300px",
                  sm: "620px",
                  md: "930px",
                  lg: "1180px",
                  xl: "1640px",
                },
                justifyContent: "space-between",
                direction: isRTL ? "rtl" : "ltr",
                mb: { lg: "50px", md: "50px", sm: "30px", xs: "20px" },
              }}
            >
              {categories.map((data, index) => (
                <Cards2
                  key={data.id}
                  id={data.id}
                  language={language}
                  color={getTextColor[index % getTextColor.length]}
                  title={
                    language === "en"
                      ? data.category_name_en
                      : data.category_name_ar
                  }
                  img={data.image}
                />
              ))}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            position: "fixed",
            bottom: 55,
            right: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { lg: "30px", md: "30px", sm: "18px", xs: "17px" },
            zIndex: 1000,
            height: "50px",
          }}
        >
          <Msgbox />
          <CircularAvt />
        </Box>
      </Box>
    </>
  );
};

export default Subscriptions;
