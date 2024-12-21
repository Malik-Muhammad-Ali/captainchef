import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CheckoutRightComponent = ({ couponData }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const discountType = couponData?.data?.discount_type || "";
  const discount = couponData?.data?.discount || 0;
  const removeDelivery = couponData?.data?.remove_delivery_charges || "no";

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const cart = [
    {
      planName: "2 Meals",
      planPrice: 500,
      deliveryCharges: 250,
    },
    {
      planName: "3 Meals",
      planPrice: 700,
      deliveryCharges: 350,
    },
  ];

  // Calculate the discounted price for each plan
  const discountedCart = cart.map((item) => {
    let discountedPrice = item.planPrice;
    if (discountType === "percent") {
      discountedPrice = item.planPrice - (item.planPrice * discount) / 100;
    } else if (discountType === "flat") {
      discountedPrice = item.planPrice - discount;
    }
    return {
      ...item,
      discountedPrice: Math.max(discountedPrice, 0), // Ensure no negative prices
    };
  });

  // Calculate the total price with discounts applied
  const totalPrice = discountedCart.reduce(
    (total, item) => total + item.discountedPrice + item.deliveryCharges,
    0
  );

  // VAT calculation
  const VAT = 0.15 * totalPrice;

  return (
    <Paper
      elevation={0}
      sx={{
        padding: "16px",
        width: { lg: "560px", md: "480px", sm: "331px", xs: "345px" },
        height: "auto",
        margin: "0 auto",
        borderRadius: "24px",
        gap: "40px",
      }}
    >
      {/* Order Summary Header */}
      <Box
        sx={{
          height: { lg: "48px", sm: "24px", md: "48px", xs: "" },
          display: "flex",
          justifyContent: "space-between",
          mb: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Order Summary
        </Typography>
        <Box onClick={toggleCollapse} sx={{ cursor: "pointer", pl: "40px" }}>
          {isCollapsed ? (
            <KeyboardArrowDownIcon sx={{ fontSize: "35px" }} />
          ) : (
            <KeyboardArrowUpIcon sx={{ fontSize: "35px" }} />
          )}
        </Box>
      </Box>
      {/* Collapsible Content */}
      {!isCollapsed && (
        <>
          {/* Items and Price Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Items
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Price
            </Typography>
          </Box>
          {discountedCart.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    {item.planName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    <span
                      style={{
                        color: discountType ? "gray" : "black",
                        marginRight: discountType ? "6px" : "0px",
                      }}
                    >
                      {item.planPrice} SR
                    </span>
                    {discountType && (
                      <span style={{ color: "green", marginLeft: "8px" }}>
                        {item.discountedPrice.toFixed(2)} SR
                      </span>
                    )}
                  </Typography>
                </Box>
                {/* Delivery Charges */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "8px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    Delivery Charges
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                    }}
                  >
                    <span
                      style={{
                        color: discountType ? "gray" : "black",
                        marginRight: discountType ? "6px" : "0px",
                      }}
                    >
                      {item.deliveryCharges} SR
                    </span>
                    {removeDelivery === 'yes' && (
                      <span style={{ color: "green", marginLeft: "8px" }}>
                        0 SR
                      </span>
                    )}
                  </Typography>
                </Box>
                {/* Divider */}
                <Box
                  sx={{
                    height: "1px",
                    backgroundColor: "#e0e0e0",
                    my: "8px",
                  }}
                />
              </React.Fragment>
            );
          })}
          {/* Final Totals */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              Total
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              {totalPrice.toFixed(2)} SR
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: "8px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              VAT(15%)
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              {VAT.toFixed(2)} SR
            </Typography>
          </Box>
          {/* Divider */}
          <Box
            sx={{
              height: "1px",
              backgroundColor: "#e0e0e0",
              my: "8px",
            }}
          />
          {/* Subtotal */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Subtotal
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "red",
              }}
            >
              {(totalPrice + VAT).toFixed(2)} SAR
            </Typography>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default CheckoutRightComponent;
