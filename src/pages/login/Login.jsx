import {
  Box,
  Button,
  Grid2,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, user, authenticated, planDetailUrl } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    const user_info = await loginUser(email, password);
    console.log(user_info)
    if (user_info) {
      console.log("True Conidition");
      setError(false);
      navigate(planDetailUrl, { replace: true });
    } else {
      console.log("False Conidition");
      setError(true);
    }
  };

  return (
    <>
      <Grid2
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
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
              Login to your account
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
              Please Enter Your Username and Password Before Further Move.
            </Typography>

            {/* Email TextField */}
            <TextField
              fullWidth
              error={error ? true : false}
              helperText={error ? "Please Enter a Valid Email" : ""}
              placeholder=""
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "#666" }} />
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

            {/* Password Textfield */}
            <Box>
              <TextField
                fullWidth
                error={error ? true : false}
                helperText={error ? "Please Enter Correct Password" : ""}
                placeholder=""
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "#666" }} />
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
                  marginBottom: "6px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    "&.Mui-focused fieldset": {
                      border: "2px solid grey",
                    },
                  },
                }}
              />
              <Typography
                sx={{
                  textAlign: "right",
                  color: "#D92531",
                  cursor: "Pointer",
                  fontWeight: "Bold",
                }}
              >
                Forget Password
              </Typography>
            </Box>

            {/* Submit Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D92531",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 16px",
                marginTop: "12px",
                width: { xs: "100%", sm: "360px", md: "512px" },
                height: { xs: "56px", sm: "56px", md: "56px" },
                boxShadow: "none",
              }}
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
            <Box sx={{ display: "flex", gap: "6px" }}>
              <Typography>Don't Have any Account?</Typography>
              <Typography
                sx={{ cursor: "Pointer", color: "#D92531", fontWeight: "Bold" }}
                onClick={() => navigate('/createaccount')}
              >
                Create Account
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Grid2>
    </>
  );
};

export default Login;
