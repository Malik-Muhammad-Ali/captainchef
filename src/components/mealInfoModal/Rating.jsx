import React, { useState, useEffect } from "react";
import { Box, Typography, Rating } from "@mui/material";

const RatingModal = () => {
  const [rating, setRating] = useState(4.8);
  const [reviews, setReviews] = useState(12500);

  useEffect(() => {
    // Simulate live updates every 5 seconds
    const interval = setInterval(() => {
      const randomIncrement = Math.random() > 0.5 ? 0.1 : -0.1;
      const randomReviews = Math.floor(Math.random() * 50 + 1);
      setRating((prev) => Math.max(0, Math.min(5, prev + randomIncrement))); // Ensure rating stays between 0 and 5
      setReviews((prev) => prev + randomReviews);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection='column'
      gap={1}
      sx={{ fontSize: "16px", fontWeight: "400" }}
    >
      {/* <Typography
        sx={{
          fontWeight: "500",
          fontSize: "18px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Our Happy Customers
      </Typography> */}
      <Box display="flex" alignItems="center" gap={0.5}>
        <Rating
          name="customer-rating"
          value={rating}
          precision={0.1}
          readOnly
          size="medium"
          sx={{ color: "#FFC107" }}
        />
        <Typography>
          {rating.toFixed(1)} ({Math.floor(reviews / 1000)}k Reviews)
        </Typography>
      </Box>
    </Box>
  );
};

export default RatingModal;
