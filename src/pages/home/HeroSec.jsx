import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import React from 'react'
import CustomerRating from './CustomerRating';
import { useNavigate } from 'react-router-dom';

const HeroSec = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery  ("(max-width:600px)");
  return (
    <Box spacing={4} 
      sx={{
        display:"flex",
        flexDirection:{xs:"column", sm:"column",md:"row",lg:"row"},
        alignItems:"center",
        flexWrap:"wrap", 
        mt:{ xs: 2, sm: 4, md: 8 } ,
        mr: { xs: 2, sm: 4, md: 8 } ,
        ml: { xs: 2, sm: 4, md: 8 } ,
        gap:{xs:"50px", sm:"50px",md:"0px",lg:"0px"}
        }}>
        <Box item xs={12} md={6} 
        sx={{
            display:'flex',
            flexDirection:"column",
            flexWrap:"wrap",
            justifyContent:"center",
            alignItems:{md:'flex-start',lg:"flex-start",sm:"center", xs:"center"},
            width:{xs:"100%", sm:'100%', md:"50%",lg:"50%"},
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L11.2929 16.7071L12 17.4142L12.7071 16.7071L12 16ZM13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4L13 4ZM5.29289 10.7071L11.2929 16.7071L12.7071 15.2929L6.70711 9.29289L5.29289 10.7071ZM12.7071 16.7071L18.7071 10.7071L17.2929 9.29289L11.2929 15.2929L12.7071 16.7071ZM13 16L13 4L11 4L11 16L13 16Z" fill="white"/>
                <path d="M5 21L19 21" stroke="white" stroke-width="2"/>
                </svg>
              }
              sx={{
                backgroundColor: '#D92531',
                color: '#fff',
                textTransform: 'none',
                borderRadius: '8px',
                width:{xs:"140px", sm:"200px",md:"200px"},
                height:{xs:"48px",sm:"50px",lg:"56px"},
                fontSize:{xs:"11px",sm:"14px",md:"16px"},
                flexGrow:1
              }}
              onClick={() => navigate("/downloadapp")}
            >
              Download Now
            </Button>
            <Button
              variant="outlined"
              startIcon={
                <svg width="20" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 22.6192V2.88177C1.50013 2.83895 1.51297 2.79712 1.5369 2.76153C1.56084 2.72594 1.5948 2.69817 1.63453 2.6817C1.67426 2.66523 1.718 2.6608 1.76025 2.66897C1.80251 2.67713 1.8414 2.69753 1.87205 2.72759L12.202 12.75L1.87205 22.7734C1.8414 22.8035 1.80251 22.8239 1.76025 22.832C1.718 22.8402 1.67426 22.8358 1.63453 22.8193C1.5948 22.8028 1.56084 22.7751 1.5369 22.7395C1.51297 22.7039 1.50013 22.6621 1.5 22.6192ZM16.5333 16.8682L3.58083 23.9677L3.57275 23.9722C3.34963 24.0928 3.13761 23.7924 3.32035 23.6177L13.4736 13.9589L16.5333 16.8682ZM3.32136 1.88234C3.13761 1.70757 3.34963 1.40724 3.57376 1.52777L3.58184 1.53229L16.5333 8.63175L13.4736 11.5421L3.32136 1.88234ZM21.7621 14.0056L18.1451 15.9873L14.7442 12.75L18.1451 9.51416L21.7621 11.4944C22.746 12.0353 22.746 13.4647 21.7621 14.0056Z" fill="#CE2729"/>
                </svg>
              }
              sx={{
                color: '#D92531',
                borderColor: '#D92531',
                textTransform: 'none',
                borderRadius: '8px',
                width:{xs:"140px", sm:"200px",md:"200px"},
                height:{xs:"48px",sm:"50px",lg:"56px"},
                fontSize:{xs:"12px",sm:"14px",md:"16px"},
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
