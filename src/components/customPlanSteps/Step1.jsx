import React, { useState } from "react";
import {
  Grid,
  Radio,
  Typography,
  FormControlLabel,
  RadioGroup,
  Box,
} from "@mui/material";
import { Male, Female } from "@mui/icons-material";

const Step1 = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Select Gender
      </Typography>
      <RadioGroup value={selectedGender} onChange={handleGenderChange}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                border: "1px solid #e0e0e0",
                backgroundColor: selectedGender === "male" ? "#008ED8" : "#fff",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "#90caf9",
                },
                borderRadius: 50,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1.5,
                  borderRadius: "50%",
                  border: "1px solid #e0e0e0",
                  backgroundColor: selectedGender === "male" ? "#fff" : "#fff",
                }}
              >
                <Male
                  color={selectedGender === "male" ? "primary" : "inherit"}
                />
              </Box>
              <FormControlLabel
                value="male"
                control={<Radio sx={{ display: "none" }} />}
                label="Male"
                sx={{ flexGrow: 1, ml: 2 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                backgroundColor:
                  selectedGender === "female" ? "#EE6283" : "#fff",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "#f48fb1",
                },
                borderRadius: 50,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1.5,
                  borderRadius: "50%",
                  border: "1px solid #e0e0e0",
                  backgroundColor:
                    selectedGender === "female" ? "#fff" : "#fff",
                }}
              >
                <Female
                  color={selectedGender === "female" ? "secondary" : "inherit"}
                />
              </Box>
              <FormControlLabel
                value="female"
                control={<Radio sx={{ display: "none" }} />} // Hide default radio circle
                label="Female"
                sx={{ flexGrow: 1, ml: 2 }}
              />
            </Box>
          </Grid>
        </Grid>
      </RadioGroup>
    </Box>
  );
};

export default Step1;
