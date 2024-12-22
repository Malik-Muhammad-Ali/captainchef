import {
  Box,
  Button,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const CreateAccount = () => {
  const navigate = useNavigate();
  const { registerUser } = useAppStore();
  const [error, setError] = useState("");
  const [createUser, setCreateUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "966",
    password: "",
    confirmPassword: "",
  });

  const handleRegistration = async () => {
    let errors = {};

    // Validation for each field
    if (!createUser.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!createUser.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!createUser.email.trim()) {
      errors.email = "Email a valid email";
    }
    if (!createUser.mobileNumber.startsWith("9665")) {
      errors.mobileNumber = "Enter a valid number";
    }
    if (!createUser.password.trim()) {
      errors.password = "Password is required";
    }
    if (createUser.password !== createUser.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (createUser.confirmPassword !== createUser.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }

    // If there are errors, set them and return
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    // Proceed with registration
    const registrationResponse = await registerUser(createUser);
    if (registrationResponse.status === false) {
      setError({ general: registrationResponse.message });
    }
    if (registrationResponse.status === true) {
      navigate("/login");
    }
  };

  return (
    <Grid2
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: { xs: "48px", sm: "56px" },
          height: { xs: "48px", sm: "56px" },
          display: "flex",
          alignItems: "center",
          // m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
          justifyContent: "center",
          borderRadius: "20%",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <IconButton
          sx={{
            width: { xs: "48px", sm: "56px" },
            height: { xs: "48px", sm: "56px" },
            display: "flex",
            alignItems: "center",
            // m: { xs: "8px", md: "12px", sm: "16px", lg: "20px" },
            justifyContent: "center",
            borderRadius: "20%",
            backgroundColor: "#fff",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIosIcon
            sx={{
              fontSize: "24px",
              ml: "7px",
            }}
          />
        </IconButton>
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
            // height: "100vh",
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
              marginTop: "40px",
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

          {/* First Name TextField */}
          <TextField
            fullWidth
            placeholder="Enter Your Name Here"
            value={createUser.firstName}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
            error={!!error.firstName}
            helperText={error.firstName}
            label="First Name"
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

          {/* Last Name */}
          <TextField
            fullWidth
            placeholder="Enter Your Last Name Here"
            label="Last Name"
            value={createUser.lastName}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
            error={!!error.lastName}
            helperText={error.lastName}
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

          {/* Email Textfield */}
          <TextField
            fullWidth
            placeholder="Enter Your Email Here"
            label="Email"
            value={createUser.email}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            error={!!error.email}
            helperText={error.email}
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

          {/* Mobile Number */}
          <TextField
            fullWidth
            placeholder="Enter Your Mobile Number Here. Start with 966"
            label="Mobile Number"
            value={createUser.mobileNumber}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                mobileNumber: e.target.value,
              }))
            }
            error={!!error.mobileNumber}
            helperText={error.mobileNumber}
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

          {/* Password Textfield */}
          <TextField
            fullWidth
            placeholder="Enter Your Password Here"
            label="Password"
            variant="outlined"
            value={createUser.password}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            error={!!error.password}
            helperText={error.password}
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

          {/* Confirm Password Textfield */}
          <TextField
            fullWidth
            placeholder="Re Enter Your Password Here"
            label="Confirm Password"
            value={createUser.confirmPassword}
            onChange={(e) =>
              setCreateUser((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            error={!!error.confirmPassword}
            helperText={error.confirmPassword}
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

          {/* <Typography sx={{ color: "#D92531", marginBottom: "12px" }}>
            {error}
          </Typography> */}

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
              marginBottom: "10px",
            }}
            onClick={() => handleRegistration()}
          >
            Register
          </Button>

          <Box sx={{ display: "flex", gap: "6px", paddingBottom: "20px" }}>
            <Typography>Already Have any Account?</Typography>
            <Typography
              sx={{ cursor: "Pointer", color: "#D92531", fontWeight: "Bold" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Grid2>
  );
};

export default CreateAccount;
