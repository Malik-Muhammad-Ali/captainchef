import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, FormControl, InputLabel, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
// import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Drawer from "@mui/material/Drawer";
import useAppStore from "../../store/store";
import Logo from "../../../public/logocaptainchef.png";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = () => {
  const navigate = useNavigate();
  const { authenticated, language, setLanguage, user } = useAppStore();
  const location = useLocation();
  const [flag, setFlag] = useState("https://flagcdn.com/w40/us.png");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = () => {
    console.log("Logged out!");
  };
  const src = "";

  //   Flag Change
  const handleChange = (event) => {
    setLanguage(event.target.value);
    if (event.target.value === "en") {
      setLanguage("en");
      setFlag("https://flagcdn.com/w40/us.png");
    } else if (event.target.value === "ar") {
      setLanguage("ar");
      setFlag("https://flagcdn.com/w40/sa.png");
    }
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Component
  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        maxWidth: "100vw",
        minHeight: "120px",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-between",
                md: "space-between",
                lg: "start",
                sm: "space-between",
              },
              alignItems: "center",
              width: "100%",
            }}
          >
            <img src={Logo} alt="logo" />
          </Box>

          {/* Display elements on large screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", sm: "none" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "10px", sm: "10px", md: "30px", lg: "30px" },
            }}
          >
            {/* Pages */}
            {/* <Link to="/">
              <Button
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: location.pathname === "/" ? "#CE2729" : "#656565",
                }}
              >
                Home
              </Button>
            </Link> */}

            {/* <Link to="/features">
              <Button
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color:
                    location.pathname === "/features" ? "#CE2729" : "#656565",
                }}
              >
                Features
              </Button>
            </Link> */}

            <Link to="/">
              <Button
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color:
                    location.pathname.startsWith("/subscriptions") ||
                    location.pathname.startsWith("/")
                      ? "#CE2729"
                      : "#656565",
                }}
              >
                {language === 'en' ? 'Subscriptions' : 'الاشتراكات'}
              </Button>
            </Link>

            {/* Language Selector */}
            <FormControl
              sx={{
                minWidth: { xs: "", sm: "", md: "150px", lg: "150px" },
              }}
              variant="outlined"
            >
              <InputLabel
                id="language-select-label"
                sx={{
                  color: "black",
                  display: { xs: "none", md: "flex", sm: "flex" },
                  "&.Mui-focused": {
                    color: "black",
                  },
                }}
              >
                {language === "en" ? "Lang" : "اللغة"}
              </InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                onChange={handleChange}
                label="Lang"
                sx={{
                  borderRadius: "12px",
                  width: "206px",
                  height: "56px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "gray",
                  },
                  color: "black",
                }}
                renderValue={() => (
                  <Box display="flex" alignItems="center" gap={1}>
                    <img src={flag} alt={language} width="20" height="15" />
                    <Typography>
                      {language === "en" ? "English" : "Arabic"}
                    </Typography>
                  </Box>
                )}
              >
                <MenuItem value="en">
                  <Box display="flex" alignItems="center" gap={2}>
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="English"
                      width="20"
                      height="15"
                    />
                    <Typography>{language === 'en' ? 'English' : 'إنجليزي'}</Typography>
                  </Box>
                </MenuItem>
                <MenuItem value="ar">
                  <Box display="flex" alignItems="center" gap={2}>
                    <img
                      src="https://flagcdn.com/w40/sa.png"
                      alt="Arabic"
                      width="20"
                      height="15"
                    />
                    <Typography>{language === 'en' ? 'Arabic' : 'عربي'}</Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>

            {/* Download Button */}
            <Button
              variant="contained"
              sx={{
                background: "#CE2729",
                display: { xs: "", sm: "flex" },
                height: "56px",
                borderRadius: "12px",
                width: { xs: "56px", sm: "40px", md: "130px", lg: "197px" },
                boxShadow: "none",
              }}
              onClick={() => navigate("/downloadapp")}
            >
              {language === 'en' ? 'Download App' : 'تنزيل التطبيق'}
            </Button>

            {/* Account Icon */}
            {authenticated && (
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  onClick={() => setMenuOpen((prev) => !prev)} // Toggles the dropdown
                  sx={{
                    width: "64px", // Box size
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%", // Circular shape
                    cursor: "pointer",
                  }}
                >
                  {/** Check if the image exists */}
                  {src ? (
                    <Avatar
                      alt="Remy Sharp"
                      src="myimg.jpg" // Replace with your dynamic `src` variable
                      sx={{
                        width: "52px", // Slightly larger avatar
                        height: "52px",
                      }}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "2px solid #fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PersonSharpIcon sx={{ fontSize: "28px" }} />{" "}
                      {/* Fallback icon */}
                    </Avatar>
                  )}
                </Box>

                {/* Dropdown */}
                {menuOpen && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "60px",
                      right: 0,
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      padding: "8px",
                      zIndex: 1000,
                    }}
                  >
                    {/* Name and Avatar */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      <svg
                        width="34"
                        height="42"
                        viewBox="0 0 39 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="39" height="42" rx="6" fill="#D9D9D9" />
                        <path
                          d="M30.8817 31.0025L22.6608 27.8187C22.5503 27.776 22.4553 27.7009 22.3882 27.6033C22.3211 27.5057 22.2851 27.3901 22.2848 27.2716L22.2835 25.7843C22.2833 25.6516 22.3138 25.5206 22.3726 25.4015C22.4314 25.2825 22.517 25.1787 22.6225 25.0982C23.7942 24.2063 24.618 22.88 24.8503 21.3613C24.9084 20.9818 25.2035 20.6782 25.5834 20.6224C26.7593 20.45 27.6441 19.4936 27.6441 18.3633C27.6441 17.621 27.29 16.9124 26.722 16.4667C26.441 16.2461 26.3097 15.8756 26.4152 15.5343C26.4468 15.4319 26.4639 15.3232 26.4639 15.2108V10.5179C26.4639 9.39792 25.4739 8.58778 24.5031 8.68587C23.9631 8.74043 23.4748 8.35948 23.3702 7.82686C23.1899 6.90928 22.7337 6 20.959 6H14.793C12.53 6 10.6954 7.83452 10.6954 10.0976V14.5946C10.6947 14.9881 10.8296 15.3699 11.0772 15.6758C11.348 16.011 11.35 16.4902 11.0577 16.8068C10.6687 17.228 10.4193 17.7827 10.4193 18.3711C10.4193 19.5027 11.3095 20.4617 12.4926 20.6256C12.8614 20.6766 13.1548 20.9698 13.2099 21.338C13.4312 22.8178 14.2195 24.1716 15.4292 25.0871C15.646 25.2512 15.7751 25.5059 15.7751 25.7777L15.775 27.2681C15.775 27.5104 15.6585 27.6532 15.5244 27.7443L7.18178 31.0026C5.82145 31.5624 4 33.3239 4 35.9377V41.22C4 41.6508 4.34924 42 4.78005 42H33.2833C33.7141 42 34.0634 41.6508 34.0634 41.22V35.9377C34.0634 33.6867 32.6221 31.7188 30.8817 31.0025Z"
                          fill="#528EAF"
                        />
                        <path
                          d="M18.835 28.0386L18.8351 25.7777C18.8351 25.5059 18.706 25.2512 18.4892 25.0871C17.2795 24.1716 16.4912 22.8178 16.2699 21.338C16.2148 20.9699 15.9213 20.6767 15.5526 20.6256C14.3695 20.4617 13.4793 19.5027 13.4793 18.3711C13.4793 17.7826 13.7287 17.228 14.1177 16.8068C14.41 16.4903 14.408 16.011 14.1372 15.6758C13.8896 15.3699 13.7548 14.9881 13.7554 14.5946V10.0976C13.7553 7.83452 15.5898 6 17.8529 6H14.793C12.53 6 10.6954 7.83452 10.6954 10.0976V14.5946C10.6947 14.9881 10.8296 15.3699 11.0772 15.6758C11.348 16.011 11.35 16.4902 11.0577 16.8068C10.6687 17.228 10.4193 17.7827 10.4193 18.3711C10.4193 19.5027 11.3095 20.4617 12.4926 20.6256C12.8614 20.6766 13.1548 20.9698 13.2099 21.338C13.4312 22.8178 14.2195 24.1716 15.4292 25.0871C15.646 25.2512 15.7751 25.5059 15.7751 25.7777L15.775 27.2681C15.775 27.5104 15.6585 27.6532 15.5244 27.7443L7.18178 31.0026C5.82145 31.5624 4 33.3239 4 35.9377V41.22C4 41.6508 4.34924 42 4.78005 42H7.83998C7.40917 42 7.05993 41.6508 7.05993 41.22V35.9377C7.05993 33.3239 8.88144 32.7797 10.2417 32.2199L17.5406 29.3693C18.7749 28.8872 18.833 28.1417 18.835 28.0386Z"
                          fill="#477B9E"
                        />
                        <path
                          d="M9.21733 41.9999V35.8313C9.21733 35.76 9.20328 35.6893 9.17598 35.6234C9.14868 35.5575 9.10866 35.4976 9.05822 35.4472C9.00777 35.3968 8.94789 35.3567 8.88198 35.3294C8.81607 35.3021 8.74543 35.2881 8.67409 35.2881C8.60276 35.2881 8.53212 35.3021 8.46621 35.3294C8.4003 35.3567 8.34041 35.3968 8.28997 35.4472C8.23953 35.4976 8.19951 35.5575 8.17221 35.6234C8.14491 35.6893 8.13086 35.76 8.13086 35.8313V41.9999H9.21733ZM29.9322 35.8313C29.9322 35.6872 29.875 35.5491 29.7731 35.4472C29.6712 35.3453 29.5331 35.2881 29.389 35.2881C29.2449 35.2881 29.1068 35.3453 29.0049 35.4472C28.903 35.5491 28.8458 35.6872 28.8458 35.8313V41.9999H29.9323V35.8313H29.9322Z"
                          fill="#477B9E"
                        />
                      </svg>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "black",
                          ml: "10px",
                        }}
                      >
                        {user?.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                      onClick={handleLogout} // Add your logout function here
                    >
                      <svg
                        width="30"
                        height="25"
                        viewBox="0 0 30 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.07936 20.0176C9.04955 23.5681 12.625 26.3635 16.7059 28.3416C18.2596 29.0779 20.3375 29.9515 22.6525 30.1012C22.796 30.1075 22.9333 30.1137 23.0768 30.1137C24.6306 30.1137 25.8785 29.5771 26.8956 28.4726C26.9019 28.4664 26.9144 28.4539 26.9206 28.4414C27.2825 28.0046 27.6944 27.6115 28.1249 27.1935C28.4182 26.9127 28.7177 26.6194 29.0047 26.3199C30.3338 24.9346 30.3338 23.175 28.9922 21.8334L25.2421 18.0832C24.6056 17.4218 23.8443 17.0723 23.0456 17.0723C22.2469 17.0723 21.4794 17.4218 20.8242 18.077L18.5903 20.3109C18.3844 20.1923 18.1723 20.0862 17.9726 19.9864C17.723 19.8616 17.4921 19.743 17.2862 19.612C15.252 18.3203 13.405 16.6356 11.6391 14.4703C10.7468 13.3409 10.1478 12.3924 9.7297 11.4252C10.3163 10.8949 10.8654 10.3395 11.3958 9.79663C11.5829 9.60319 11.7764 9.40976 11.9698 9.21632C12.6437 8.54241 13.0056 7.76243 13.0056 6.96996C13.0056 6.17749 12.65 5.39751 11.9698 4.7236L10.1103 2.86411C9.89194 2.64571 9.68602 2.43356 9.47387 2.21516C9.06203 1.79085 8.63148 1.35406 8.20717 0.960943C7.56446 0.330714 6.80943 0 6.01073 0C5.21826 0 4.45699 0.330714 3.78932 0.967183L1.4556 3.3009C0.606979 4.14953 0.126507 5.17911 0.0266688 6.37093C-0.0918892 7.86226 0.182666 9.4472 0.894014 11.3628C1.986 14.3268 3.63333 17.0786 6.07936 20.0176ZM1.5492 6.50197C1.62408 5.67206 1.94232 4.97943 2.54135 4.3804L4.86259 2.05916C5.2245 1.70973 5.62385 1.52877 6.01073 1.52877C6.39136 1.52877 6.77823 1.70973 7.13391 2.07164C7.55198 2.45852 7.94509 2.86411 8.36941 3.29466C8.58156 3.51306 8.79996 3.73146 9.01835 3.95609L10.8778 5.81558C11.2647 6.20245 11.4644 6.59557 11.4644 6.98244C11.4644 7.36931 11.2647 7.76243 10.8778 8.1493C10.6844 8.34274 10.491 8.54241 10.2975 8.73585C9.71722 9.3224 9.17435 9.87775 8.57532 10.4081L8.54412 10.4393C8.02621 10.9573 8.10733 11.4502 8.23213 11.8246C8.23837 11.8433 8.24461 11.8558 8.25085 11.8745C8.73132 13.0289 9.39899 14.1271 10.441 15.4375C12.313 17.7463 14.2848 19.5371 16.4563 20.9161C16.7246 21.0908 17.0117 21.2281 17.28 21.3654C17.5296 21.4902 17.7604 21.6087 17.9664 21.7398C17.9913 21.7523 18.01 21.7647 18.035 21.7772C18.2409 21.8833 18.4406 21.9332 18.6403 21.9332C19.1395 21.9332 19.4639 21.615 19.57 21.5089L21.9037 19.1752C22.2656 18.8133 22.6588 18.6198 23.0456 18.6198C23.5199 18.6198 23.9067 18.9131 24.1501 19.1752L27.9127 22.9316C28.6615 23.6804 28.6553 24.4916 27.894 25.284C27.632 25.5648 27.3574 25.8332 27.0641 26.114C26.6273 26.5383 26.1718 26.9751 25.76 27.468C25.0424 28.2418 24.1875 28.6037 23.0831 28.6037C22.977 28.6037 22.8647 28.5974 22.7586 28.5912C20.7119 28.4601 18.8087 27.6614 17.3798 26.9813C13.4986 25.1031 10.0916 22.4387 7.26494 19.0566C4.93746 16.2549 3.37125 13.6466 2.33543 10.8512C1.69272 9.1352 1.44936 7.75619 1.5492 6.50197Z"
                          fill="black"
                        />
                      </svg>{" "}
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "500",
                          ml: "10px",
                        }}
                      >
                        {user?.mobile}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                      onClick={handleLogout} // Add your logout function here
                    >
                      <svg
                        width="30"
                        height="25"
                        viewBox="0 0 39 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.7318 15.9707C28.14 15.9707 25.2173 18.8934 25.2173 22.4852C25.2173 26.077 28.1391 28.9997 31.7318 28.9997C32.5404 28.9997 32.5572 27.7388 31.7318 27.7388C28.8351 27.7388 26.4782 25.3818 26.4782 22.4852C26.4782 19.5886 28.8351 17.2316 31.7318 17.2316C34.6284 17.2316 36.9854 19.5886 36.9854 22.4852V24.1664C36.9745 24.4378 36.8591 24.6944 36.6632 24.8826C36.4674 25.0708 36.2063 25.1759 35.9347 25.1759C35.6631 25.1759 35.402 25.0708 35.2061 24.8826C35.0103 24.6944 34.8948 24.4378 34.8839 24.1664V19.9635C34.8839 19.1481 33.6231 19.1456 33.6231 19.9803C33.0807 19.563 32.4161 19.3356 31.7318 19.333C29.9943 19.333 28.5796 20.7477 28.5796 22.4852C28.5796 24.2227 29.9943 25.6374 31.7318 25.6374C32.5026 25.6374 33.2011 25.3482 33.7492 24.8867C33.8997 25.3482 34.192 25.7504 34.5844 26.0361C34.9768 26.3218 35.4493 26.4764 35.9347 26.4779C36.5475 26.4773 37.1351 26.2335 37.5685 25.8002C38.0018 25.3668 38.2456 24.7792 38.2463 24.1664V22.4852C38.2463 18.8934 35.3236 15.9707 31.7318 15.9707ZM31.7318 24.3765C30.6895 24.3765 29.8405 23.5275 29.8405 22.4852C29.8405 21.4429 30.6895 20.5939 31.7318 20.5939C32.7741 20.5939 33.6231 21.4429 33.6231 22.4852C33.6231 23.5275 32.7741 24.3765 31.7318 24.3765Z"
                          fill="black"
                        />
                        <path
                          d="M23.3261 21.8551H3.99275C3.41191 21.8551 2.87478 21.6701 2.43096 21.3591L12.4179 12.9727L15.1657 14.8833C16.4972 15.8088 18.3532 15.7936 19.7183 14.8833L22.4653 12.9735L26.3244 16.2181C26.9196 16.7183 27.777 15.792 27.1356 15.2523L23.5379 12.2279L33.6232 5.2158V14.4655C33.6232 15.27 34.884 15.2893 34.884 14.4664V3.99275C34.884 1.79043 33.0936 0 30.8913 0H3.99275C1.79043 0 0 1.79043 0 3.99275V19.1232C0 21.3255 1.79043 23.1159 3.99275 23.1159H23.3261C24.1112 23.1159 24.1515 21.8551 23.3261 21.8551ZM3.99275 1.26087H30.8913C32.2976 1.26087 33.445 2.33261 33.5938 3.70023L18.9996 13.8477C18.5417 14.1638 17.9984 14.3331 17.442 14.3331C16.8856 14.3331 16.3424 14.1638 15.8844 13.8477L1.29029 3.70023C1.43907 2.33261 2.58646 1.26087 3.99275 1.26087ZM1.26087 19.1232V5.2158L11.3453 12.2271L1.59878 20.4118C1.38015 20.0173 1.26396 19.5742 1.26087 19.1232Z"
                          fill="black"
                        />
                      </svg>{" "}
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "500",
                          ml: "10px",
                        }}
                      >
                        {user?.email}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                      onClick={handleLogout} // Add your logout function here
                    >
                      <svg
                        width="30"
                        height="29"
                        viewBox="0 0 30 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.2603 8.06522L19.3074 7.34551L17.0924 2.85747C16.2369 1.12386 13.763 1.12439 12.9078 2.85741L10.6927 7.34545L5.73987 8.06522C3.82662 8.34319 3.06291 10.696 4.44677 12.0451L8.03071 15.5385L7.18468 20.4713C6.8579 22.3768 8.8594 23.8301 10.5702 22.931L15.0001 20.6019L19.4302 22.931C21.1385 23.8291 23.1424 22.3765 22.8157 20.4713L21.9696 15.5385L25.5536 12.045C26.9377 10.6955 26.1727 8.34313 24.2603 8.06522ZM24.1574 10.6129L20.197 14.4733C20.0809 14.5865 19.9941 14.7262 19.944 14.8804C19.8939 15.0346 19.882 15.1986 19.9094 15.3584L20.8443 20.8095C20.8913 21.0832 20.6064 21.2899 20.3607 21.1608L15.4654 18.5872C15.3219 18.5118 15.1622 18.4724 15 18.4724C14.8379 18.4724 14.6782 18.5118 14.5347 18.5872L9.6394 21.1608C9.39354 21.29 9.10884 21.0831 9.15577 20.8095L10.0907 15.3584C10.1181 15.1986 10.1062 15.0346 10.0561 14.8804C10.006 14.7262 9.9192 14.5865 9.80311 14.4733L5.84271 10.6129C5.64378 10.419 5.75259 10.0844 6.02745 10.0443L11.5006 9.24904C11.661 9.22573 11.8134 9.16377 11.9445 9.06848C12.0757 8.97319 12.1817 8.84745 12.2535 8.70207L14.7012 3.74253C14.8241 3.49362 15.176 3.49345 15.299 3.74259L17.7467 8.70207C17.8184 8.84745 17.9244 8.9732 18.0556 9.06849C18.1868 9.16378 18.3391 9.22574 18.4996 9.24904L23.9727 10.0443C24.2475 10.0844 24.3563 10.4191 24.1574 10.6129ZM7.89442 2.05831L6.69847 0.412239C6.37374 -0.0344789 5.74843 -0.133619 5.30171 0.191107C4.85493 0.515716 4.75585 1.14109 5.08052 1.58786L6.27648 3.23388C6.60132 3.68083 7.22663 3.77956 7.67323 3.45501C8.12001 3.13046 8.21909 2.50509 7.89442 2.05831ZM3.92564 16.8096C3.75507 16.2844 3.19093 15.9967 2.66558 16.1676L0.69121 16.8091C0.165976 16.9798 -0.121426 17.5439 0.0491991 18.0691C0.220117 18.5953 0.785194 18.8817 1.30926 18.7112L3.28363 18.0696C3.80892 17.8989 4.09632 17.3348 3.92564 16.8096ZM24.6984 0.191165C24.2517 -0.133444 23.6263 -0.0344789 23.3016 0.412298L22.1057 2.05831C21.781 2.50509 21.8801 3.13052 22.3269 3.45507C22.7738 3.77979 23.3991 3.68054 23.7236 3.23393L24.9196 1.58792C25.2442 1.14114 25.1452 0.515716 24.6984 0.191165ZM29.3088 16.8091L27.3344 16.1676C26.8092 15.9966 26.245 16.2843 26.0743 16.8096C25.9037 17.3348 26.1911 17.899 26.7164 18.0696L28.6907 18.7112C29.2148 18.8816 29.7799 18.5952 29.9508 18.0691C30.1215 17.5439 29.834 16.9798 29.3088 16.8091ZM15 24.5614C14.4478 24.5614 14.0001 25.0091 14.0001 25.5613V27.5909C14.0001 28.1432 14.4478 28.5909 15 28.5909C15.5523 28.5909 16 28.1432 16 27.5909V25.5613C16 25.009 15.5523 24.5614 15 24.5614Z"
                          fill="black"
                        />
                      </svg>
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "500",
                          ml: "10px",
                        }}
                      >
                        {user?.loyalty_point}
                      </Typography>
                    </Box>

                    {/* Balance/Wallet */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      <svg
                        width="30"
                        height="25"
                        viewBox="0 0 30 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.6249 7.36719H4.375C1.96247 7.36719 0 9.32966 0 11.7421V24.242C0 26.6545 1.96247 28.617 4.375 28.617H25.6249C28.0374 28.617 29.9999 26.6546 29.9999 24.242V11.7421C29.9999 9.32966 28.0374 7.36719 25.6249 7.36719ZM28.7499 24.2421C28.7499 25.9646 27.3486 27.3671 25.6249 27.3671H4.375C2.65124 27.3671 1.25003 25.9646 1.25003 24.2421V11.7421C1.25003 10.0197 2.6513 8.61716 4.375 8.61716H25.6249C27.3487 8.61716 28.7499 10.0197 28.7499 11.7421V24.2421Z"
                          fill="black"
                        />
                        <path
                          d="M24.375 16.1172C23.3412 16.1172 22.5 16.9584 22.5 17.9922C22.5 19.0259 23.3412 19.8672 24.375 19.8672C25.4088 19.8672 26.25 19.0259 26.25 17.9922C26.25 16.9584 25.4088 16.1172 24.375 16.1172ZM24.375 18.6172C24.0312 18.6172 23.75 18.3372 23.75 17.9922C23.75 17.6472 24.0312 17.3672 24.375 17.3672C24.7188 17.3672 25 17.6472 25 17.9922C25 18.3372 24.7188 18.6172 24.375 18.6172Z"
                          fill="black"
                        />
                        <path
                          d="M29.3752 13.6171H24.3753C21.9628 13.6171 20.0003 15.5795 20.0003 17.9921C20.0003 20.4045 21.9627 22.3671 24.3753 22.3671H29.3752C29.7202 22.3671 30.0002 22.087 30.0002 21.742V14.2421C30.0002 13.8971 29.7202 13.6171 29.3752 13.6171ZM28.7503 21.117H24.3753C22.6515 21.117 21.2503 19.7145 21.2503 17.9921C21.2503 16.2696 22.6516 14.8671 24.3753 14.8671H28.7503V21.117ZM25.559 7.71212L22.9128 2.41961C22.379 1.35209 21.4578 0.565887 20.3203 0.205889C19.1828 -0.152879 17.9778 -0.0403795 16.9253 0.524637L4.07913 7.44212C3.77538 7.6046 3.66165 7.98464 3.82536 8.28839C3.98913 8.59214 4.3691 8.70587 4.67162 8.54216L17.5203 1.62713C18.2703 1.22213 19.134 1.14086 19.944 1.39838C20.7565 1.65461 21.414 2.21711 21.7953 2.97965L24.4415 8.2721C24.4935 8.37579 24.5732 8.46298 24.6719 8.52391C24.7706 8.58484 24.8843 8.61711 25.0003 8.6171C25.094 8.6171 25.189 8.59583 25.279 8.55083C25.5877 8.39585 25.7128 8.02085 25.559 7.71212Z"
                          fill="black"
                        />
                        <path
                          d="M23.0511 2.69696C22.8861 2.39198 22.5062 2.27948 22.2036 2.44196L12.9175 7.44192C12.6137 7.60569 12.5 7.98444 12.6637 8.28818C12.7762 8.49818 12.9912 8.61695 13.2137 8.61695C13.3137 8.61695 13.4162 8.59322 13.5112 8.54318L22.7974 3.54323C23.1011 3.37946 23.2149 3.00071 23.0511 2.69696ZM11.2499 3.617H6.87495C3.085 3.617 0 6.70071 0 10.4919V11.7419C0 12.0869 0.280018 12.3669 0.625016 12.3669C0.970015 12.3669 1.25003 12.0869 1.25003 11.7419V10.4919C1.25003 7.39071 3.77377 4.86697 6.87501 4.86697H11.2499C11.5949 4.86697 11.875 4.58695 11.875 4.24195C11.875 3.89696 11.5949 3.617 11.2499 3.617ZM23.1249 3.617C22.7799 3.617 22.4999 3.89701 22.4999 4.24201C22.4999 4.58701 22.7799 4.86703 23.1249 4.86703C26.2261 4.86703 28.7499 7.39077 28.7499 10.492V11.742C28.7499 12.087 29.0299 12.367 29.3749 12.367C29.7199 12.367 29.9999 12.087 29.9999 11.742V10.492C29.9999 6.70071 26.9148 3.617 23.1249 3.617Z"
                          fill="black"
                        />
                      </svg>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "black",
                          ml: "10px",
                        }}
                      >
                        {user?.wallet_balance}
                      </Typography>
                    </Box>

                    {/* Logout */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                      onClick={handleLogout} // Add your logout function here
                    >
                      <LogoutIcon sx={{ color: "red", marginRight: "8px" }} />
                      <Typography
                        sx={{
                          color: "red",
                          fontSize: "16px",
                          fontWeight: "500",
                          ml: "10px",
                        }}
                      >
                        Logout
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            )}

            {authenticated && (
              <Box
                onClick={() => navigate("/cart")}
                sx={{
                  width: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20%",
                  backgroundColor: "grey",
                  cursor: "pointer",
                }}
              >
                <ShoppingCart sx={{ color: "white" }} />
              </Box>
            )}
          </Box>

          {/* Download Button */}
          <Button
            variant="contained"
            sx={{
              background: "#CE2729",
              display: { xs: "none", sm: "flex", md: "none", lg: "none" },
              height: "56px",
              borderRadius: "12px",
              width: { xs: "206px", sm: "206px", md: "206px", lg: "206px" },
            }}
            onClick={() => navigate("/downloadapp")}
          >
            Download App
          </Button>

          {/* Menu Icon for Small Screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", sm: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
              color="inherit"
              sx={{
                backgroundColor: "black",
                borderRadius: "20%",
                padding: "8px",
                border: "2px solid white",
                ml: "10px",
              }}
            >
              <MenuIcon sx={{ color: "white" }} />{" "}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{
            minWidth: 250,
            maxWidth: 280,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            direction: language === "ar" ? "rtl" : "ltr", // Adjust direction based on language
            gap: 2,
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
            {authenticated && (
              <Box
                onClick={() => setMenuOpen((prev) => !prev)} // Toggles the dropdown
                sx={{
                  width: "64px", // Box size
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%", // Circular shape
                  cursor: "pointer",
                }}
              >
                {/** Check if the image exists */}
                {src ? (
                  <Avatar
                    alt="Remy Sharp"
                    src="/myimg.jpg" // Replace with your dynamic `src` variable
                    sx={{
                      width: "52px", // Slightly larger avatar
                      height: "52px",
                    }}
                  />
                ) : (
                  <Avatar
                    sx={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: "#fff", // White background
                      color: "#000", // Icon color
                      border: "2px solid #fff", // White outline
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PersonSharpIcon sx={{ fontSize: "28px" }} />{" "}
                    {/* Fallback icon */}
                  </Avatar>
                )}
              </Box>
            )}

            {authenticated && (
              <Box
                onClick={() => navigate("/cart")}
                sx={{
                  width: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20%",
                  backgroundColor: "grey",
                  cursor: "pointer",
                }}
              >
                <ShoppingCart sx={{ color: "white" }} />
              </Box>
            )}
          </Box>
          <Link to="/">
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: location.pathname === "/" ? "#CE2729" : "#656565",
                marginBottom: "-15px",
              }}
              onClick={() => toggleDrawer()}
            >
              {language === "en" ? "Home" : "الرئيسية"}
            </Button>
          </Link>
          <Link to="/features">
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color:
                  location.pathname === "/features" ? "#CE2729" : "#656565",
                marginBottom: "-15px",
              }}
              onClick={() => toggleDrawer()}
            >
              {language === "en" ? "Features" : "الميزات"}
            </Button>
          </Link>
          <Link to="/subscriptions">
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color:
                  location.pathname === "/subscriptions"
                    ? "#CE2729"
                    : "#656565",
                marginBottom: "-15px",
              }}
              onClick={() => toggleDrawer()}
            >
              {language === "en" ? "Subscriptions" : "الاشتراكات"}
            </Button>
          </Link>
          <FormControl
            sx={{
              minWidth: "150px",
            }}
            variant="outlined"
          >
            <InputLabel
              id="language-select-label"
              sx={{
                color: "black",
                left: language === "ar" ? "50px" : "auto", // Align to the right for Arabic

                direction: language === "ar" ? "rtl" : "ltr",

                "&.Mui-focused": {
                  color: "black",
                },
              }}
            >
              {language === "en" ? "Lang" : "اللغة"}
            </InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              onChange={handleChange}
              label="Lang"
              sx={{
                borderRadius: "12px",
                width: "206px",
                height: "56px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "gray",
                },
                color: "black",
              }}
              renderValue={() => (
                <Box display="flex" alignItems="center" gap={1}>
                  <img src={flag} alt={language} width="20" height="15" />
                  <Typography>
                    {language === "en" ? "English" : "العربية"}
                  </Typography>
                </Box>
              )}
            >
              <MenuItem value="en">
                <Box display="flex" alignItems="center" gap={2}>
                  <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="English"
                    width="20"
                    height="15"
                  />
                  <Typography>English</Typography>
                </Box>
              </MenuItem>
              <MenuItem value="ar">
                <Box display="flex" alignItems="center" gap={2}>
                  <img
                    src="https://flagcdn.com/w40/sa.png"
                    alt="Arabic"
                    width="20"
                    height="15"
                  />
                  <Typography>Arabic</Typography>
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={() => navigate("/downloadapp")}
            variant="contained"
            sx={{
              background: "#CE2729",
              display: { xs: "flex", sm: "none", md: "flex", lg: "flex" },
              height: "56px",
              borderRadius: "12px",
              width: "206px",
              boxShadow: "none",
            }}
          >
            {language === "en" ? "Download App" : "تحميل التطبيق"}
          </Button>
          <Box
            sx={{
              flexGrow: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <svg
              width="30"
              height="42"
              viewBox="0 0 39 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="39" height="42" rx="6" fill="#D9D9D9" />
              <path
                d="M30.8817 31.0025L22.6608 27.8187C22.5503 27.776 22.4553 27.7009 22.3882 27.6033C22.3211 27.5057 22.2851 27.3901 22.2848 27.2716L22.2835 25.7843C22.2833 25.6516 22.3138 25.5206 22.3726 25.4015C22.4314 25.2825 22.517 25.1787 22.6225 25.0982C23.7942 24.2063 24.618 22.88 24.8503 21.3613C24.9084 20.9818 25.2035 20.6782 25.5834 20.6224C26.7593 20.45 27.6441 19.4936 27.6441 18.3633C27.6441 17.621 27.29 16.9124 26.722 16.4667C26.441 16.2461 26.3097 15.8756 26.4152 15.5343C26.4468 15.4319 26.4639 15.3232 26.4639 15.2108V10.5179C26.4639 9.39792 25.4739 8.58778 24.5031 8.68587C23.9631 8.74043 23.4748 8.35948 23.3702 7.82686C23.1899 6.90928 22.7337 6 20.959 6H14.793C12.53 6 10.6954 7.83452 10.6954 10.0976V14.5946C10.6947 14.9881 10.8296 15.3699 11.0772 15.6758C11.348 16.011 11.35 16.4902 11.0577 16.8068C10.6687 17.228 10.4193 17.7827 10.4193 18.3711C10.4193 19.5027 11.3095 20.4617 12.4926 20.6256C12.8614 20.6766 13.1548 20.9698 13.2099 21.338C13.4312 22.8178 14.2195 24.1716 15.4292 25.0871C15.646 25.2512 15.7751 25.5059 15.7751 25.7777L15.775 27.2681C15.775 27.5104 15.6585 27.6532 15.5244 27.7443L7.18178 31.0026C5.82145 31.5624 4 33.3239 4 35.9377V41.22C4 41.6508 4.34924 42 4.78005 42H33.2833C33.7141 42 34.0634 41.6508 34.0634 41.22V35.9377C34.0634 33.6867 32.6221 31.7188 30.8817 31.0025Z"
                fill="#528EAF"
              />
              <path
                d="M18.835 28.0386L18.8351 25.7777C18.8351 25.5059 18.706 25.2512 18.4892 25.0871C17.2795 24.1716 16.4912 22.8178 16.2699 21.338C16.2148 20.9699 15.9213 20.6767 15.5526 20.6256C14.3695 20.4617 13.4793 19.5027 13.4793 18.3711C13.4793 17.7826 13.7287 17.228 14.1177 16.8068C14.41 16.4903 14.408 16.011 14.1372 15.6758C13.8896 15.3699 13.7548 14.9881 13.7554 14.5946V10.0976C13.7553 7.83452 15.5898 6 17.8529 6H14.793C12.53 6 10.6954 7.83452 10.6954 10.0976V14.5946C10.6947 14.9881 10.8296 15.3699 11.0772 15.6758C11.348 16.011 11.35 16.4902 11.0577 16.8068C10.6687 17.228 10.4193 17.7827 10.4193 18.3711C10.4193 19.5027 11.3095 20.4617 12.4926 20.6256C12.8614 20.6766 13.1548 20.9698 13.2099 21.338C13.4312 22.8178 14.2195 24.1716 15.4292 25.0871C15.646 25.2512 15.7751 25.5059 15.7751 25.7777L15.775 27.2681C15.775 27.5104 15.6585 27.6532 15.5244 27.7443L7.18178 31.0026C5.82145 31.5624 4 33.3239 4 35.9377V41.22C4 41.6508 4.34924 42 4.78005 42H7.83998C7.40917 42 7.05993 41.6508 7.05993 41.22V35.9377C7.05993 33.3239 8.88144 32.7797 10.2417 32.2199L17.5406 29.3693C18.7749 28.8872 18.833 28.1417 18.835 28.0386Z"
                fill="#477B9E"
              />
              <path
                d="M9.21733 41.9999V35.8313C9.21733 35.76 9.20328 35.6893 9.17598 35.6234C9.14868 35.5575 9.10866 35.4976 9.05822 35.4472C9.00777 35.3968 8.94789 35.3567 8.88198 35.3294C8.81607 35.3021 8.74543 35.2881 8.67409 35.2881C8.60276 35.2881 8.53212 35.3021 8.46621 35.3294C8.4003 35.3567 8.34041 35.3968 8.28997 35.4472C8.23953 35.4976 8.19951 35.5575 8.17221 35.6234C8.14491 35.6893 8.13086 35.76 8.13086 35.8313V41.9999H9.21733ZM29.9322 35.8313C29.9322 35.6872 29.875 35.5491 29.7731 35.4472C29.6712 35.3453 29.5331 35.2881 29.389 35.2881C29.2449 35.2881 29.1068 35.3453 29.0049 35.4472C28.903 35.5491 28.8458 35.6872 28.8458 35.8313V41.9999H29.9323V35.8313H29.9322Z"
                fill="#477B9E"
              />
            </svg>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
                ml: "5px",
              }}
            >
              {user?.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            onClick={handleLogout} // Add your logout function here
          >
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.07936 20.0176C9.04955 23.5681 12.625 26.3635 16.7059 28.3416C18.2596 29.0779 20.3375 29.9515 22.6525 30.1012C22.796 30.1075 22.9333 30.1137 23.0768 30.1137C24.6306 30.1137 25.8785 29.5771 26.8956 28.4726C26.9019 28.4664 26.9144 28.4539 26.9206 28.4414C27.2825 28.0046 27.6944 27.6115 28.1249 27.1935C28.4182 26.9127 28.7177 26.6194 29.0047 26.3199C30.3338 24.9346 30.3338 23.175 28.9922 21.8334L25.2421 18.0832C24.6056 17.4218 23.8443 17.0723 23.0456 17.0723C22.2469 17.0723 21.4794 17.4218 20.8242 18.077L18.5903 20.3109C18.3844 20.1923 18.1723 20.0862 17.9726 19.9864C17.723 19.8616 17.4921 19.743 17.2862 19.612C15.252 18.3203 13.405 16.6356 11.6391 14.4703C10.7468 13.3409 10.1478 12.3924 9.7297 11.4252C10.3163 10.8949 10.8654 10.3395 11.3958 9.79663C11.5829 9.60319 11.7764 9.40976 11.9698 9.21632C12.6437 8.54241 13.0056 7.76243 13.0056 6.96996C13.0056 6.17749 12.65 5.39751 11.9698 4.7236L10.1103 2.86411C9.89194 2.64571 9.68602 2.43356 9.47387 2.21516C9.06203 1.79085 8.63148 1.35406 8.20717 0.960943C7.56446 0.330714 6.80943 0 6.01073 0C5.21826 0 4.45699 0.330714 3.78932 0.967183L1.4556 3.3009C0.606979 4.14953 0.126507 5.17911 0.0266688 6.37093C-0.0918892 7.86226 0.182666 9.4472 0.894014 11.3628C1.986 14.3268 3.63333 17.0786 6.07936 20.0176ZM1.5492 6.50197C1.62408 5.67206 1.94232 4.97943 2.54135 4.3804L4.86259 2.05916C5.2245 1.70973 5.62385 1.52877 6.01073 1.52877C6.39136 1.52877 6.77823 1.70973 7.13391 2.07164C7.55198 2.45852 7.94509 2.86411 8.36941 3.29466C8.58156 3.51306 8.79996 3.73146 9.01835 3.95609L10.8778 5.81558C11.2647 6.20245 11.4644 6.59557 11.4644 6.98244C11.4644 7.36931 11.2647 7.76243 10.8778 8.1493C10.6844 8.34274 10.491 8.54241 10.2975 8.73585C9.71722 9.3224 9.17435 9.87775 8.57532 10.4081L8.54412 10.4393C8.02621 10.9573 8.10733 11.4502 8.23213 11.8246C8.23837 11.8433 8.24461 11.8558 8.25085 11.8745C8.73132 13.0289 9.39899 14.1271 10.441 15.4375C12.313 17.7463 14.2848 19.5371 16.4563 20.9161C16.7246 21.0908 17.0117 21.2281 17.28 21.3654C17.5296 21.4902 17.7604 21.6087 17.9664 21.7398C17.9913 21.7523 18.01 21.7647 18.035 21.7772C18.2409 21.8833 18.4406 21.9332 18.6403 21.9332C19.1395 21.9332 19.4639 21.615 19.57 21.5089L21.9037 19.1752C22.2656 18.8133 22.6588 18.6198 23.0456 18.6198C23.5199 18.6198 23.9067 18.9131 24.1501 19.1752L27.9127 22.9316C28.6615 23.6804 28.6553 24.4916 27.894 25.284C27.632 25.5648 27.3574 25.8332 27.0641 26.114C26.6273 26.5383 26.1718 26.9751 25.76 27.468C25.0424 28.2418 24.1875 28.6037 23.0831 28.6037C22.977 28.6037 22.8647 28.5974 22.7586 28.5912C20.7119 28.4601 18.8087 27.6614 17.3798 26.9813C13.4986 25.1031 10.0916 22.4387 7.26494 19.0566C4.93746 16.2549 3.37125 13.6466 2.33543 10.8512C1.69272 9.1352 1.44936 7.75619 1.5492 6.50197Z"
                fill="black"
              />
            </svg>

            <Typography
              sx={{
                color: "black",
                fontSize: "16px",
                fontWeight: "500",
                ml: "5px",
              }}
            >
              {user?.mobile}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            onClick={handleLogout} // Add your logout function here
          >
            <svg
              width="30"
              height="25"
              viewBox="0 0 39 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7318 15.9707C28.14 15.9707 25.2173 18.8934 25.2173 22.4852C25.2173 26.077 28.1391 28.9997 31.7318 28.9997C32.5404 28.9997 32.5572 27.7388 31.7318 27.7388C28.8351 27.7388 26.4782 25.3818 26.4782 22.4852C26.4782 19.5886 28.8351 17.2316 31.7318 17.2316C34.6284 17.2316 36.9854 19.5886 36.9854 22.4852V24.1664C36.9745 24.4378 36.8591 24.6944 36.6632 24.8826C36.4674 25.0708 36.2063 25.1759 35.9347 25.1759C35.6631 25.1759 35.402 25.0708 35.2061 24.8826C35.0103 24.6944 34.8948 24.4378 34.8839 24.1664V19.9635C34.8839 19.1481 33.6231 19.1456 33.6231 19.9803C33.0807 19.563 32.4161 19.3356 31.7318 19.333C29.9943 19.333 28.5796 20.7477 28.5796 22.4852C28.5796 24.2227 29.9943 25.6374 31.7318 25.6374C32.5026 25.6374 33.2011 25.3482 33.7492 24.8867C33.8997 25.3482 34.192 25.7504 34.5844 26.0361C34.9768 26.3218 35.4493 26.4764 35.9347 26.4779C36.5475 26.4773 37.1351 26.2335 37.5685 25.8002C38.0018 25.3668 38.2456 24.7792 38.2463 24.1664V22.4852C38.2463 18.8934 35.3236 15.9707 31.7318 15.9707ZM31.7318 24.3765C30.6895 24.3765 29.8405 23.5275 29.8405 22.4852C29.8405 21.4429 30.6895 20.5939 31.7318 20.5939C32.7741 20.5939 33.6231 21.4429 33.6231 22.4852C33.6231 23.5275 32.7741 24.3765 31.7318 24.3765Z"
                fill="black"
              />
              <path
                d="M23.3261 21.8551H3.99275C3.41191 21.8551 2.87478 21.6701 2.43096 21.3591L12.4179 12.9727L15.1657 14.8833C16.4972 15.8088 18.3532 15.7936 19.7183 14.8833L22.4653 12.9735L26.3244 16.2181C26.9196 16.7183 27.777 15.792 27.1356 15.2523L23.5379 12.2279L33.6232 5.2158V14.4655C33.6232 15.27 34.884 15.2893 34.884 14.4664V3.99275C34.884 1.79043 33.0936 0 30.8913 0H3.99275C1.79043 0 0 1.79043 0 3.99275V19.1232C0 21.3255 1.79043 23.1159 3.99275 23.1159H23.3261C24.1112 23.1159 24.1515 21.8551 23.3261 21.8551ZM3.99275 1.26087H30.8913C32.2976 1.26087 33.445 2.33261 33.5938 3.70023L18.9996 13.8477C18.5417 14.1638 17.9984 14.3331 17.442 14.3331C16.8856 14.3331 16.3424 14.1638 15.8844 13.8477L1.29029 3.70023C1.43907 2.33261 2.58646 1.26087 3.99275 1.26087ZM1.26087 19.1232V5.2158L11.3453 12.2271L1.59878 20.4118C1.38015 20.0173 1.26396 19.5742 1.26087 19.1232Z"
                fill="black"
              />
            </svg>

            <Typography
              sx={{
                color: "black",
                fontSize: "16px",
                ml: "5px",

                fontWeight: "500",
              }}
            >
              {user?.email}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            onClick={handleLogout} // Add your logout function here
          >
            <svg
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.2603 8.06522L19.3074 7.34551L17.0924 2.85747C16.2369 1.12386 13.763 1.12439 12.9078 2.85741L10.6927 7.34545L5.73987 8.06522C3.82662 8.34319 3.06291 10.696 4.44677 12.0451L8.03071 15.5385L7.18468 20.4713C6.8579 22.3768 8.8594 23.8301 10.5702 22.931L15.0001 20.6019L19.4302 22.931C21.1385 23.8291 23.1424 22.3765 22.8157 20.4713L21.9696 15.5385L25.5536 12.045C26.9377 10.6955 26.1727 8.34313 24.2603 8.06522ZM24.1574 10.6129L20.197 14.4733C20.0809 14.5865 19.9941 14.7262 19.944 14.8804C19.8939 15.0346 19.882 15.1986 19.9094 15.3584L20.8443 20.8095C20.8913 21.0832 20.6064 21.2899 20.3607 21.1608L15.4654 18.5872C15.3219 18.5118 15.1622 18.4724 15 18.4724C14.8379 18.4724 14.6782 18.5118 14.5347 18.5872L9.6394 21.1608C9.39354 21.29 9.10884 21.0831 9.15577 20.8095L10.0907 15.3584C10.1181 15.1986 10.1062 15.0346 10.0561 14.8804C10.006 14.7262 9.9192 14.5865 9.80311 14.4733L5.84271 10.6129C5.64378 10.419 5.75259 10.0844 6.02745 10.0443L11.5006 9.24904C11.661 9.22573 11.8134 9.16377 11.9445 9.06848C12.0757 8.97319 12.1817 8.84745 12.2535 8.70207L14.7012 3.74253C14.8241 3.49362 15.176 3.49345 15.299 3.74259L17.7467 8.70207C17.8184 8.84745 17.9244 8.9732 18.0556 9.06849C18.1868 9.16378 18.3391 9.22574 18.4996 9.24904L23.9727 10.0443C24.2475 10.0844 24.3563 10.4191 24.1574 10.6129ZM7.89442 2.05831L6.69847 0.412239C6.37374 -0.0344789 5.74843 -0.133619 5.30171 0.191107C4.85493 0.515716 4.75585 1.14109 5.08052 1.58786L6.27648 3.23388C6.60132 3.68083 7.22663 3.77956 7.67323 3.45501C8.12001 3.13046 8.21909 2.50509 7.89442 2.05831ZM3.92564 16.8096C3.75507 16.2844 3.19093 15.9967 2.66558 16.1676L0.69121 16.8091C0.165976 16.9798 -0.121426 17.5439 0.0491991 18.0691C0.220117 18.5953 0.785194 18.8817 1.30926 18.7112L3.28363 18.0696C3.80892 17.8989 4.09632 17.3348 3.92564 16.8096ZM24.6984 0.191165C24.2517 -0.133444 23.6263 -0.0344789 23.3016 0.412298L22.1057 2.05831C21.781 2.50509 21.8801 3.13052 22.3269 3.45507C22.7738 3.77979 23.3991 3.68054 23.7236 3.23393L24.9196 1.58792C25.2442 1.14114 25.1452 0.515716 24.6984 0.191165ZM29.3088 16.8091L27.3344 16.1676C26.8092 15.9966 26.245 16.2843 26.0743 16.8096C25.9037 17.3348 26.1911 17.899 26.7164 18.0696L28.6907 18.7112C29.2148 18.8816 29.7799 18.5952 29.9508 18.0691C30.1215 17.5439 29.834 16.9798 29.3088 16.8091ZM15 24.5614C14.4478 24.5614 14.0001 25.0091 14.0001 25.5613V27.5909C14.0001 28.1432 14.4478 28.5909 15 28.5909C15.5523 28.5909 16 28.1432 16 27.5909V25.5613C16 25.009 15.5523 24.5614 15 24.5614Z"
                fill="black"
              />
            </svg>

            <Typography
              sx={{
                color: "black",
                fontSize: "16px",
                ml: "5px",

                fontWeight: "500",
              }}
            >
              {user?.loyalty_point}
            </Typography>
          </Box>

          {/* Balance/Wallet */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6249 7.36719H4.375C1.96247 7.36719 0 9.32966 0 11.7421V24.242C0 26.6545 1.96247 28.617 4.375 28.617H25.6249C28.0374 28.617 29.9999 26.6546 29.9999 24.242V11.7421C29.9999 9.32966 28.0374 7.36719 25.6249 7.36719ZM28.7499 24.2421C28.7499 25.9646 27.3486 27.3671 25.6249 27.3671H4.375C2.65124 27.3671 1.25003 25.9646 1.25003 24.2421V11.7421C1.25003 10.0197 2.6513 8.61716 4.375 8.61716H25.6249C27.3487 8.61716 28.7499 10.0197 28.7499 11.7421V24.2421Z"
                fill="black"
              />
              <path
                d="M24.375 16.1172C23.3412 16.1172 22.5 16.9584 22.5 17.9922C22.5 19.0259 23.3412 19.8672 24.375 19.8672C25.4088 19.8672 26.25 19.0259 26.25 17.9922C26.25 16.9584 25.4088 16.1172 24.375 16.1172ZM24.375 18.6172C24.0312 18.6172 23.75 18.3372 23.75 17.9922C23.75 17.6472 24.0312 17.3672 24.375 17.3672C24.7188 17.3672 25 17.6472 25 17.9922C25 18.3372 24.7188 18.6172 24.375 18.6172Z"
                fill="black"
              />
              <path
                d="M29.3752 13.6171H24.3753C21.9628 13.6171 20.0003 15.5795 20.0003 17.9921C20.0003 20.4045 21.9627 22.3671 24.3753 22.3671H29.3752C29.7202 22.3671 30.0002 22.087 30.0002 21.742V14.2421C30.0002 13.8971 29.7202 13.6171 29.3752 13.6171ZM28.7503 21.117H24.3753C22.6515 21.117 21.2503 19.7145 21.2503 17.9921C21.2503 16.2696 22.6516 14.8671 24.3753 14.8671H28.7503V21.117ZM25.559 7.71212L22.9128 2.41961C22.379 1.35209 21.4578 0.565887 20.3203 0.205889C19.1828 -0.152879 17.9778 -0.0403795 16.9253 0.524637L4.07913 7.44212C3.77538 7.6046 3.66165 7.98464 3.82536 8.28839C3.98913 8.59214 4.3691 8.70587 4.67162 8.54216L17.5203 1.62713C18.2703 1.22213 19.134 1.14086 19.944 1.39838C20.7565 1.65461 21.414 2.21711 21.7953 2.97965L24.4415 8.2721C24.4935 8.37579 24.5732 8.46298 24.6719 8.52391C24.7706 8.58484 24.8843 8.61711 25.0003 8.6171C25.094 8.6171 25.189 8.59583 25.279 8.55083C25.5877 8.39585 25.7128 8.02085 25.559 7.71212Z"
                fill="black"
              />
              <path
                d="M23.0511 2.69696C22.8861 2.39198 22.5062 2.27948 22.2036 2.44196L12.9175 7.44192C12.6137 7.60569 12.5 7.98444 12.6637 8.28818C12.7762 8.49818 12.9912 8.61695 13.2137 8.61695C13.3137 8.61695 13.4162 8.59322 13.5112 8.54318L22.7974 3.54323C23.1011 3.37946 23.2149 3.00071 23.0511 2.69696ZM11.2499 3.617H6.87495C3.085 3.617 0 6.70071 0 10.4919V11.7419C0 12.0869 0.280018 12.3669 0.625016 12.3669C0.970015 12.3669 1.25003 12.0869 1.25003 11.7419V10.4919C1.25003 7.39071 3.77377 4.86697 6.87501 4.86697H11.2499C11.5949 4.86697 11.875 4.58695 11.875 4.24195C11.875 3.89696 11.5949 3.617 11.2499 3.617ZM23.1249 3.617C22.7799 3.617 22.4999 3.89701 22.4999 4.24201C22.4999 4.58701 22.7799 4.86703 23.1249 4.86703C26.2261 4.86703 28.7499 7.39077 28.7499 10.492V11.742C28.7499 12.087 29.0299 12.367 29.3749 12.367C29.7199 12.367 29.9999 12.087 29.9999 11.742V10.492C29.9999 6.70071 26.9148 3.617 23.1249 3.617Z"
                fill="black"
              />
            </svg>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                ml: "5px",

                color: "black",
              }}
            >
              {user?.wallet_balance}
            </Typography>
          </Box>
          {/* Logout Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: "6px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
            onClick={handleLogout} // Add your logout function here
          >
            <LogoutIcon sx={{ color: "red", marginRight: "8px" }} />
            <Typography
              sx={{
                color: "red",
                fontSize: "16px",
                fontWeight: "500",
                ml: "5px",
              }}
            >
              Logout
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
