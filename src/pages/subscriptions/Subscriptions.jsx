import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Msgbox from "../../components/msgBox/MsgBox";
import CircularAvt from "../../components/circularAvt/CircularAvt";
import Cards2 from "../../components/plansCategoryCard/PlansCategoryCard";
import Carousel from "../../components/carosel/Carosel";
import CityModal from "../../components/cityModal/CityModal";
// import axios from 'axios';
import useAppStore from "../../store/store";


const Subscriptions = () => {
  const [openModal, setOpenModal] = useState(true);
  const {fetchCategories,categories}= useAppStore();

  useEffect(()=>{
    // setLoading(true);
    fetchCategories();
  },[])


  const getTextColor = (text) => {
    if (text.includes("Weight")) {
      return "#FFCA44";
    } else if (text.includes("Muscles")) {
      return "#352A6E";
    } else if (text.includes("Takmim")) {
      return "#0EA81D";
    } else if (text.includes("Captain")) {
      return "#CE2729";
    } else if (text.includes("Carb")) {
      return "#AE77BA";
    } else if (text.includes("Diabetes")) {
      return "#2A70B6";
    } else {
      return "#FD88BF";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        // gap:"16px",
        marginBottom: { lg: "180px", md: "170px", sm: "160px", xs: "150px" },
        flexDirection: "column",
        alignItems: "center",
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
            mb: {
              xs: "25px",
              sm: "20px",
              md: "35px",
            },
            display: "flex",
            justifyContent: "flex-start",
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
            Plan Categories
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: "10px", sm: "32px", lg: "50px", xl: "70px" },
            padding: { xs: "2px" },
            maxWidth: {
              xs: "300px",
              sm: "620px",
              md: "930px",
              lg: "1180px",
              xl: "2000px",
            },
          }}
        >
           {categories.map((data) => (
            <Cards2
              id={data.id}
              key={data.id}
              color={getTextColor(data.category_name_en)}
              title={data.category_name_en}
              // name={item.name}
              img={data.image}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { lg: "30px", md: "30px", sm: "18px", xs: "17px" },
          zIndex: 1000,
        }}
      >
        <Msgbox />
        <CircularAvt />
      </Box>
      <CityModal />
    </Box>
  );
};

export default Subscriptions;