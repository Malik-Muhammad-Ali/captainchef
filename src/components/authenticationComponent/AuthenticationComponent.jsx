import {
  Box,
  Button,
  Grid2,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CallIcon from "@mui/icons-material/Call";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const AuthenticationComponent = ({
  setUserExisted,
  setAuthenticatedComponent,
}) => {
  const navigate = useNavigate();
  const { checkUser, user } = useAppStore();
  const [number, setNumber] = React.useState("");

  const handleSubmit = async () => {
    const isUserExist = await checkUser();
    if (isUserExist === null) {
      navigate("/otp");
    } else if (isUserExist) {
      setUserExisted(true);
      setAuthenticatedComponent(false);
    }
  };

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
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosIcon sx={{ fontSize: "24px", ml: "7px" }} />
        </IconButton>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
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
              gap: "10px",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src="/authenticationImage.png"
              alt="Authentication Illustration"
              sx={{ width: "369px", height: "205px" }}
            />

            {/* Heading */}
            <Typography
              variant="h5"
              sx={{
                fontSize: { lg: "32px", md: "32px", sm: "28px", xs: "24px" },
                fontWeight: "600",
              }}
            >
              Authentication
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
              Please Enter Your Mobile Number Before Further Move.
            </Typography>

            {/* Phone Number TextField */}
            <TextField
              fullWidth
              placeholder="+9665--------"
              label="Phone Number"
              variant="outlined"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CallIcon sx={{ color: "#666" }} />
                  </InputAdornment>
                ),
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

            {/* Submit Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D92531",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 16px",
                width: { xs: "100%", sm: "360px", md: "512px" },
                height: { xs: "56px", sm: "56px", md: "56px" },
                boxShadow: "none",
              }}
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default AuthenticationComponent;
