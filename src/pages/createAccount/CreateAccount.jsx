import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <Grid2
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "40px",
      }}
    >
      <Box
        sx={{
          width: { xs: "48px", sm: "56px" },
          height: { xs: "48px", sm: "56px" },
          display: "flex",
          alignItems: "center",
          mb: { xs: "40px", md: "30px", sm: "", lg: "" },
          justifyContent: "center",
          borderRadius: "20%",
          backgroundColor: "white",
          cursor: "pointer",
        }}
        onClick={() => navigate('/authentication')}
      >
        <ArrowBackIosIcon
          sx={{ fontSize: "24px", color: "#D92531", ml: "7px" }}
        />
      </Box>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.3 }} // Adjust amount to trigger earlier or later
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            padding: "16px",
            backgroundColor: "#f5f5f5",
            // mt: { xs: "80px", sm: "40px", md: "0", lg: "0" },
            mb: "40px",
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src="/createaccount.png"
            alt="Authentication Illustration"
            sx={{
              width: "369px",
              height: "205px",
              // mt: { xs: "250px", sm: "100px", md: "0", lg: "0" },
            }}
          />

          {/* Heading */}
          <Typography
            variant="h5"
            sx={{
              marginTop: '40px',
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            Create Your Account
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666",
              marginBottom: "35px",
              fontSize: "16px",
            }}
          >
            Please Enter Your Details To Create Your Account In Captain
            <br /> Chef Business
          </Typography>

          {/* Phone Number TextField */}
          <TextField
            fullWidth
            placeholder="Enter your name here"
            label="Name"
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
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  border: "2px solid #ccc",
                },
                "&:hover fieldset": {
                  border: "2px solid #888",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #FF5722",
                  boxShadow: "0 0 8px rgba(255, 87, 34, 0.5)",
                },
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Enter your email here"
            label="Email"
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
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  border: "2px solid #ccc",
                },
                "&:hover fieldset": {
                  border: "2px solid #888",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #FF5722",
                  boxShadow: "0 0 8px rgba(255, 87, 34, 0.5)",
                },
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Enter your password here"
            label="Password"
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
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  border: "2px solid #ccc",
                },
                "&:hover fieldset": {
                  border: "2px solid #888",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #FF5722",
                  boxShadow: "0 0 8px rgba(255, 87, 34, 0.5)",
                },
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Re Enter your password here"
            label="Confirm Password"
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
              width: { xs: "100%", sm: "360px", md: "512px" },
              marginBottom: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  border: "2px solid #ccc",
                },
                "&:hover fieldset": {
                  border: "2px solid #888",
                },
                "&.Mui-focused fieldset": {
                  border: "2px solid #FF5722",
                  boxShadow: "0 0 8px rgba(255, 87, 34, 0.5)",
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
            }}
            onClick={() => navigate('/authentication')}
          >
            Register
          </Button>
        </Box>
      </motion.div>
    </Grid2>
  );
};

export default CreateAccount;
