import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import HeroSec from "./HeroSec";
import FlowSec from "./FlowSec";
import MenuSec1 from "./MenuSec1";
import TestimonialsSec from "./TestimonialsSec";
import ServicesComp from "./ServicesComp";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [dishes, setDishes] = useState(0);
  const [categories, setCategories] = useState(0);
  const [users, setUsers] = useState(0);

  const animateCount = (setCount, maxValue) => {
    let currentCount = 0;
    const increment = Math.ceil(maxValue / 30);

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= maxValue) {
        setCount(maxValue);
        clearInterval(interval);
      } else {
        setCount(currentCount);
      }
    }, 20);
  };

  useEffect(() => {
    animateCount(setDishes, Math.floor(Math.random() * 100) + 60);
    animateCount(setCategories, Math.floor(Math.random() * 10) + 10);
    animateCount(setUsers, Math.floor(Math.random() * 401) + 100);
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        gap: { xs: "20px", sm: "40px", md: "80px", lg: "80px" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      {/* Hero Section */}
      <HeroSec />

      {/* Stats Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          padding: { xs: 1, sm: 2, md: 3, lg: 4 },
          mr: { xs: 2, sm: 4, md: 8 },
          ml: { xs: 2, sm: 4, md: 8 },
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: { lg: 600, md: 500, sm: 500, xs: 500 },
              fontSize: { lg: "40px", md: "40px", sm: "30px", xs: "18px" },
            }}
          >
            {dishes}+
          </Typography>
          <Typography
            sx={{
              fontsize: { lg: "20px", md: "16px", sm: "14px", xs: "8px" },
              fontWeight: { lg: 300, md: 300, sm: 300, xs: 200 },
            }}
          >
            Dishes
          </Typography>
        </Box>
        <Divider
          sx={{
            height: { lg: "80px", md: "70px", sm: "60px", xs: "50px" },
            borderWidth: "2px",
            bgcolor: "white",
          }}
        />
        <Box
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: { lg: 600, md: 500, sm: 500, xs: 500 },
              fontSize: { lg: "40px", md: "40px", sm: "30px", xs: "18px" },
            }}
          >
            {categories}+
          </Typography>
          <Typography
            sx={{
              fontsize: { lg: "20px", md: "16px", sm: "14px", xs: "8px" },
              fontWeight: { lg: 300, md: 300, sm: 300, xs: 200 },
            }}
          >
            Plan Categories
          </Typography>
        </Box>
        <Divider
          sx={{
            height: { lg: "80px", md: "70px", sm: "60px", xs: "50px" },
            borderWidth: "2px",
            bgcolor: "white",
          }}
        />
        <Box
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: { lg: 600, md: 500, sm: 500, xs: 500 },
              fontSize: { lg: "40px", md: "40px", sm: "30px", xs: "18px" },
            }}
          >
            {users.toLocaleString()}K+
          </Typography>
          <Typography
            sx={{
              fontsize: { lg: "20px", md: "16px", sm: "14px", xs: "8px" },
              fontWeight: { lg: 300, md: 300, sm: 300, xs: 200 },
            }}
          >
            Active Users
          </Typography>
        </Box>
      </Box>

      <Box>
        <FlowSec />
      </Box>

      <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { lg: "space-between", sm: "center", xs: "center" },
    alignItems: { lg: "center", sm: "center", xs: "center" },
    background: "linear-gradient(90deg, rgba(253, 32, 32, 0.8) 100%, rgba(236, 25, 25, 0.8) 100%), url('/bg1.png')", // Combined gradient and image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    padding: { xs: "16px", md: "24px" },
    gap: { xs: "20px", md: "unset" },
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    position: "relative",
  }}
>

        {/* Text Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { lg: "center", sm: "space-between" },
            alignItems: { xs: "center", sm: "unset" },
            ml: { xs: 2, sm: 4, md: 8 },
            mr: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "16px", md: "24px" },
            }}
          >
            FEELING SPECIAL WITH US?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 400,
              marginTop: "4px",
            }}
          >
            Hit the button!!!
          </Typography>
        </Box>

        {/* Button Section */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#FF4C4C",
            fontWeight: "bold",
            textTransform: "none",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#FF6666",
              color: "white",
            },
            width: "200px",
          }}
          onClick={() => navigate("/downloadapp")}
        >
          Download App Now
        </Button>
      </Box>

      <Box>
        <MenuSec1 />
      </Box>

      <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { lg: "space-between", sm: "center", xs: "center" },
    alignItems: { lg: "center", sm: "center", xs: "center" },
    background: "#0A0A0C", // Fallback color
    backgroundImage: "url('/bg.png')", // Ensure this is declared later
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover", // Ensures the image covers the container
    color: "white",
    padding: { xs: "16px", md: "24px" },
    gap: { xs: "20px", md: "unset" },
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add a shadow for elevation
    overflow: "hidden",
    position: "relative",
  }}
>

        {/* Text Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { lg: "center", sm: "space-between" },
            alignItems: { xs: "center", sm: "unset" },
            ml: { xs: 2, sm: 4, md: 8 },
            mr: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "16px", md: "24px" }, // Responsive font size
            }}
          >
            Still Not Downloaded The App?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: 400,
              marginTop: "4px",
            }}
          >
            Hit the button!!!
          </Typography>
        </Box>

        {/* Button Section */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#FF4C4C",
            fontWeight: "bold",
            textTransform: "none",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#FF6666",
              color: "white",
            },
            ml: { xs: 2, sm: 4, md: 8 },
            mr: { xs: 2, sm: 4, md: 8 },
          }}
          onClick={() => navigate("/downloadapp")}
        >
          Download App Now
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <ServicesComp />
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <TestimonialsSec />
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <Footer />
      </Box>

    </Box>
  );
}
