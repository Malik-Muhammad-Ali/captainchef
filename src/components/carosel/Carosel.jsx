import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { Box, IconButton, useMediaQuery } from '@mui/material';

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:640px)");

  const swiperStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderBottomLeftRadius:isMobile ? "32px" : "unset",
    borderBottomRightRadius:isMobile ? "32px" : "unset",
  };

  return (
    <Box sx={{
      width:"100%",
      height:"auto",
      bgcolor:"none",
    }}>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        // Assign navigation elements before Swiper initializes
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      onSwiper={(swiper) => {
        // Ensure navigation is updated after Swiper mounts
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      style={{
        width: '100%',
        height:"90%",
      }}
    >
      {/* Slides */}
      <SwiperSlide>
        <img
          src="/BannerMain.png"
          alt="Slide 1"
          style={swiperStyle}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/BannerMain.png"
          alt="Slide 2"
          style={swiperStyle}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/BannerMain.png"
          alt="Slide 3"
          style={swiperStyle}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/BannerMain.png"
          alt="Slide 4"
          style={swiperStyle}
        />
      </SwiperSlide>

      <IconButton
        ref={prevRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          height:"60px",
          width:"35px",
          borderRadius:"10px",
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <ChevronLeftOutlinedIcon/>
      </IconButton>
      <IconButton
        ref={nextRef}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          height:"60px",
          width:"35px",
          borderRadius:"10px",
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <ChevronRightOutlinedIcon/>
      </IconButton>
    </Swiper>
    </Box>
  );
};

export default Carousel;