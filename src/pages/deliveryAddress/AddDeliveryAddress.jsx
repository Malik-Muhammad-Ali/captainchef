import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Radio,
  Typography,
  IconButton,
  FormControlLabel,
  RadioGroup,
  useMediaQuery,
  Grid2,
  TextField,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const AddDeliveryAddress = () => {
  const navigate = useNavigate();
  const { city, setCity, cities, fetchCities, language, user } = useAppStore();
  const isArabic = language == "ar";

  // States
  const [addressType, setAddressType] = useState("");
  const [isTextFieldEnabled, setIsTextFieldEnabled] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [error, setError] = useState(null);
  const [positionFetching, setPositionFetching] = useState(true);
  const [address, setAddress] = useState("");
  const [position, setPosition] = useState(null);
  const [isAvailable, setIsAvailable] = useState();

  // Get the city ID
  const selectedCity = cities.find((cityName) => cityName.city_name === city);
  const cityId = selectedCity ? selectedCity.id : null;

  // Fetch Address API
  const fetchAddress = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${parseFloat(lon)}`
      );
      const data = await response.json();
      console.log(data)
      if (data && data.display_name) {
        setAddress(data.display_name);
        console.log("Address:", data.display_name);
      } else {
        console.error("No address found for the given coordinates");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  // Add address API
  const addAddress = async () => {
    try {
      const response = await axios.post(
        "https://appv2.captainchef.net/AppV2/public/contact/save-contact-addresses",
        {
          contact_id: user?.id,
          address_type: addressType,
          contact_person_name: user?.name,
          contact_person_mobile: user?.mobile,
          address: address,
          latitude: position[0],
          longitude: position[1],
          city_id: cityId,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Check Latitude and Longitude exists API
  const checkLatLon = async () => {
    try {
      const response = await axios.post(
        "https://portal.captainchef.net/public/check-location",
        {
          latitude: position[0],
          longitude: position[1],
          city_id: cityId,
          customer_id: user?.id,
        }
      );
      console.log(response);
      if (response.data.status === "success" && response.data.is_available === 0) {
        console.log('True Condition')
        setIsAvailable(true);
        addAddress();
        navigate('/deliveryAddress')
      } else {
        console.log('False Condition')
        setIsAvailable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle marker drag end
  const handleMarkerDragEnd = (event) => {
    const marker = event.target;
    const newPosition = marker.getLatLng();
    setPosition([newPosition.lat, newPosition.lng]);
    fetchAddress(newPosition.lat, newPosition.lng); // Fetch address for the new position
  };

  // handle selection
  const handleSelection = (text) => {
    setAddressType(text);
    if (text === "Custom") {
      setIsTextFieldEnabled(true);
    } else {
      setIsTextFieldEnabled(false);
    }
  };

  // handle navigation
  const handleNavigation = () => {
    checkLatLon();
    fetchAddress(user?.id)
    // addAddress();
  };

  // handle city change
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  // useEffect
  useEffect(() => {
    // Get the user's current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]); // Set the current position as the initial map position
          fetchAddress(latitude, longitude);
        },
        (error) => {
          console.error(error);
          // Optionally, you can set a default position if geolocation fails
          setPosition([51.505, -0.09]);
          setPositionFetching(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setPositionFetching(false);
    }
  }, []);

  // Component
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { lg: "30px", md: "30px", sm: "15px", xs: "24px" },
          bgcolor: "#F8F8F8",
          height: "calc(100vh - 120px)",
          overflowY: "scroll",
          direction: isArabic ? "rtl" : "ltr",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: "0 10px",
            width: { lg: "1100px", md: "920px", sm: "664px", xs: "311px" },
            mt: { lg: "30px", md: "30px", sm: "15px", xs: "24px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: {
                xs: "10px",
                sm: "30px",
                md: "30px",
              },
            }}
          >
            <IconButton
              sx={{
                borderRadius: "20%",
                backgroundColor: "#fff",
                width: { xs: "40px", sm: "48px", md: "56px" },
                height: { xs: "40px", sm: "48px", md: "56px" },
                cursor: "pointer",
              }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackIosIcon
                sx={{
                  fontSize: "24px",
                  ml: language === "ar" ? "-10px" : "10px", // Adjust margin conditionally
                  transform:
                    language === "ar" ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: { md: "32px", sm: "32px", xs: "20px" },
                fontWeight: { md: "700px", sm: "32px", xs: "500px" },
                fontFamily: "Work Sans",
              }}
            >
              {isArabic ? "عنوان التسليم" : "Add New Address"}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            borderTopLeftRadius: isMobile ? "16px" : "8px",
            borderTopRightRadius: isMobile ? "16px" : "8px",
            borderRadius: isMobile ? "16px 16px 0 0" : "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            outline: "none",
            backgroundColor: "background.paper",
            pt: "4px",
            pb: "4px",
            // padding: isMobile ? "24px" : "32px",
            direction: isArabic ? "rtl" : "ltr",
            width: { lg: "1100px", md: "920px", sm: "664px", xs: "311px" },
            // border:"2px solid red"
          }}
        >
          <Typography
            id="city-selector-modal"
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "18px",
                xl: "18px",
              },
              fontWeight: 500,
              marginBottom: 2,
              ml: 2,
            }}
          >
            {isArabic ? "اختر مدينتك" : "Select City"}
          </Typography>
          <RadioGroup
            value={city}
            onChange={handleCityChange}
            sx={{
              width: "100%",
            }}
          >
            {cities.map((cityName) => (
              <FormControlLabel
                key={cityName.city_name}
                value={cityName.city_name}
                control={
                  <Radio
                    sx={{
                      color: "#D92531",
                      "&.Mui-checked": {
                        color: "#D92531",
                      },
                    }}
                  />
                }
                label={isArabic ? cityName.city_name_ar : cityName.city_name}
                sx={{
                  display: "flex",
                  ml: 2,
                  alignItems: "center",
                  padding: "8px 16px",
                  marginBottom: "8px",
                  borderRadius: "8px",
                  backgroundColor:
                    city === cityName.city_name ? "#FAE9EA" : "#F8F8F8",
                  border:
                    city === cityName.city_name
                      ? "2px solid #D92531"
                      : "1px solid #e0e0e0",
                  fontSize: "18px",
                  fontWeight: 400,
                }}
              />
            ))}
          </RadioGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: { lg: "1100px", md: "920px", sm: "664px", xs: "311px" },
            // padding: isMobile ? "24px" : "32px",
            // border:"2px solid black",
          }}
        >
          <Typography
            id="city-selector-modal"
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "18px",
                xl: "18px",
              },
              fontWeight: 500,
              marginBottom: 2,
              ml: 2,
            }}
          >
            {isArabic ? "اختر مدينتك" : "Select City"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "background.paper",
              borderRadius: "8px",
              pl: "20px",
              pr: "20px",
            }}
          >
            <Box
              onClick={() => handleSelection("Home")}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Grid2>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66662 9.33337C10.6151 7.38491 12.7913 5.89202 14.2633 4.98787C15.3361 4.32891 16.6638 4.32891 17.7366 4.98788C19.2086 5.89202 21.3848 7.38491 23.3333 9.33337C27.5578 13.5579 27.3333 16 27.3333 20C27.3333 21.8798 27.1861 23.4651 27.03 24.6176C26.8658 25.8301 25.8082 26.6667 24.5846 26.6667H22.6666C21.1939 26.6667 20 25.4728 20 24V21.3334C20 20.2725 19.5785 19.2551 18.8284 18.5049C18.0782 17.7548 17.0608 17.3334 16 17.3334C14.9391 17.3334 13.9217 17.7548 13.1715 18.5049C12.4214 19.2551 12 20.2725 12 21.3334V24C12 25.4728 10.806 26.6667 9.33329 26.6667H7.41536C6.19171 26.6667 5.13415 25.8301 4.96993 24.6176C4.81385 23.4651 4.66662 21.8798 4.66662 20C4.66662 16 4.44209 13.5579 8.66662 9.33337Z"
                    stroke="#0A0A0C"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Grid2>
              <Typography>Home</Typography>
            </Box>
            <Box
              onClick={() => handleSelection("Work Place")}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Grid2>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6666 16L10.6666 10.6667C10.6666 7.72115 13.0544 5.33334 16 5.33334V5.33334C18.9455 5.33334 21.3333 7.72115 21.3333 10.6667L21.3333 16"
                    stroke="#0A0A0C"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5.02768 15.6678C5.17276 13.9269 5.24529 13.0565 5.81938 12.5282C6.39347 12 7.26693 12 9.01386 12H22.9861C24.7331 12 25.6065 12 26.1806 12.5282C26.7547 13.0565 26.8272 13.9269 26.9723 15.6678L27.8195 25.8339C27.904 26.8474 27.9462 27.3542 27.6491 27.6771C27.352 28 26.8435 28 25.8264 28H6.1736C5.15655 28 4.64802 28 4.35092 27.6771C4.05382 27.3542 4.09605 26.8474 4.18051 25.8339L5.02768 15.6678Z"
                    stroke="#0A0A0C"
                  />
                </svg>
              </Grid2>
              <Typography>Work Place</Typography>
            </Box>
            <Box
              onClick={() => handleSelection("Custom")}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Grid2>
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.5 16C26.5 22.8435 18.8441 27.4086 16.9298 28.4431C16.6606 28.5886 16.3394 28.5886 16.0702 28.4431C14.1559 27.4086 6.5 22.8435 6.5 16C6.5 10 11.3453 6 16.5 6C21.8333 6 26.5 10 26.5 16Z"
                    stroke="#0A0A0C"
                  />
                  <circle cx="16.5" cy="16.0001" r="4.83333" stroke="#0A0A0C" />
                </svg>
              </Grid2>
              <Typography>Custom</Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <TextField
            fullWidth
            placeholder="Custom Label"
            label="Custom Label"
            value={addressType}
            onChange={(e) => setSelectedText(e.target.value)}
            disabled={!isTextFieldEnabled}
            variant="outlined"
            InputProps={{
              sx: {
                '& input[type="text"]': {
                  letterSpacing: "2px",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#444",
                fontWeight: "500",
              },
            }}
            sx={{
              width: { lg: "1100px", md: "920px", sm: "664px", xs: "311px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  // border: "2px solid #ccc",
                },
                "&:hover fieldset": {
                  // border: "2px solid #888",
                },
                "&.Mui-focused fieldset": {
                  // border: "2px solid #FF5722",
                  // boxShadow: "0 0 8px rgba(255, 87, 34, 0.5)",
                },
              },
            }}
          />
        </Box>
        {/* map box */}
        {positionFetching && position && (
          <Box
            sx={{
              // height:"500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "2px solid black",
              width: {
                lg: "1100px",
                md: "920px",
                sm: "664px",
                xs: "311px",
              },
            }}
          >
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "100vh", width: "100%" }}
              whenCreated={(map) => map.flyTo(position)}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              <Marker
                position={position}
                draggable
                eventHandlers={{
                  dragend: handleMarkerDragEnd,
                }}
              />
            </MapContainer>
          </Box>
        )}

        <Box>
          <TextField
            fullWidth
            placeholder="Address"
            label="Address"
            value={address}
            // onChange={(e) => setSelectedText(e.target.value)}
            disabled={true}
            variant="outlined"
            InputProps={{
              sx: {
                '& input[type="text"]': {
                  letterSpacing: "2px",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#444",
                fontWeight: "500",
              },
            }}
            sx={{
              //  width: { xs: "100%", sm: "360px", md: "512px" },
              width: { lg: "1100px", md: "920px", sm: "664px", xs: "311px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  // border: "2px solid #ccc",
                },
                "&:hover fieldset": {
                  // border: "2px solid #888",
                },
                "&.Mui-focused fieldset": {
                  // border: "2px solid #FF5722",
                  // boxShadow: "0 0 8px rgba(255, 87, 34, 0.5)",
                },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            bgcolor: "#F8F8F8",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "none",
            width: "100%",
            height: "50px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#D92531",
              width: { xs: "280px", md: "130px", sm: "130px" },
              borderRadius: { xs: "12px", sm: "16px", md: "16px", lg: "16px" },
              height: "48px",
              boxShadow: "none",
              mb: "2px",
            }}
            onClick={() => handleNavigation()}
          >
            {isArabic ? "التالي" : "Next"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddDeliveryAddress;
