import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

export default function PlansCategoryCard({ color, title, img, id, language }) {
  const { setSelectedColor } = useAppStore();
  const navigate = useNavigate();
  const nameArray = title.split(" ");
  const isRTL = language === "ar";
  const [isLoaded, setIsLoaded] = useState(false);
  const handleCardClick = () => {
    setSelectedColor(color); // Set the selected color in the store
    navigate(`/subscriptions/category/${id}`); // Navigate to the desired route
  };

  // Adjust the title arrangement for RTL and LTR
  const titleText =
    nameArray.length > 1 ? nameArray.slice(0, -1).join(" ") : title;
  const lastWord = isRTL ? nameArray[0] : nameArray[nameArray.length - 1];

  return (
    <Card
      sx={{
        maxWidth: {
          xs: 140,
          sm: 180,
          md: 200,
          lg: 250,
          xl: 300,
        },
        minWidth: {
          xs: 140,
          sm: 180,
          md: 200,
          lg: 250,
          xl: 300,
        },
        maxHeight: {
          xs: 184,
          sm: 225,
          md: 250,
          lg: 300,
          xl: 350,
        },
        minHeight: {
          xs: 184,
          sm: 225,
          md: 250,
          lg: 300,
          xl: 350,
        },
        borderRadius: {
          xs: "12px",
          sm: "24px",
          md: "24px",
          lg: "24px",
        },
        border: "4px solid",
        borderColor: color,
        flexGrow: 1,
        cursor: "pointer",
        boxShadow: "none",
        "@media (min-width: 391px) and (max-width:440px)": {
          minWidth: "160px",
          maxWidth: "160px",
          minHeight: "200px",
          maxHeight: "200px",
        },
      }}
      onClick={handleCardClick}
    >
      {isLoaded === true ? (
        <CardMedia
          sx={{
            height: {
              xs: 139,
              sm: 158,
              md: 175,
              lg: 215,
              xl: 250,
            },
            width: "100%",
            objectFit: "cover",
          }}
          image='/Banner.png'
          title={title}
        />
      ) : (
        <CardMedia
          sx={{
            height: {
              xs: 139,
              sm: 158,
              md: 175,
              lg: 215,
              xl: 250,
            },
            width: "100%",
            objectFit: "cover",
          }}
          onLoad={() => setIsLoaded(true)}
          image={img}
          title={title}
        />
      )}

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: 0.5,
            sm: 1,
            md: 1.5,
            lg: 1.5,
            xl: 2,
          },
          // gap: {
          //   xs: 0.5,
          //   sm: 1,
          //   md: 1,
          //   lg: 1,
          //   xl: 2.5,
          // },
        }}
      >
        <Typography
          variant="body"
          // component="div"
          sx={{
            fontSize: {
              xs: "0.75rem",
              sm: "1rem",
              md: "1.25rem",
              lg: "1.5rem",
              xl: "1.5rem",
            },
            fontWeight: "bold",
            textAlign: isRTL ? "right" : "left",
          }}
        >
          {language === "en" ? titleText : title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: color,
            fontSize: {
              xs: "0.65rem",
              sm: "0.85rem",
              md: "1rem",
              lg: "1rem",
              xl: "1rem",
            },
            textAlign: isRTL ? "right" : "left",
          }}
        >
          {lastWord}
        </Typography>
      </CardContent>
    </Card>
  );
}
