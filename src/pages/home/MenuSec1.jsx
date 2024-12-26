import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const MenuSec1 = () => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        mr: { xs: 2, sm: 4, md: 8 } ,
        ml: { xs: 2, sm: 4, md: 8 } ,
        gap:{lg:"50px",nd:"50px",sm:"30px",xs:"20px"},
        backgroundColor: "#f9f9f9",
      }}>
        <Box 
          sx={{
            display: 'inline-block',
            padding: "4px",
            alignSelf: { xs: "center", sm: "center", md: "flex-start", lg: "flex-start" },
            }}>
          <Typography sx={{
            fontSize: {lg:"30px", md:"30px", sm:"24px",xs:"24px"},
            fontWeight: 600,
            borderBottom: "2px solid red",
            display: "inline-block",
            }}>
            Our Delicious Menu
            </Typography>
    </Box>
    {/* main 1 */}
    <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection:{xs:"column-reverse",sm:"column-reverse",md:"row",lg:"row"},
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#f9f9f9",
    }}>
    {/* phone */}
        <Box sx={{
        width:{lg:"50%",md:"50%",sm:"100%",xs:"100%"},
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        p:"20px",
        height:"auto"
    }}>
       <Box
  sx={{
    flex: 1,
    width: { lg: "300px", md: "300px", sm: "185px", xs: "164px" },
    height: { lg: "500px", md: "500px", sm: "375px", xs: "330px" },
    position: "relative",
    backgroundImage: `url('/public/Body.svg')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  }}
>
  <Box
    sx={{
      position: "absolute",
      top: "10%",
      left: "10%",
      right: "10%",
      bottom: "10%",
      backgroundImage: `url('/Snacks.svg')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  />
</Box>

        </Box>
        {/* typo */}
        <Box sx={{
        width:{lg:"50%",md:"50%",sm:"100%",xs:"100%"},
        display: "flex",
        flexDirection:"column",
        gap:"20px",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
    }}>
        <Typography sx={{
          fontSize:{lg:"32px",md:"32px",sm:"22px",xs:"22px"},
          fontWeight:{lg:600,md:600,sm:600,xs:600},
          color:"#CE2729"
        }}>Snacks</Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis. adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis tempus. Iaculis massa diam gravida non, tristique nunc, pulvinar. Viverra lacus faucibus sem tincidunt gravida. Porta sit at cum purus. .
        </Typography>
        <Button
        variant="contained"
        sx={{
          backgroundColor: "#CE2729",
          color: "#FFFFFF",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius:"12px",
          width:{xs:"100%",md:"unset"}
        }}
      >
        Download App Now
      </Button>
    </Box>
    </Box>
    {/* main 2 */}
    <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection:{lg:"row-reverse",md:"row-reverse",sm:"column-reverse",xs:"column-reverse"},
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#f9f9f9",
    }}>
        <Box sx={{
      width:{lg:"50%",md:"50%",sm:"100%",xs:"100%"},
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        p:"20px",
        height:"auto"
    }}>
        <Box
  sx={{
    flex: 1,
    width: { lg: "300px", md: "300px", sm: "185px", xs: "164px" },
    height: { lg: "500px", md: "500px", sm: "375px", xs: "330px" },
    position: "relative",
    backgroundImage: `url('/public/Body.svg')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  }}
>
  <Box
    sx={{
      position: "absolute",
      top: "10%",
      left: "10%",
      right: "10%",
      bottom: "10%",
      backgroundImage: `url('/Fish.svg')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  />
</Box>

        </Box>
        <Box sx={{
        width:{lg:"50%",md:"50%",sm:"100%",xs:"100%"},
        display: "flex",
        flexDirection:"column",
        gap:"20px",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
    }}>
        <Typography sx={{
          fontSize:{lg:"32px",md:"32px",sm:"22px",xs:"22px"},
          fontWeight:{lg:600,md:600,sm:600,xs:600},
          color:"#0F001A"
        }}>Fish</Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis. adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis tempus. Iaculis massa diam gravida non, tristique nunc, pulvinar. Viverra lacus faucibus sem tincidunt gravida. Porta sit at cum purus. .
        </Typography>
        <Button
        variant="contained"
        sx={{
          backgroundColor: "#0F001A",
          color: "#FFFFFF",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius:"12px",
          width:{xs:"100%",md:"unset"}
        }}
      >
        Download App Now
      </Button>
    </Box>
    </Box>
    {/* main 3 */}
    <Box sx={{
        width: "100%",
        display: "flex",
        flexDirection:{xs:"column-reverse",sm:"column-reverse",md:"row",lg:"row"},
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#f9f9f9",
    }}>
        <Box sx={{
        width:{lg:"50%",md:"50%",sm:"100%",xs:"100%"},
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        p:"20px",
        height:"auto"
    }}>
        <Box
  sx={{
    flex: 1,
    width: { lg: "300px", md: "300px", sm: "185px", xs: "164px" },
    height: { lg: "500px", md: "500px", sm: "375px", xs: "330px" },
    position: "relative",
    backgroundImage: `url('/public/Body.svg')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  }}
>
  <Box
    sx={{
      position: "absolute",
      top: "10%", 
      left: "10%",
      right: "10%",
      bottom: "10%", 
      backgroundImage: `url('/Beef.svg')`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  />
</Box>

        </Box>
        <Box sx={{
        width:{lg:"50%",md:"50%",sm:"100%",xs:"100%"},
        display: "flex",
        flexDirection:"column",
        gap:"20px",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
    }}>
        <Typography sx={{
          fontSize:{lg:"32px",md:"32px",sm:"22px",xs:"22px"},
          fontWeight:{lg:600,md:600,sm:600,xs:600},
          color:"#CE2729"
        }}>Beef</Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis. adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis
        </Typography>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis vel tempor commodo pellentesque rutrum nunc duis tempus. Iaculis massa diam gravida non, tristique nunc, pulvinar. Viverra lacus faucibus sem tincidunt gravida. Porta sit at cum purus. .
        </Typography>
        <Button
        variant="contained"
        sx={{
          backgroundColor: "#CE2729",
          color: "#FFFFFF",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius:"12px",
          width:{xs:"100%",md:"unset"}
        }}
      >
        Download App Now
      </Button>
    </Box>
    </Box>
    </Box>
  )
}

export default MenuSec1
