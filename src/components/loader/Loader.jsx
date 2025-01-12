import React from "react";
import Lottie from "lottie-react";
import mealAnimation from '../../lottie/meal.json'

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Lottie
        animationData={mealAnimation}
        loop
        autoplay
        style={{
          height: 400,
          width: 400,
        }}
      />
      <p
        style={{
          fontSize: "1.2rem",
          color: "#d92531",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Please wait...
        <br />
        We are Preparing Your Meal
      </p>
    </div>
  );
};

export default Loader;
