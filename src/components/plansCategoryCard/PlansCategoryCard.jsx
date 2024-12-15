import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function PlansCategoryCard({color, title, img,id }) {
  const navigate = useNavigate();
  const text = title;
const nameArray = text.split(" ");
const titleArray = nameArray.length > 1 ? nameArray.slice(0, -1).join(" ") : text;

  return (
    <Card
      sx={{
        maxWidth: {
          xs: 147,
          sm: 180,
          md: 200,
          lg: 250,
          xl: 320,
        },
        minWidth: {
          xs: 135,
          sm: 180,
          md: 200,
          lg: 250,
          xl: 320,
        },
        maxHeight: {
          xs: 184,
          sm: 225,
          md: 250,
          lg: 300,
          xl: 388,
        },
        minHeight: {
          xs: 184,
          sm: 225,
          md: 250,
          lg: 300,
          xl: 388,
        },
        borderRadius: {
          xs: "12px",
          sm: "24px",
          md: "24px",
          lg: "24px"
        },
        border: "2px solid",
        borderColor: color,
        flexGrow: 1,
        cursor: "pointer",
        boxShadow: 'none'
      }}
      onClick={() => navigate(`/subscriptions/plans/${id}`)}
    >
      <CardMedia
        sx={{
          height: {
            xs: 139,
          sm: 158,
          md: 175,
          lg: 215,
          xl: 280
          },
          width: '100%',
          objectFit: "cover",
          // borderBottom: `1px solid ${color}`,
        }}
        image={img}
        title={title}
      />
      
      <CardContent
        sx={{
          display:"flex",
          flexDirection:"column",
          padding: {
            xs: 0.5,
            sm: 1,
            md: 1.5,
            lg: 1.5,
            xl: 2,
          },
          gap:{
            xs:0.5,
            sm:1,
            md:1,
            lg:1,
            xl:2.5,
          },
          // padding:"4px"
        }}
      >
        <Typography
          // gutterBottom
          variant="body"
          component="div"
          sx={{
            fontSize: {
              xs: '0.75rem', // Smaller text for smaller screens
              sm: '1rem',
              md: '1.25rem',
              lg: '1.5rem',
              xl: '1.75rem',
            },
            fontWeight: "bold",
          }}
        >
          {titleArray}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: color,
            fontSize: {
              xs: '0.65rem', // Smaller body text for smaller screens
              sm: '0.85rem',
              md: '1rem',
              lg: '1rem',
              xl: '1.25rem',
            },
          }}
        >
          {nameArray[nameArray.length - 1]}
        </Typography>
      </CardContent>
    </Card>
  );
}
