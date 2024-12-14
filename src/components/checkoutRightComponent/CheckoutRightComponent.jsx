import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CheckoutRightComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

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
          {/* First Line: Muscle Gain Plan */}
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
              Muscle Gain Plan 1
            </Typography>
            <Box
              sx={{
                width: "4px",
                height: "100%",
                backgroundColor: "#e0e0e0",
                mx: "8px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              1 × 500 SR
            </Typography>
          </Box>
          {/* Second Line: Delivery Charges */}
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
            <Box
              sx={{
                width: "4px",
                height: "100%",
                backgroundColor: "#e0e0e0",
                mx: "8px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              2 × 250 SR
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
          {/* Additional Lines */}
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
              Muscle Gain Plan 1
            </Typography>
            <Box
              sx={{
                width: "4px",
                height: "100%",
                backgroundColor: "#e0e0e0",
                mx: "8px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              1 × 500 SR
            </Typography>
          </Box>
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
            <Box
              sx={{
                width: "4px",
                height: "100%",
                backgroundColor: "#e0e0e0",
                mx: "8px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              2 × 250 SR
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
          {/* Final Lines */}
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
              1400 SR
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
              210 SR
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
              2656 SAR
            </Typography>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default CheckoutRightComponent;
