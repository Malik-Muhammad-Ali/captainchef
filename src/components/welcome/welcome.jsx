import React from "react";
import { Box, Button, Grid2, TextField, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const Welcome = ({setUserExisted, setAuthenticatedComponent}) => {
  const { planDetailUrl, setUser } = useAppStore();
  const navigate = useNavigate();
  const handleAuthenticate = () => {
    setUser({ name: "Hussain Daggal" });
    navigate(planDetailUrl, {replace: true});
  }

  const handleBack = () => {
    setUserExisted(false);
    setAuthenticatedComponent(true);
  }
  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <IconButton
          sx={{
            width: { xs: "48px", sm: "56px" },
            height: { xs: "48px", sm: "56px" },
            display: "flex",
            alignItems: "center",
            m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
            justifyContent: "center",
            borderRadius: "20%",
            backgroundColor: "#fff",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            cursor: "pointer",
          }}
          onClick={() => handleBack()}
        >
          <ArrowBackIosIcon sx={{ fontSize: "24px", ml: "7px" }} />
        </IconButton>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="/welcome.png"
              alt="Authentication Illustration"
              sx={{
                width: "369px",
                height: "205px",
              }}
            />

            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
                fontSize: { lg: "32px", md: "32px", sm: "28px", xs: "24px" },
              }}
            >
              Welcome Back
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#666",
                marginBottom: "35px",
                fontWeight: "400px",
                fontSize: "20px",
              }}
            >
              Welcome back Mr Hussain Daggal, Please Enter Your Password <br />{" "}
              For Confirmation
            </Typography>

            {/* Password TextField */}
            <TextField
              fullWidth
              placeholder="Please enter your password here"
              label="Password"
              type="password"
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
                  fontWeight: "500",
                },
              }}
              sx={{
                width: { xs: "100%", sm: "360px", md: "512px" },
                marginBottom: "20px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "&.Mui-focused fieldset": {
                    border: "2px solid grey",
                  },
                },
              }}
            />

            {/* Button with Forgot Password */}
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "360px", md: "512px" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D92531",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  padding: "10px 16px",
                  width: "100%",
                  height: { xs: "56px", sm: "56px", md: "56px" },
                  cursor: "pointer",
                  boxShadow: 'none'
                }}
                onClick={() => handleAuthenticate()}
              >
                Continue
              </Button>

              {/* Forgot Password */}
              <Typography
                variant="body2"
                sx={{
                  color: "#D92531",
                  textDecoration: "underline",
                  fontWeight: "500",
                  position: "absolute",
                  bottom: "-32px",
                  right: "0",
                  cursor: "pointer",
                  mt: "30px",
                  mb: "10px",
                }}
                onClick={() => navigate("/forgotpassword")}
              >
                Forgot Password?
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default Welcome;
