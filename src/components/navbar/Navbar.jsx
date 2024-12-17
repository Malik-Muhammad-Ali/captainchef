import * as React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Drawer from "@mui/material/Drawer";
import useAppStore from "../../store/store";
import Logo from '../../../public/logocaptainchef.png'

const Navbar = () => {
  const { authenticated, language, setLanguage } = useAppStore();
  const location = useLocation();
  // const [language, setLanguage] = useState("");
  const [flag, setFlag] = useState("https://flagcdn.com/w40/us.png");
  const [drawerOpen, setDrawerOpen] = useState(false);

  //   Flag Change
  const handleChange = (event) => {
    setLanguage(event.target.value);
    if (event.target.value === "english") {
      setLanguage("en");
      setFlag("https://flagcdn.com/w40/us.png");
    } else if (event.target.value === "arabic") {
      setLanguage("ar");
      setFlag("https://flagcdn.com/w40/sa.png");
    }
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

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
            <Link to="/">
              <Button
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: location.pathname === "/" ? "#CE2729" : "#656565",
                }}
              >
                Home
              </Button>
            </Link>

            <Link to="/features">
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
            </Link>

            <Link to="/subscriptions">
              <Button
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: location.pathname.startsWith("/subscriptions")
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
                  <Box display="flex" alignItems="center" gap={1}>
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
                boxShadow: 'none'
              }}
            >
              Download App
            </Button>

            {/* Account Icon */}
            {authenticated && (
              <Box
                sx={{
                  width: "56px",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20%",
                  backgroundColor: "green",
                }}
              >
                <Person2OutlinedIcon sx={{ color: "white" }} />
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
            alignItems: "start",
            justifyContent: "start",
            gap: 2,
            height: "100%",
          }}
        >
          {/* Account Icon */}
          {authenticated && (
            <Box
              sx={{
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20%",
                backgroundColor: "green",
              }}
            >
              <Person2OutlinedIcon
                sx={{ color: "white", alignSelf: "center" }}
              />
            </Box>
          )}

          {/* Pages */}
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
              Home
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
              Feature
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
              Subscriptions
            </Button>
          </Link>

          {/* Language Selector */}
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
                <Box display="flex" alignItems="center" gap={1}>
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
              width: { xs: "206px", sm: "206px", md: "206px", lg: "206px" },
              boxShadow: 'none'
            }}
          >
            Download App
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
