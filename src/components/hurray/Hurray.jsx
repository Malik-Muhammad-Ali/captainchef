import React from 'react'
// import people from '../assets/people.png'
import { Box, Typography, Container } from '@mui/material'



function Hurray() {
  return (
    <Box display={'flex'} flexDirection={'column'}  justifyContent={'center'} alignItems={'center'} sx={{padding: {xs: '2px'}}}>
       <Box component="img" src='' alt="Subscription success" sx={{ maxWidth: "100%", height: "auto" }} />
        <Typography variant='h5' fontWeight={'bold'} marginTop={3} fontFamily= {'"Open Sans"'}>Hurrayyy!!!</Typography>
        <Typography marginTop={2} color='#656565'  fontFamily= {'"Open Sans"'} sx={{fontSize: {xs: '14px', lg: "20px", sm: '20px', md: '20px'}, }}>  You Have Successfully Purchased A Subscription Plan. But It's Inactive Now. For Activation, Download The App Now. Go To My Subscriptions And Schedule It.</Typography>

        
    </Box>
  )
}

export default Hurray