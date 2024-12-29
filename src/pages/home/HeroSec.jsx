import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import React from 'react'
import CustomerRating from './CustomerRating';

const HeroSec = () => {
  const isMobile = useMediaQuery  ("(max-width:600px)");
  return (
    <Box spacing={4} 
      sx={{
        display:"flex",
        flexDirection:{xs:"column", sm:"column",md:"row",lg:"row"},
        alignItems:"center",
        flexWrap:"wrap", 
        // border:"2px solid black",
        mr: { xs: 2, sm: 4, md: 8 } ,
        ml: { xs: 2, sm: 4, md: 8 } ,
        gap:{xs:"50px", sm:"50px",md:"0px",lg:"0px"}
        // padding: { xs: 2, sm: 4, md: 8 } ,
        // width:"100%",
        // padding:{lg:"10px",md:"10px",sm:"10px",xs:"5px"}
        // m:"50px 0",
        // height:"auto",
        }}>
        {/* Left Section */}
        <Box item xs={12} md={6} 
        sx={{
            display:'flex',
            flexDirection:"column",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:{md:'flex-start',lg:"flex-start",sm:"center", xs:"center"},
            // width:"60%",
            width:{xs:"100%", sm:'100%', md:"50%",lg:"50%"},
            // border:"2px solid red"
            gap:{lg:"20px",md:"15px",sm:"40px",xs:"32px"}
            }}>
            <Box sx={{
                display:"flex", 
                justifyContent:"center",
                flexDirection:"column",
                alignItems:{xs:"center", sm:'center',md:"flex-start",lg:"flex-start"}
                }}>
          <Typography
            sx={{
              fontSize:{xs:"18px", sm:"26px",md:"26px",lg:"40px"},
              fontWeight:{xs:600, sm:600,md:700, lg:700},
              color: '#1F1F1F',
            }}
          >
            CAPTAIN CHEF | FLAVOURS
          </Typography>
          <Typography
            sx={{
              fontSize:{xs:"18px", sm:"26px",md:"26px",lg:"40px"},
              fontWeight:{xs:600, sm:600,md:700, lg:700},
              color: '#1F1F1F',
              // marginBottom: 2,
            }}
          >
            CREATIVE CATERING
          </Typography>
          </Box>
          <Box sx={{
                display:"flex", 
                justifyContent:'center',
                alignItems:"center",
                width:{xs:"100%",sm:"70%",md:"100%",lg:"100%"}
                }}>

          <Typography
            variant="body1"
            sx={{
              color: '#555',
              // marginBottom: 4,
            }}
          >
            Specialists in providing healthy diets for athletes and everyone
            who wants to enjoy a healthy lifestyle and lifestyle.
          </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: {xs:"8px",sm:"12px",md:"14px",lg:"14px"},}}>
            <Button
              variant="contained"
              startIcon={
                <img
                  src="/download.png"
                  alt="delete-icon"
                  style={{
                    width: "100%", // Dynamically adjusts to the button
                    maxWidth: "20px", // Limit max size
                    objectFit: "contain",
                    // border:"2px solid black"
                  }}
                />
              }
              sx={{
                backgroundColor: '#D92531',
                color: '#fff',
                textTransform: 'none',
                borderRadius: '8px',
                width:{xs:"138px", sm:"200px",md:"200px"},
                height:{xs:"48px",sm:"50px",lg:"56px"},
                fontSize:{xs:"11px",sm:"14px",md:"16px"},
                flexGrow:1
              }}
            >
              Download Now
            </Button>
            <Button
              variant="outlined"
              startIcon={
                <img
                  src="/watchnow.png"
                  alt="delete-icon"
                  style={{
                    width: "100%", // Dynamically adjusts to the button
                    maxWidth: "20px", // Limit max size
                    objectFit: "contain",
                    // border:"2px solid black"
                  }}
                />
              }
              sx={{
                color: '#D92531',
                borderColor: '#D92531',
                textTransform: 'none',
                borderRadius: '8px',
                width:{xs:"138px", sm:"200px",md:"200px"},
                height:{xs:"48px",sm:"50px",lg:"56px"},
                fontSize:{xs:"11px",sm:"14px",md:"16px"},
              }}
            >
              Watch Intro
            </Button>
          </Box>
          {!isMobile && 
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 , flexDirection:{xs:"column", sm:"row",md:"row",lg:"row"}}}>
            <AvatarGroup spacing={'medium'}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </AvatarGroup>
           <CustomerRating />
          </Box>}
        </Box>

        {/* Right Section */}
        <Box item xs={12} md={6} sx={{
          width:{xs:"100%", sm:'100%', md:"50%",lg:"50%"},
          alignItems:"center",
          justifyContent:"center",
          display:"flex",
          }}>
          <Box
            component="img"
            src="/bgimg.png"
            alt="Mobile App"
            sx={{
              width: '100%',
              height:{lg:"450px", md:"330px",sm:"400px",xs:"250px"}
            //   Width: '620px',
            //   height:"400px"            //   borderRadius: '16px',
            //   boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          />
        </Box>
      </Box>
  )
}

export default HeroSec
