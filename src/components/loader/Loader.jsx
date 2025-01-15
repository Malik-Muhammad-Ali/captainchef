import React from "react";
import Lottie from "lottie-react";
import mealAnimation from "../../lottie/meal.json";
import useAppStore from "../../store/store";

const Loader = () => {
  const { language } = useAppStore();
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
        {language === "en" ? "Please wait..." : "انتظر من فضلك..."}
        <br />
        {language === "en"
          ? "We are Preparing Your Meal"
          : " نحن نقوم بإعداد وجبتك"}
      </p>
    </div>
  );
};

export default Loader;
