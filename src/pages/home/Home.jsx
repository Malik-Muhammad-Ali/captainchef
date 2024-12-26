import React from 'react';
import { Box, Button, Divider, Typography} from '@mui/material';
import HeroSec from './HeroSec';
import FlowSec from './FlowSec';
import MenuSec1 from './MenuSec1';
import TestimonialsSec from './TestimonialsSec';
import ServicesComp from './ServicesComp';
import Footer from './Footer';


export default function Home() {
  return (
    <Box sx={{ 
      backgroundColor: '#fff', 
      // padding: { xs: 2, sm: 4, md: 8 } ,
      gap:{xs:"20px",sm:'40px',md:"80px",lg:"80px"},
      display:"flex",
      flexDirection:"column",
      width:"100%"
      }}>
      {/* Hero Section */}
      <HeroSec/>

      {/* Stats Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#000',
          color: '#fff',
          padding: {xs:1, sm:2,md:3,lg:4},
          mr: { xs: 2, sm: 4, md: 8 } ,
          ml: { xs: 2, sm: 4, md: 8 } ,
          borderRadius: '16px',

        }}
      >
        <Box sx={{ textAlign: {xs:'center',sm:"center",md:"center",lg:"center"} }}>
          <Typography sx={{ 
            fontWeight: {lg:600,md:500,sm:500,xs:500}, 
            fontSize:{lg:"40px", md:"40px",sm:"30px",xs:"18px"} 
            }}>
            64+
          </Typography>
          <Typography sx={{
            fontsize:{lg:"20px", md:"16px",sm:"14px",xs:"8px"}, 
            fontWeight:{lg:300,md:300,sm:300,xs:200}
            }}>
            Dishes</Typography>
        </Box>
          <Divider sx={{ height: {lg:'80px' , md:"70px",sm:"60px",xs:"50px"}, borderWidth:"2px",bgcolor:"white" }} />
        <Box sx={{ textAlign: {xs:'center',sm:"center",md:"center",lg:"center"}  }}>
        <Typography sx={{ 
            fontWeight: {lg:600,md:500,sm:500,xs:500}, 
            fontSize:{lg:"40px", md:"40px",sm:"30px",xs:"18px"} 
            }}>
            10+
          </Typography>
          <Typography sx={{
            fontsize:{lg:"20px", md:"16px",sm:"14px",xs:"8px"}, 
            fontWeight:{lg:300,md:300,sm:300,xs:200}
            }}>Plan Categories</Typography>
        </Box>
        <Divider sx={{ height: {lg:'80px' , md:"70px",sm:"60px",xs:"50px"}, borderWidth:"2px",bgcolor:"white" }} />
        <Box sx={{ textAlign: {xs:'center',sm:"center",md:"center",lg:"center"} }}>
        <Typography sx={{ 
            fontWeight: {lg:600,md:500,sm:500,xs:500}, 
            fontSize:{lg:"40px", md:"40px",sm:"30px",xs:"18px"} 
            }}>
            105K+
          </Typography>
          <Typography sx={{
            fontsize:{lg:"20px", md:"16px",sm:"14px",xs:"8px"}, 
            fontWeight:{lg:300,md:300,sm:300,xs:200}
            }}>Active Users</Typography>
        </Box>
      </Box>

      <Box>
        <FlowSec/>
      </Box>
      
      <Box
      sx={{
        display: "flex",
        flexDirection:{xs:"column", md:"row"},
        justifyContent: {lg:"space-between",sm:"center",xs:"center"},
        alignItems: {lg:"center",sm:"center",xs:"center"},
        background: "linear-gradient(90deg, #FF4C4C 0%, #FF6666 100%)", // Red gradient
        color: "white",
        padding: { xs: "16px", md: "24px"}, // Responsive padding
        gap:{xs:"20px",md:"unset"},
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add a shadow for elevation
        overflow: "hidden",
        position: "relative",  
      }}
    >
      {/* Text Section */}
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:{lg:"center",sm:"space-between"},
        alignItems:{xs:"center", sm:"unset"},
        ml: { xs: 2, sm: 4, md: 8 } ,
        mr: { xs: 2, sm: 4, md: 8 } ,
      }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "16px", md: "24px" }, // Responsive font size
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
          "&:hover": {
            backgroundColor: "#FF6666",
            color: "white",
          },
        width:"200px"
        }}

      >
        Download App Now
      </Button>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/bg1.png')", // Replace with your wave pattern
          opacity: 0.2, // Reduce visibility of the background pattern
          zIndex: 0,
        }}
      />
    </Box>

    <Box>
      <MenuSec1/>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection:{xs:"column", md:"row"},
        justifyContent: {lg:"space-between",sm:"center",xs:"center"},
        alignItems: {lg:"center",sm:"center",xs:"center"},
        backgroundImage:"/bg.png",
        background: "#0A0A0C",
        color: "white",
        padding: { xs: "16px", md: "24px"},
        gap:{xs:"20px",md:"unset"},
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add a shadow for elevation
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Text Section */}
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:{lg:"center",sm:"space-between"},
        alignItems:{xs:"center", sm:"unset"},
        ml: { xs: 2, sm: 4, md: 8 } ,
        mr: { xs: 2, sm: 4, md: 8 } ,
      }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "16px", md: "24px" }, // Responsive font size
          }}
        >
          Still Not Download The App?
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
          "&:hover": {
            backgroundColor: "#FF6666",
            color: "white",
          },
          ml: { xs: 2, sm: 4, md: 8 } ,
        mr: { xs: 2, sm: 4, md: 8 } ,
        }}
      >
        Download App Now
      </Button>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/bg.png')", // Replace with your wave pattern
          opacity: 0.2, // Reduce visibility of the background pattern
          zIndex: 0,
        }}
      />
    </Box>

    <Box sx={{
      width:"100%",
    }}>
      <ServicesComp/>
    </Box>

    {/* <Box sx={{
      width:"100%"
    }}>
      <TestimonialsSec/>
    </Box> */}
    <Box sx={{
      width:"100%"
    }}>
      <Footer/>
    </Box>
    </Box>
  );
}
