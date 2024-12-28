import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./Testimonials.css"; // Import custom styles
import { Box, Typography } from "@mui/material";

const TestimonialsSec = () => {
  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "John Smith",
      title: "Founder of Awesomenux Technology",
      image: "profilepicture.jpg",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Jane Doe",
      title: "CEO of CreativeWorks",
      image: "profilepicture.jpg",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Alex Johnson",
      title: "CTO of InnovateHub",
      image: "profilepicture.jpg",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Alex Johnson",
      title: "CTO of InnovateHub",
      image: "profilepicture.jpg",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Alex Johnson",
      title: "CTO of InnovateHub",
      image: "profilepicture.jpg",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "Alex Johnson",
      title: "CTO of InnovateHub",
      image: "profilepicture.jpg",
    },
  ];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Ensure Swiper updates navigation buttons after render
    const updateSwiper = () => {
      if (prevRef.current && nextRef.current) {
        const swiperInstance = document.querySelector(".swiper").swiper;
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.update();
      }
    };

    updateSwiper();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mr: { xs: 2, sm: 4, md: 8 },
        ml: { xs: 2, sm: 4, md: 8 },
        gap: { lg: "50px", nd: "50px", sm: "30px", xs: "20px" },
        // backgroundColor: "#f9f9f9",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          padding: "4px",
          alignSelf: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "30px", md: "30px", sm: "24px", xs: "24px" },
            fontWeight: 600,
            borderBottom: "2px solid red",
            display: "inline-block",
          }}
        >
          Testimonials
        </Typography>
      </Box>
      <div className="testimonial-slider">
        <div className="testimonial-backIcon custom-prev">
          <svg
            width="30"
            height="30"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5 0.128906C17.4 0.128906 11.5499 2.55211 7.23654 6.86545C2.92321 11.1788 0.5 17.0289 0.5 23.1289C0.5 29.2289 2.92321 35.079 7.23654 39.3924C11.5499 43.7057 17.4 46.1289 23.5 46.1289C29.6 46.1289 35.4501 43.7057 39.7635 39.3924C44.0768 35.079 46.5 29.2289 46.5 23.1289C46.5 17.0289 44.0768 11.1788 39.7635 6.86545C35.4501 2.55211 29.6 0.128906 23.5 0.128906V0.128906ZM33.5625 21.6914C33.9437 21.6914 34.3094 21.8429 34.579 22.1124C34.8486 22.382 35 22.7477 35 23.1289C35 23.5102 34.8486 23.8758 34.579 24.1454C34.3094 24.415 33.9437 24.5664 33.5625 24.5664H16.9076L23.0802 30.7362C23.2139 30.8698 23.3199 31.0285 23.3923 31.2031C23.4646 31.3777 23.5018 31.5649 23.5018 31.7539C23.5018 31.9429 23.4646 32.1301 23.3923 32.3047C23.3199 32.4793 23.2139 32.638 23.0802 32.7717C22.9466 32.9053 22.7879 33.0113 22.6133 33.0837C22.4387 33.156 22.2515 33.1932 22.0625 33.1932C21.8735 33.1932 21.6863 33.156 21.5117 33.0837C21.3371 33.0113 21.1784 32.9053 21.0448 32.7717L12.4198 24.1467C12.2859 24.0131 12.1797 23.8545 12.1072 23.6799C12.0347 23.5052 11.9974 23.318 11.9974 23.1289C11.9974 22.9398 12.0347 22.7526 12.1072 22.578C12.1797 22.4033 12.2859 22.2447 12.4198 22.1112L21.0448 13.4862C21.3147 13.2162 21.6808 13.0646 22.0625 13.0646C22.4442 13.0646 22.8103 13.2162 23.0802 13.4862C23.3502 13.7561 23.5018 14.1222 23.5018 14.5039C23.5018 14.8856 23.3502 15.2517 23.0802 15.5217L16.9076 21.6914H33.5625Z"
              fill="#CE2729"
            />
          </svg>
        </div>
        <div className="testimonial-forwardIcon custom-next">
          <svg
            width="30"
            height="30"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5 0.128906C29.6 0.128906 35.4501 2.55211 39.7635 6.86545C44.0768 11.1788 46.5 17.0289 46.5 23.1289C46.5 29.2289 44.0768 35.079 39.7635 39.3924C35.4501 43.7057 29.6 46.1289 23.5 46.1289C17.4 46.1289 11.5499 43.7057 7.23654 39.3924C2.92321 35.079 0.5 29.2289 0.5 23.1289C0.5 17.0289 2.92321 11.1788 7.23654 6.86545C11.5499 2.55211 17.4 0.128906 23.5 0.128906V0.128906ZM13.4375 21.6914C13.0563 21.6914 12.6906 21.8429 12.421 22.1124C12.1514 22.382 12 22.7477 12 23.1289C12 23.5102 12.1514 23.8758 12.421 24.1454C12.6906 24.415 13.0563 24.5664 13.4375 24.5664H30.0924L23.9198 30.7362C23.7861 30.8698 23.6801 31.0285 23.6077 31.2031C23.5354 31.3777 23.4982 31.5649 23.4982 31.7539C23.4982 31.9429 23.5354 32.1301 23.6077 32.3047C23.6801 32.4793 23.7861 32.638 23.9198 32.7717C24.0534 32.9053 24.2121 33.0113 24.3867 33.0837C24.5613 33.156 24.7485 33.1932 24.9375 33.1932C25.1265 33.1932 25.3137 33.156 25.4883 33.0837C25.6629 33.0113 25.8216 32.9053 25.9552 32.7717L34.5802 24.1467C34.7141 24.0131 34.8203 23.8545 34.8928 23.6799C34.9653 23.5052 35.0026 23.318 35.0026 23.1289C35.0026 22.9398 34.9653 22.7526 34.8928 22.578C34.8203 22.4033 34.7141 22.2447 34.5802 22.1112L25.9552 13.4862C25.6853 13.2162 25.3192 13.0646 24.9375 13.0646C24.5558 13.0646 24.1897 13.2162 23.9198 13.4862C23.6498 13.7561 23.4982 14.1222 23.4982 14.5039C23.4982 14.8856 23.6498 15.2517 23.9198 15.5217L30.0924 21.6914H13.4375Z"
              fill="#CE2729"
            />
          </svg>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            infinite: true,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => {
            swiper.slides.forEach((slide, index) => {
              const isActive = index === swiper.activeIndex;
              slide.style.opacity = isActive ? 1 : 0.4;
            });
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-upperIcon">
                  <svg
                    width="30"
                    height="25"
                    viewBox="0 0 45 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8468 2.45647L17.9645 0.0664673C7.11375 6.21219 2.02745 13.2115 0.671107 21.0643C-0.346153 27.5515 2.197 32.6729 8.63965 32.6729C13.2173 32.6729 17.6254 29.6001 18.6427 24.4786C19.4904 18.5036 16.0996 14.9186 11.861 14.0651C13.5564 8.26076 20.6772 2.45647 20.8468 2.45647ZM35.4275 13.7236C37.2925 8.09006 44.0742 2.45647 44.2438 2.45647L41.3615 0.0664673C30.5107 6.21219 25.4244 13.2115 24.0681 21.0643C23.0508 27.5515 25.594 32.6729 32.0366 32.6729C36.6143 32.6729 41.0224 29.6001 41.8701 24.4786C42.8874 18.5036 39.6661 14.5772 35.4275 13.7236Z"
                      fill="url(#paint0_radial_3764_269)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_3764_269"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12.9654 5.65615) rotate(60.9385) scale(30.9082 37.1451)"
                      >
                        <stop stop-color="#F29685" />
                        <stop offset="1" stop-color="#E25439" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-lowerIcon">
                  <svg
                    width="30"
                    height="25"
                    viewBox="0 0 44 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5605 3.23253L26.4427 0.842529C37.2935 6.98825 42.3798 13.9875 43.7361 21.8404C44.7534 28.3275 42.2102 33.449 35.7676 33.449C31.1899 33.449 26.7818 30.3761 25.7645 25.2547C24.9168 19.2797 28.3077 15.6947 32.5463 14.8411C30.8508 9.03683 23.73 3.23253 23.5605 3.23253ZM8.97973 14.4997C7.11476 8.86612 0.333022 3.23253 0.163474 3.23253L3.04571 0.842529C13.8965 6.98825 18.9828 13.9875 20.3391 21.8404C21.3564 28.3275 18.8132 33.449 12.3706 33.449C7.79293 33.449 3.38479 30.3761 2.53708 25.2547C1.51982 19.2797 4.74115 15.3533 8.97973 14.4997Z"
                      fill="url(#paint0_radial_3764_270)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_3764_270"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(31.4418 6.43221) rotate(119.062) scale(30.9082 37.1451)"
                      >
                        <stop stop-color="#F29685" />
                        <stop offset="1" stop-color="#E25439" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
};

export default TestimonialsSec;
