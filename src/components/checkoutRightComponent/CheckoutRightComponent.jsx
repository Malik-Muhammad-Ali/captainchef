import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useAppStore from "../../store/store";

const CheckoutRightComponent = ({
  couponData,
  discountedCart,
  totalPrice,
  VAT,
  subTotal,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // console.log(discountedCart)

  const discountType = couponData?.data?.discount_type || "";
  const removeDelivery = couponData?.data?.remove_delivery_charges || "no";

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const { language } = useAppStore();
  const isArabic = language == "ar";

  return (
    <Paper
      elevation={0}
      sx={{
        padding: "16px",

        width: { lg: "600px", md: "480px", sm: "600px", xs: "345px" },
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
          mb: { xs: "50px", sm: "20px", md: "0px", lg: "0px" },
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          {isArabic ? "ملخص الطلب" : "Order Summary"}
        </Typography>

        <Box onClick={toggleCollapse} sx={{ cursor: "pointer", pl: "12px" }}>
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
                direction: isArabic ? "rtl" : "ltr",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {isArabic ? "العناصر" : "Items"}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                direction: isArabic ? "rtl" : "ltr",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {isArabic ? "السعر" : "Price"}
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
                    {isArabic ? item.planName_ar : item.planName}
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
                    {isArabic ? "رسوم التوصيل" : "Delivery Charges"}
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
                      {item.delivery_charges} SR
                    </span>
                    {removeDelivery === "yes" && (
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
              {isArabic ? "المجموع" : "Total"}
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
              {isArabic ? "ضريبة القيمة المضافة (%15)" : "VAT(15%)"}
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
                direction: isArabic ? "rtl" : "ltr",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {isArabic ? "المجموع الفرعي" : "Subtotal"}
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "red",
                direction: isArabic ? "rtl" : "ltr",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {subTotal} SAR
            </Typography>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default CheckoutRightComponent;
