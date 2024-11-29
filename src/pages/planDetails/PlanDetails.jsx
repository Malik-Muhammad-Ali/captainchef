import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PlanDetails = () => {
  const { planId } = useParams();
  const navigate = useNavigate();

  const plans = [
    {
      planId: 1,
      name: "Basic Plan",
      price: 9.99,
    },
    {
      planId: 2,
      name: "Standard Plan",
      price: 19.99,
    },
    {
      planId: 3,
      name: "Premium Plan",
      price: 29.99,
    },
  ];

  const plan = plans.find((plan) => plan.planId === parseInt(planId));

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <div>
        <h2>{plan.name}</h2>
        <p>Price: {plan.price}</p>
        <button onClick={() => navigate("/authentication")}>Subscribe</button>
      </div>
    </>
  );
};

export default PlanDetails;
