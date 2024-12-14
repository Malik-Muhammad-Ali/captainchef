import { Box } from '@mui/material'
import React from 'react'

const Msgbox = () => {
  return (
    <Box
      sx={{
        height: {
          lg:"50px",
          sm:"40px",
          xs:"35px"
        },
        width: {
          lg:"172px",
          md:"172px",
          sm:"150px",
          xs:"100px",
        },
        display: 'flex', // Flexbox for centering
        justifyContent: 'center', // Center text horizontally
        alignItems: 'center', // Center text vertically
        backgroundColor: '#e53935', // Red background
        color: 'white',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: {lg:'16px',md:"14px",sm:"14px",xs:"12px"},
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        '::after': {
          content: '""',
          position: 'absolute',
          bottom: {xs:'6px', md:'12px',sm:'9px'}, // Adjusted to align correctly
          left: {lg:'99%',md:"98%",sm:"95%",xs:"90%"}, // Triangle positioned at the right
          marginLeft: '0px',
          width: 0,
          height: 0,
          borderLeft: '25px solid #e53935', // Red triangle
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
        },
      }}
    >
      Help Me?
    </Box>
  )
}

export default Msgbox
