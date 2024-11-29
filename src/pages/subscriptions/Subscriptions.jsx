import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

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

const Subscriptions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPlanDetailsRoute = location.pathname === "/subscriptions";

  return (
    <>
      {isPlanDetailsRoute &&
        plans.map((plan) => {
          return (
            <div key={plan.planId}>
              <h1>{plan.name}</h1>
              <p>${plan.price}</p>
              <button onClick={() => navigate(`/subscriptions/${plan.planId}`)}>
                View Details
              </button>
            </div>
          );
        })}
      <Outlet />
    </>
  );
};

export default Subscriptions;
