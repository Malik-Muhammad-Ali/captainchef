import {
  Box,
  Button,
  IconButton,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LockIcon from "@mui/icons-material/Lock";
import CheckoutRightComponent from "../../components/checkoutRightComponent/CheckoutRightComponent";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useAppStore from "../../store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [couponData, setCouponData] = useState();
  const [couponError, setCouponError] = useState();
  const [code, setCode] = useState("");
  const { user, city, authenticated } = useAppStore();
  const [freePlan, setFreePlan] = useState(true);

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated]);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isCollapsed1, setIsCollapsed1] = useState(false);
  const toggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };

  const [collapsedComments, setCollapsedComments] = useState(false);
  const toggleComments = () => {
    setCollapsedComments(!collapsedComments);
  };

  const [selectedPayment, setSelectedPayment] = useState(null);
  const handleSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleCoupon = async () => {
    const dataSend = {
      contact_id: user?.contact_id,
      code: code,
    };
    try {
      const response = await axios.post(
        "https://appv2.captainchef.net/AppV2/public/connector/api/coupon/apply",
        dataSend
      );
      if (response.data.status === "success") {
        setCouponError();
        setCouponData(response.data);
        setFreePlan(false);
      } else {
        setCouponData();
        setCouponError("Enter a Valid Coupon Code");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const paymentOptions = [
    {
      id: "wallet",
      label: "Pay with Wallet",
      img: `<svg width="30" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.39716 15.874C1.71512 16.6023 1.25048 17.4726 1.00324 18.4851C0.846936 19.1186 0.588328 19.1882 0.227413 18.6938C-0.107925 18.232 -0.0724017 17.7317 0.333982 17.1929C1.13538 16.139 1.86574 15.0392 2.52505 13.8935C2.53641 13.8757 2.79218 13.3592 3.29235 12.3437C4.31257 10.2714 5.90685 9.26787 8.07517 9.333C8.57818 9.3478 9.48047 9.59055 10.782 10.0613C11.6431 10.3751 12.5624 10.6089 13.54 10.7629C13.6041 10.7734 13.6695 10.7702 13.7323 10.7533C13.7951 10.7364 13.8541 10.7063 13.9055 10.6648C13.957 10.6232 13.9999 10.5711 14.0316 10.5116C14.0633 10.4522 14.0831 10.3866 14.0899 10.3188C14.2889 8.38271 14.3287 6.65975 14.2093 5.14994C14.2042 5.08904 14.1773 5.03193 14.1336 4.98882C14.0899 4.9457 14.0321 4.91939 13.9706 4.91458C11.7738 4.7488 10.8517 3.51283 11.204 1.20667C11.3206 0.451765 11.7113 0.0506291 12.3763 0.0032625C12.6719 -0.0145 13.1521 0.0402676 13.8171 0.167565C15.5023 0.496171 16.5766 1.46274 17.0398 3.06729C17.1535 3.45806 17.2856 4.35359 17.4362 5.75386C17.4391 5.77458 17.5812 6.63902 17.8625 8.34718C18.2007 10.4135 17.9151 12.4177 17.0057 14.3598C15.849 16.8406 13.9066 18.1091 11.1785 18.1654C8.35367 18.2246 5.5374 17.446 2.72966 15.8296C2.67545 15.7988 2.61373 15.7865 2.55377 15.7945C2.49382 15.8025 2.43886 15.8304 2.39716 15.874ZM12.1376 2.86302C12.149 3.03176 12.2143 3.17386 12.3337 3.28932C12.669 3.77483 13.1123 4.08419 13.6637 4.21741C13.7341 4.23538 13.8056 4.23833 13.8728 4.22602C13.9399 4.21372 14.0011 4.18649 14.0516 4.14636C14.3216 3.93617 14.3883 3.64309 14.2519 3.26712C14.2411 3.2381 14.2353 3.20731 14.2349 3.17676C14.2345 3.14621 14.2395 3.11656 14.2495 3.08976C14.2596 3.06296 14.2745 3.0396 14.2932 3.02119C14.312 3.00278 14.3342 2.98974 14.3585 2.98292C14.5262 2.93259 14.6825 2.95775 14.8274 3.05841C14.8768 3.09244 14.9169 3.14393 14.9438 3.20779C14.9707 3.27164 14.9835 3.34566 14.9809 3.42254C14.907 5.26983 14.8814 7.11713 14.9041 8.96443C14.9041 9.00291 14.8672 9.28415 14.7933 9.80814C14.7393 10.2078 14.8828 10.5098 15.2238 10.714C15.3404 10.7851 15.3361 10.8443 15.2111 10.8917C13.7077 11.4571 12.1063 11.3742 10.4069 10.643C7.1871 9.26047 4.87525 10.2034 3.47138 13.4717C3.32645 13.8062 3.42307 13.9231 3.76125 13.8225C5.76475 13.2274 7.80804 13.1327 9.89111 13.5383C11.2438 13.8017 12.669 13.8151 14.1667 13.5782C14.3343 13.5516 14.3642 13.6064 14.2562 13.7425C13.9891 14.0741 13.648 14.2266 13.2331 14.1999C12.9234 14.1822 12.7614 14.1733 12.7472 14.1733C11.3547 14.2058 10.2989 14.1673 9.57993 14.0578C7.56506 13.747 5.58145 13.9808 3.6291 14.7594C3.13746 14.9548 3.12468 15.1798 3.59074 15.4344C5.76191 16.6304 8.0766 17.2817 10.5348 17.3883C11.7653 17.4416 12.7443 17.3098 13.4718 16.9931C14.4182 16.5816 15.2082 15.8903 15.8419 14.9193C17.0014 13.1342 17.4376 11.1862 17.1506 9.07544C16.8664 6.97355 16.7144 5.68281 16.6945 5.20322C16.5808 2.69872 15.4782 1.2496 13.3866 0.855861C12.858 0.755207 12.4161 0.818855 12.0609 1.04681C11.4186 1.46126 11.4442 2.06667 12.1376 2.86302Z" fill="#D92531"/>
</svg>
`,
    },
    {
      id: "visa",
      label: "Pay with Visa Card",
      img: `<svg width="30" height="13" viewBox="0 0 38 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.30039 12.8841H6.08097L3.66679 2.8104C3.5522 2.34701 3.3089 1.93735 2.95101 1.74427C2.05786 1.25905 1.07367 0.872896 0 0.678138V0.290301H5.18624C5.90202 0.290301 6.43885 0.872896 6.52833 1.54951L7.78094 8.816L10.9988 0.290301H14.1287L9.30039 12.8841ZM15.9183 12.8841H12.8778L15.3815 0.290301H18.422L15.9183 12.8841ZM22.3556 3.77931C22.4451 3.10102 22.9819 2.71318 23.6082 2.71318C24.5924 2.6158 25.6645 2.81056 26.5592 3.29409L27.096 0.582595C26.2013 0.194758 25.2171 0 24.324 0C21.373 0 19.2256 1.74443 19.2256 4.16547C19.2256 6.00727 20.7467 6.97435 21.8203 7.55694C22.9819 8.13786 23.4293 8.52569 23.3398 9.10661C23.3398 9.97798 22.4451 10.3658 21.5519 10.3658C20.4782 10.3658 19.4046 10.0754 18.422 9.59015L17.8851 12.3033C18.9588 12.7869 20.1204 12.9816 21.194 12.9816C24.5029 13.0773 26.5592 11.3346 26.5592 8.71877C26.5592 5.42468 22.3556 5.2316 22.3556 3.77931ZM37.1996 12.8841L34.7855 0.290301H32.1923C31.6555 0.290301 31.1187 0.678138 30.9397 1.25905L26.4693 12.8841H29.5992L30.224 11.044H34.0697L34.4276 12.8841H37.1996ZM32.6402 3.68147L33.5334 8.42785H31.0297L32.6402 3.68147Z" fill="#28356A"/>
</svg>
`,
    },
    {
      id: "discover",
      label: "Pay with Discover Card",
      img: `<svg width="30" height="10" viewBox="0 0 49 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.8794 0.188496C46.6569 0.188496 47.6345 1.01072 47.6345 2.56381C47.7233 3.75147 46.9235 4.75641 45.857 4.93913L48.2566 8.31938H46.3903L44.3462 5.03048H44.1685V8.31938H42.6576V0.188496H44.8794ZM44.1682 3.93436H44.6126C45.5902 3.93436 46.0345 3.47757 46.0345 2.65534C46.0345 1.92448 45.5902 1.46769 44.6126 1.46769H44.1682V3.93436ZM37.4147 8.31944H41.6806V6.94907H38.9256V4.75647H41.5917V3.3861H38.9256V1.55893H41.6806V0.188557H37.4147V8.31944ZM32.9719 5.67005L30.9279 0.188557H29.3282L32.6165 8.50215H33.4163L36.7046 0.188557H35.1049L32.9719 5.67005ZM14.9303 4.29995C14.9303 6.58391 16.7078 8.50243 18.9296 8.50243C19.6405 8.50243 20.2626 8.31972 20.8847 8.04564V6.21848C20.4404 6.76663 19.8183 7.13206 19.1073 7.13206C17.6854 7.13206 16.53 6.03576 16.53 4.57403V4.39131C16.4411 2.92958 17.5965 1.65056 19.0184 1.5592C19.7294 1.5592 20.4404 1.92464 20.8847 2.47278V0.645619C20.3515 0.280186 19.6405 0.188828 19.0184 0.188828C16.7078 0.00611108 14.9303 1.92464 14.9303 4.29995ZM12.1763 3.29467C11.2876 2.92924 11.021 2.74652 11.021 2.28973C11.1099 1.74158 11.5542 1.28479 12.0875 1.37615C12.5318 1.37615 12.9762 1.65022 13.3317 2.01565L14.1315 0.919354C13.5094 0.371204 12.7096 0.00577081 11.9097 0.00577081C10.6655 -0.0855875 9.59904 0.919354 9.51017 2.19837V2.28973C9.51017 3.38603 9.95453 4.02554 11.3765 4.48233C11.732 4.57369 12.0875 4.7564 12.4429 4.93912C12.7096 5.12184 12.8873 5.39591 12.8873 5.76134C12.8873 6.40085 12.3541 6.949 11.8208 6.949H11.732C11.021 6.949 10.3989 6.49221 10.1323 5.8527L9.15468 6.85764C9.68791 7.86258 10.7544 8.41073 11.8208 8.41073C13.2428 8.50209 14.3981 7.40579 14.487 5.94406V5.66998C14.3981 4.57369 13.9538 4.02554 12.1763 3.29467ZM7.02162 8.31944H8.53244V0.188557H7.02162V8.31944ZM0 0.188557H2.2218H2.66616C4.79908 0.279916 6.48765 2.10708 6.39877 4.29968C6.39877 5.48734 5.86554 6.58364 4.97682 7.40586C4.17698 8.04537 3.19939 8.4108 2.2218 8.31944H0V0.188557ZM1.95496 6.94818C2.66594 7.03954 3.46578 6.76547 3.99902 6.30867C4.53225 5.76052 4.79886 5.02966 4.79886 4.20743C4.79886 3.47657 4.53225 2.7457 3.99902 2.19755C3.46578 1.74076 2.66594 1.46668 1.95496 1.55804H1.5106V6.94818H1.95496Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.4182 0C23.1964 0 21.3301 1.82717 21.3301 4.20248C21.3301 6.48644 23.1075 8.40496 25.4182 8.49632C27.7289 8.58768 29.5063 6.66915 29.5952 4.29384C29.5063 1.91852 27.7289 0 25.4182 0V0Z" fill="#FD6020"/>
</svg>
`,
    },
    {
      id: "master",
      label: "Pay with Master Card",
      img: `<svg width="30" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.572 8.3822C16.572 13.0116 12.8622 16.7644 8.28601 16.7644C3.70977 16.7644 0 13.0116 0 8.3822C0 3.75284 3.70977 0 8.28601 0C12.8622 0 16.572 3.75284 16.572 8.3822Z" fill="#ED0006"/>
<path d="M27.322 8.3822C27.322 13.0116 23.6122 16.7644 19.036 16.7644C14.4598 16.7644 10.75 13.0116 10.75 8.3822C10.75 3.75284 14.4598 0 19.036 0C23.6122 0 27.322 3.75284 27.322 8.3822Z" fill="#2F80ED"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6612 2.00244C15.4428 3.53989 16.5725 5.82759 16.5725 8.3822C16.5725 10.9368 15.4428 13.2245 13.6612 14.762C11.8797 13.2245 10.75 10.9368 10.75 8.3822C10.75 5.82759 11.8797 3.53989 13.6612 2.00244Z" fill="#6C6BBD"/>
</svg>
`,
    },
  ];

  return (
    <>
      <Box
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            maxWidth: { lg: "1150px", md: "880px", sm: "750px", xs: "400px" },
            minWidth: { lg: "1170px", md: "900px", sm: "750px", xs: "380px" },
            display: "flex",
            justifyContent: "flex-start",
            ml: { lg: "-100px", xs: "0" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              p: { xs: "15px", sm: "15px", md: "20px" },
            }}
          >
            <IconButton
              sx={{
                width: { xs: "48px", sm: "56px" },
                height: { xs: "48px", sm: "56px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20%",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <ArrowBackIosIcon
                sx={{
                  fontSize: "24px",
                  ml: "7px",
                }}
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "28px", md: "26px" },
                fontWeight: "700",
              }}
            >
              Checkout
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { lg: "40px", md: "40px", sm: "24px", xs: "2px" },
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            maxWidth: { lg: "1170px", md: "900px", sm: "750px", xs: "400px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              gap: "40px",
              mb: { sm: "350px", md: "0", xs: "0", lg: "0" },
            }}
          >
            {/*paper 1 of billing address*/}
            <Paper
              elevation={0}
              sx={{
                padding: "16px",
                width: { lg: "560px", md: "480px", sm: "370px", xs: "345px" },
                height: { lg: "408px", md: "408px", sm: "386px", xs: "350px" },
                margin: "0 auto",
                borderRadius: "24px",
                gap: "40px",
                display: "flex",
              }}
            >
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  width: "720px",
                  height: "264px",
                  gap: "12px",
                }}
              >
                <Box
                  sx={{
                    width: {
                      lg: "620px",
                      md: "450px",
                      sm: "283px",
                      xs: "300px",
                    },
                    height: "48px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      height: "48px",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Billing Address
                  </Typography>
                </Box>
                <TextField
                  label="Name"
                  margin="normal"
                  value={user?.name}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true, // Makes the field read-only
                  }}
                  InputLabelProps={{
                    sx: {
                      position: "absolute",
                      top: "-10px",
                      left: "16px",
                      fontSize: "14px",
                      // color: "#757575",
                      background: "white",
                      padding: "0 4px",
                      transform: "translate(0, 0)",
                      pointerEvents: "none",
                      "&.Mui-focused": {
                        color: "grey",
                      },
                    },
                  }}
                  placeholder="" // Empty placeholder since the label acts as one
                  sx={{
                    width: {
                      lg: "530px",
                      md: "450px",
                      sm: "335px",
                      xs: "313px",
                    },
                    height: { lg: "64px", md: "64px", sm: "56px", xs: "63px" },
                    backgroundColor: "#F8F8F8",
                    borderRadius: "12px",
                    paddingLeft: "14px",
                    paddingRight: "10px",
                    position: "relative",
                    fontSize: "50px",
                  }}
                />

                <TextField
                  label="Phone"
                  value={user?.mobile}
                  margin="normal"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: "true",
                  }}
                  InputLabelProps={{
                    sx: {
                      position: "absolute",
                      top: "-10px",
                      left: "16px",
                      fontSize: "14px",
                      background: "white",
                      padding: "0 4px",
                      transform: "translate(0, 0)",
                      pointerEvents: "none",
                      "&.Mui-focused": {
                        color: "grey",
                      },
                    },
                  }}
                  // placeholder="" // Empty placeholder since the label acts as one
                  sx={{
                    width: {
                      lg: "530px",
                      md: "450px",
                      sm: "335px",
                      xs: "313px",
                    },
                    height: { lg: "64px", md: "64px", sm: "56px", xs: "63px" },
                    backgroundColor: "#F8F8F8", // Subtle grey background
                    borderRadius: "12px", // Rounded edges
                    paddingLeft: "14px", // Spacing inside the input
                    paddingRight: "10px", // Spacing inside the input
                    position: "relative", // To keep the label aligned
                    fontSize: "16px", // Adjusted font size
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                      {
                        WebkitAppearance: "none", // Hides the spinner in Webkit browsers (Chrome, Safari)
                        margin: 0,
                      },
                    "& input[type='number']": {
                      MozAppearance: "textfield", // Hides the spinner in Firefox
                    },
                  }}
                />

                <TextField
                  label="City"
                  margin="normal"
                  variant="standard"
                  value={city}
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true, // Makes the field read-only
                  }}
                  InputLabelProps={{
                    sx: {
                      position: "absolute",
                      top: "-10px",
                      left: "16px",
                      fontSize: "14px",
                      // color: "#757575",
                      background: "white",
                      padding: "0 4px",
                      transform: "translate(0, 0)",
                      pointerEvents: "none",
                      "&.Mui-focused": {
                        color: "grey",
                      },
                    },
                  }}
                  placeholder="" // Empty placeholder since the label acts as one
                  sx={{
                    width: {
                      lg: "530px",
                      md: "450px",
                      sm: "335px",
                      xs: "313px",
                    },
                    height: { lg: "64px", md: "64px", sm: "56px", xs: "63px" },
                    backgroundColor: "#F8F8F8", // Subtle grey background
                    borderRadius: "12px", // Rounded edges
                    paddingLeft: "14px", // Spacing inside the input
                    paddingRight: "10px", // Spacing inside the input
                    position: "relative", // To keep the label aligned
                    fontSize: "50px", // Text font size
                  }}
                />
              </Box>
            </Paper>

            {/* paper 2 (Payment Method )*/}
            <Paper
              elevation={0}
              sx={{
                padding: "16px",
                width: { lg: "560px", md: "480px", sm: "370px", xs: "345px" },
                height: "500px",
                margin: "0 auto",
                borderRadius: "24px",
              }}
            >
              <Box component="form" noValidate autoComplete="off">
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "16px",
                  }}
                >
                  Payment Method
                </Typography>

                {paymentOptions.map((option) => (
                  <Box
                    key={option.id}
                    onClick={() => handleSelection(option.id)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "8px 16px",
                      border: "1px solid",
                      borderColor:
                        selectedPayment === option.id ? "#D92531" : "#e0e0e0",
                      borderRadius: "8px",
                      backgroundColor:
                        selectedPayment === option.id ? "#FAE9EA" : "#F8F8F8",
                      width: {
                        lg: "530px",
                        md: "450px",
                        sm: "335px",
                        xs: "315px",
                      },
                      height: "64px",
                      mt: "8px",
                      cursor: "pointer",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Radio
                      checked={selectedPayment === option.id}
                      onChange={() => handleSelection(option.id)}
                      sx={{
                        color: "#D92531",
                        "&.Mui-checked": { color: "#D92531" },
                      }}
                    />
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      {option.label}
                    </Typography>
                    <Box
                      sx={{
                        border: "2px solid #e0e0e0",
                        borderRadius: "10%",
                        backgroundColor: "#fff",
                        padding: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { sm: "50px" },
                        height: { sm: "45px" },
                      }}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: option.img }}
                        // style={{ marginLeft: "8px" }}
                      />
                    </Box>
                  </Box>
                ))}

                <Box
                  sx={{
                    display: "flex",
                    // alignItems: "center",
                    paddingTop: "40px",
                  }}
                >
                  <LockIcon sx={{ color: "red", flexShrink: 0 }} />
                  <Typography sx={{ marginLeft: "8px" }}>
                    We protect your payment information using encryption to
                    provide bank-level security.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { xs: "28px", sm: "0", md: "0", lg: "0" },
              height: "auto",
              gap: "40px",
              mb: { sm: "210px", md: "0", xs: "0", lg: "0" },
            }}
          >
            {/*paper 1 of items list*/}
            <CheckoutRightComponent couponData={couponData} />

            {/*paper 2 of 2nd container free plan*/}

            {freePlan && (
              <Paper
                elevation={0}
                sx={{
                  padding: "16px",
                  width: { lg: "560px", md: "480px", sm: "331px", xs: "345px" },
                  height: isCollapsed ? "auto" : "164px", // Adjust height dynamically
                  margin: "0 auto",
                  borderRadius: "24px",
                  gap: "40px",
                  border: "1px solid green",
                  top: "24px",
                  right: "32px",
                  bottom: "40px",
                  left: "32px",
                  background: "#CCFFDB",
                }}
              >
                <Box
                  sx={{
                    height: "48px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      height: "48px",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Free Plan
                  </Typography>
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      cursor: "pointer", // Add cursor pointer for better UX
                    }}
                    onClick={toggleCollapse} // Add toggle logic
                  >
                    {isCollapsed ? (
                      <KeyboardArrowDownIcon sx={{ fontSize: "35px" }} />
                    ) : (
                      <KeyboardArrowUpIcon sx={{ fontSize: "35px" }} />
                    )}
                  </Box>
                </Box>
                {!isCollapsed && ( // Conditionally render this content
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: "30px",
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        marginRight: "8px",
                        color: "#333",
                      }}
                    >
                      Gift free plan Amount
                    </Typography>
                    <Box
                      sx={{
                        flexGrow: 1,
                        height: "1px",
                        backgroundColor: "#e0e0e0",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        marginLeft: "8px",
                        color: "#333",
                      }}
                    >
                      0 SAR
                    </Typography>
                  </Box>
                )}
              </Paper>
            )}

            {/*paper 3 of apply couon*/}

            <Paper
              elevation={0}
              sx={{
                padding: "16px",
                width: { lg: "560px", md: "480px", sm: "331px", xs: "345px" },
                height: isCollapsed1 ? "auto" : "164px", // Adjust height dynamically
                margin: "0 auto",
                borderRadius: "24px",
                gap: "40px",
                top: "24px",
                right: "32px",
                bottom: "40px",
                left: "32px",
              }}
            >
              <Box
                sx={{
                  height: "48px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    height: "48px",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Discounts
                </Typography>
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    cursor: "pointer", // Add cursor pointer for better UX
                  }}
                  onClick={toggleCollapse1} // Toggle logic
                >
                  {isCollapsed1 ? (
                    <KeyboardArrowDownIcon sx={{ fontSize: "35px" }} />
                  ) : (
                    <KeyboardArrowUpIcon sx={{ fontSize: "35px" }} />
                  )}
                </Box>
              </Box>
              {!isCollapsed1 && ( // Conditionally render this content
                <Box
                  sx={{
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "8px",
                    // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    mt: "16px", // Add margin top for spacing
                  }}
                >
                  <TextField
                    label="Apply Coupon"
                    margin="normal"
                    variant="standard"
                    value={code}
                    error={couponError ? true : false}
                    helperText={couponError}
                    onChange={(e) => setCode(e.target.value)}
                    InputProps={{
                      disableUnderline: true, // Removes underline/border
                    }}
                    InputLabelProps={{
                      sx: {
                        position: "absolute",
                        top: "-10px", // Label positioned slightly above the field
                        left: "16px", // Aligned slightly to the right
                        fontSize: "14px", // Small, clean font size
                        background: "white", // Matches the input field background
                        padding: "0 4px", // Adds spacing around the label
                        transform: "translate(0, 0)", // Ensures no extra shifting
                        pointerEvents: "none", // Prevents interaction with the label
                        "&.Mui-focused": {
                          color: "grey", // Label color remains consistent
                        },
                      },
                    }}
                    placeholder="" // No placeholder since the label acts as one
                    sx={{
                      width: {
                        lg: "530px",
                        md: "450px",
                        sm: "335px",
                        xs: "313px",
                      },
                      height: {
                        lg: "64px",
                        md: "64px",
                        sm: "56px",
                        xs: "63px",
                      },
                      border: couponError ? "1px solid red" : "none",
                      backgroundColor: "#F8F8F8", // Subtle grey background
                      borderRadius: "12px", // Smooth rounded edges
                      paddingLeft: "14px", // Spacing inside the input field
                      paddingRight: "10px", // Spacing inside the input field
                      fontSize: "16px", // Adjusted text font size
                      display: "flex",
                      // alignItems: "center", // Centers text vertically
                      position: "relative", // To keep the label aligned
                    }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      width: { lg: "193px", md: "193px", sm: "80px", xs: "" },
                      height: "60px",
                      marginLeft: "8px",
                      border: code ? "0.5px solid red" : "none",
                      backgroundColor: "white",
                      color: "#D92531",
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: "bold",
                      borderRadius: "10px",
                    }}
                    onClick={() => handleCoupon()}
                    disabled={!code} // Disable button if no code is entered
                  >
                    Apply
                  </Button>
                </Box>
              )}
            </Paper>

            {/* paper 4 of additional comments */}

            <Paper
              elevation={0}
              sx={{
                padding: "16px",
                width: { lg: "560px", md: "480px", sm: "331px", xs: "345px" },
                height: "auto",
                margin: "0 auto",
                borderRadius: "24px",
                gap: "40px",
                top: "24px",
                right: "32px",
                bottom: "40px",
                left: "32px",
              }}
            >
              <Box
                sx={{
                  height: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    mb: "8px", // Add space below the heading
                  }}
                >
                  Additional Comments
                </Typography>
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    cursor: "pointer",
                  }}
                  onClick={toggleComments}
                >
                  {collapsedComments ? (
                    <KeyboardArrowDownIcon sx={{ fontSize: "35px" }} />
                  ) : (
                    <KeyboardArrowUpIcon sx={{ fontSize: "35px" }} />
                  )}
                </Box>
              </Box>
              {!collapsedComments && (
                <Box
                  sx={{
                    mt: "0px",
                    width: "100%", // Ensures full width
                  }}
                >
                  <TextField
                    label="Comments"
                    margin="normal"
                    variant="standard"
                    multiline
                    rows={3} // Initial rows to display
                    InputProps={{
                      disableUnderline: true, // Removes underline/border
                    }}
                    InputLabelProps={{
                      sx: {
                        position: "absolute",
                        top: "-10px",
                        left: "16px",
                        fontSize: "14px",
                        background: "white", // Matches input field background
                        padding: "0 4px",
                        transform: "translate(0, 0)", // No extra shifts
                        pointerEvents: "none", // Prevent interaction
                        "&.Mui-focused": {
                          color: "grey", // Label color on focus
                        },
                      },
                    }}
                    placeholder="" // Empty placeholder since the label acts as one
                    sx={{
                      width: {
                        lg: "530px",
                        md: "450px",
                        sm: "335px",
                        xs: "313px",
                      },
                      minHeight: {
                        lg: "64px",
                        md: "64px",
                        sm: "56px",
                        xs: "63px",
                      },
                      backgroundColor: "#F8F8F8", // Subtle grey background
                      borderRadius: "12px", // Rounded edges
                      paddingLeft: "14px", // Spacing inside the input
                      paddingRight: "10px", // Spacing inside the input
                      position: "relative", // To keep the label aligned
                      fontSize: "16px", // Text font size
                    }}
                  />
                </Box>
              )}
            </Paper>
          </Box>
        </Box>
        <Box
          sx={{
            height: "136px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: { lg: "220px", md: "220px", sm: "600px", xs: "345px" },
              height: "65px",
              borderRadius: "16px",
              background: "#D92531",
              color: "white",
              fontSize: "22px",
              fontWeight: "400",
            }}
          >
            Pay bill now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
