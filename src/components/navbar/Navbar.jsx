import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import CallIcon from "@mui/icons-material/Call";
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
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";
import { ShoppingCart, StarBorderRounded } from "@mui/icons-material";
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
                  color: location.pathname.startsWith("/subscriptions") || location.pathname.startsWith("/")
                    ? "#CE2729"
                    : "#656565",
                }}
              >
                Subscriptions
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
                Lang
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
              Download App
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
                      <PersonSharpIcon
                        sx={{ color: "black", marginRight: "8px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "black",
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
                      <CallIcon sx={{ color: "black", marginRight: "8px" }} />
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: "500",
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
                      <EmailIcon sx={{ color: "black", marginRight: "8px" }} />
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
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
                      <StarBorderRounded
                        sx={{ color: "black", marginRight: "8px" }}
                      />
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
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
                      <AccountBalanceWalletSharpIcon
                        sx={{ color: "black", marginRight: "8px" }}
                      />
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "black",
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
            width: 250,
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
            <PersonSharpIcon sx={{ color: "black", marginRight: "8px" }} />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
              }}
            >
              Malik Ali
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
            <CallIcon sx={{ color: "black", marginRight: "8px" }} />
            <Typography
              sx={{
                color: "black",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              +966501729924
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
            <EmailIcon sx={{ color: "black", marginRight: "8px" }} />
            <Typography
              sx={{
                color: "black",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              abdullah@gmail.com
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
            <StarBorderRounded sx={{ color: "black", marginRight: "8px" }} />
            <Typography
              sx={{
                color: "black",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Loyalty Points
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
            <AccountBalanceWalletSharpIcon
              sx={{ color: "black", marginRight: "8px" }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
              }}
            >
              $1,250
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
