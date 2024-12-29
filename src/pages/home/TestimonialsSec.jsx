import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Testimonials.css"; // Import custom styles
import { Box, Typography } from "@mui/material";

const TestimonialsSec = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const testimonials = [
    {
      name: "John Smith",
      role: "Founder of AwesomeTech",
      image: "https://via.placeholder.com/80",
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Jane Doe",
      role: "CEO of TechWorld",
      image: "https://via.placeholder.com/80",
      text: "Lorem ipsum has been the industry's standard dummy text since the 1500s.",
    },
    {
      name: "Sam Wilson",
      role: "CTO of Innovations Inc.",
      image: "https://via.placeholder.com/80",
      text: "An unknown printer took a galley of type and scrambled it to make a specimen book.",
    },
    {
      name: "Emily Davis",
      role: "Designer at Artify",
      image: "https://via.placeholder.com/80",
      text: "It has survived not only five centuries but also the leap into electronic typesetting.",
    },
  ];
  
  return (
    <Box sx={{
        display: "flex",
        flexDirection:"column",
        mr: { xs: 2, sm: 4, md: 8 } ,
        ml: { xs: 2, sm: 4, md: 8 } ,
        gap:{lg:"50px",nd:"50px",sm:"30px",xs:"20px"},
        // backgroundColor: "#f9f9f9",
        position:"relative"
      }}>
        <Box
          sx={{
          display: 'inline-block',
          padding: "4px",
          alignSelf: { xs: "center", sm: "center", md: "flex-start", lg: "flex-start" },
          }}>
          <Typography
            sx={{
            fontSize: {lg:"30px", md:"30px", sm:"24px",xs:"24px"},
            fontWeight: 600,
            borderBottom: "2px solid red",
            display: "inline-block",
            }}>
            This is why people trust us to help you
          </Typography>
        </Box>
        <div className="testimonials-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="swiper-button prev" ref={prevRef}>
        &#8249;
      </button>
      <button className="swiper-button next" ref={nextRef}>
        &#8250;
      </button>
    </div>
    </Box>
  )
}

export default TestimonialsSec
