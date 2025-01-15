import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  Button,
  Modal,
  useMediaQuery,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../store/store";

const PaymentModal = ({
  paymentModal,
  setPaymentModal,
  setShowIframe,
  handlePayment,
  subTotal,
  setPaymentMethod,
  paymentMethod,
  loading,
  setLoading,
}) => {
  const theme = useTheme();
  const { language, user, loginUser } = useAppStore();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery("(max-width:600px)");

  // States
  const [selectedPayment, setSelectedPayment] = useState(null);
  const navigate = useNavigate();
  console.log(subTotal);
  console.log(parseFloat(user?.wallet_balance) < subTotal);
  console.log(selectedPayment);

  const isArabic = language === "ar";
  const paymentOptions = [
    {
      id: "wallet",
      label: { ar: "الدفع عن طريق المحفظة", en: "Pay with Wallet" },
      img: `<svg width="30" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.39716 15.874C1.71512 16.6023 1.25048 17.4726 1.00324 18.4851C0.846936 19.1186 0.588328 19.1882 0.227413 18.6938C-0.107925 18.232 -0.0724017 17.7317 0.333982 17.1929C1.13538 16.139 1.86574 15.0392 2.52505 13.8935C2.53641 13.8757 2.79218 13.3592 3.29235 12.3437C4.31257 10.2714 5.90685 9.26787 8.07517 9.333C8.57818 9.3478 9.48047 9.59055 10.782 10.0613C11.6431 10.3751 12.5624 10.6089 13.54 10.7629C13.6041 10.7734 13.6695 10.7702 13.7323 10.7533C13.7951 10.7364 13.8541 10.7063 13.9055 10.6648C13.957 10.6232 13.9999 10.5711 14.0316 10.5116C14.0633 10.4522 14.0831 10.3866 14.0899 10.3188C14.2889 8.38271 14.3287 6.65975 14.2093 5.14994C14.2042 5.08904 14.1773 5.03193 14.1336 4.98882C14.0899 4.9457 14.0321 4.91939 13.9706 4.91458C11.7738 4.7488 10.8517 3.51283 11.204 1.20667C11.3206 0.451765 11.7113 0.0506291 12.3763 0.0032625C12.6719 -0.0145 13.1521 0.0402676 13.8171 0.167565C15.5023 0.496171 16.5766 1.46274 17.0398 3.06729C17.1535 3.45806 17.2856 4.35359 17.4362 5.75386C17.4391 5.77458 17.5812 6.63902 17.8625 8.34718C18.2007 10.4135 17.9151 12.4177 17.0057 14.3598C15.849 16.8406 13.9066 18.1091 11.1785 18.1654C8.35367 18.2246 5.5374 17.446 2.72966 15.8296C2.67545 15.7988 2.61373 15.7865 2.55377 15.7945C2.49382 15.8025 2.43886 15.8304 2.39716 15.874ZM12.1376 2.86302C12.149 3.03176 12.2143 3.17386 12.3337 3.28932C12.669 3.77483 13.1123 4.08419 13.6637 4.21741C13.7341 4.23538 13.8056 4.23833 13.8728 4.22602C13.9399 4.21372 14.0011 4.18649 14.0516 4.14636C14.3216 3.93617 14.3883 3.64309 14.2519 3.26712C14.2411 3.2381 14.2353 3.20731 14.2349 3.17676C14.2345 3.14621 14.2395 3.11656 14.2495 3.08976C14.2596 3.06296 14.2745 3.0396 14.2932 3.02119C14.312 3.00278 14.3342 2.98974 14.3585 2.98292C14.5262 2.93259 14.6825 2.95775 14.8274 3.05841C14.8768 3.09244 14.9169 3.14393 14.9438 3.20779C14.9707 3.27164 14.9835 3.34566 14.9809 3.42254C14.907 5.26983 14.8814 7.11713 14.9041 8.96443C14.9041 9.00291 14.8672 9.28415 14.7933 9.80814C14.7393 10.2078 14.8828 10.5098 15.2238 10.714C15.3404 10.7851 15.3361 10.8443 15.2111 10.8917C13.7077 11.4571 12.1063 11.3742 10.4069 10.643C7.1871 9.26047 4.87525 10.2034 3.47138 13.4717C3.32645 13.8062 3.42307 13.9231 3.76125 13.8225C5.76475 13.2274 7.80804 13.1327 9.89111 13.5383C11.2438 13.8017 12.669 13.8151 14.1667 13.5782C14.3343 13.5516 14.3642 13.6064 14.2562 13.7425C13.9891 14.0741 13.648 14.2266 13.2331 14.1999C12.9234 14.1822 12.7614 14.1733 12.7472 14.1733C11.3547 14.2058 10.2989 14.1673 9.57993 14.0578C7.56506 13.747 5.58145 13.9808 3.6291 14.7594C3.13746 14.9548 3.12468 15.1798 3.59074 15.4344C5.76191 16.6304 8.0766 17.2817 10.5348 17.3883C11.7653 17.4416 12.7443 17.3098 13.4718 16.9931C14.4182 16.5816 15.2082 15.8903 15.8419 14.9193C17.0014 13.1342 17.4376 11.1862 17.1506 9.07544C16.8664 6.97355 16.7144 5.68281 16.6945 5.20322C16.5808 2.69872 15.4782 1.2496 13.3866 0.855861C12.858 0.755207 12.4161 0.818855 12.0609 1.04681C11.4186 1.46126 11.4442 2.06667 12.1376 2.86302Z" fill="#D92531"/>
</svg>
`,
    },

    {
      id: "master",
      label: { ar: "الدفع باستخدام بطاقة ماستر", en: "Pay with Master Card" },

      img: `<svg width="30" height="17" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.572 8.3822C16.572 13.0116 12.8622 16.7644 8.28601 16.7644C3.70977 16.7644 0 13.0116 0 8.3822C0 3.75284 3.70977 0 8.28601 0C12.8622 0 16.572 3.75284 16.572 8.3822Z" fill="#ED0006"/>
<path d="M27.322 8.3822C27.322 13.0116 23.6122 16.7644 19.036 16.7644C14.4598 16.7644 10.75 13.0116 10.75 8.3822C10.75 3.75284 14.4598 0 19.036 0C23.6122 0 27.322 3.75284 27.322 8.3822Z" fill="#2F80ED"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6612 2.00244C15.4428 3.53989 16.5725 5.82759 16.5725 8.3822C16.5725 10.9368 15.4428 13.2245 13.6612 14.762C11.8797 13.2245 10.75 10.9368 10.75 8.3822C10.75 5.82759 11.8797 3.53989 13.6612 2.00244Z" fill="#6C6BBD"/>
</svg>
`,
    },
  ];

  // handle Payment Method Selection
  const handleSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    setPaymentMethod(paymentMethod);
  };

  const handleModal = () => {
    setPaymentModal(false);
    setLoading(true);
    handlePayment();
    loginUser(user?.mobile);
    if (paymentMethod === "master") {
      setShowIframe(true);
    }
  };

  // payment modal props
  const modalProps = {
    disablePortal: paymentModal,
  };

  // Component
  return (
    <>
      {loading === false ? (
        // Payment Modal
        <Modal open={paymentModal} {...modalProps}>
          <motion.div
            initial={{
              opacity: 0,
              y: isMobile ? "100%" : -20,
            }}
            animate={{
              opacity: 1,
              y: isMobile ? 0 : 0,
            }}
            exit={{
              opacity: 0,
              y: isMobile ? "100%" : -20,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: isMobile ? "100%" : "400px",
              left: isMobile ? 0 : isTablet ? "20%" : "35%",
              bottom: isMobile ? 0 : isTablet ? "10%" : "auto",
              top: isMobile ? "auto" : isTablet ? "25%" : "30%",
              transform: isMobile ? "none" : "translate(-50%, -50%)",
              outline: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignitems: "center",
                justifyContent: "center",
                height: "auto",
                gap: "40px",
                // width: { xs: "100vw" },

                mb: { sm: "350px", md: "0", xs: "0", lg: "0" },
                // border: "1px solid red",
              }}
            >
              {/* paper 2 (Payment Method )*/}
              <Paper
                elevation={0}
                sx={{
                  padding: "16px",
                  width: { lg: "100%", md: "100%", sm: "100%", xs: "92%" },
                  height: "100%",
                  margin: "0 auto",
                  //   borderRadius: "30px",
                  direction: isArabic ? "rtl" : "ltr",
                  borderTopLeftRadius: isMobile ? "10px" : "0px",
                  borderTopRightRadius: isMobile ? "10px" : "20px",
                  borderRadius: isMobile ? "10px 10px 0 0" : "20px",
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
                    {language === "ar" ? "طريقة الدفع" : "Payment Method"}
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
                          lg: "365px",
                          md: "365px",
                          sm: "367px",
                          xs: "auto",
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
                        {isArabic ? option.label.ar : option.label.en}
                        <br />
                        {option.id === 'wallet' && `Wallet Amount: ${parseFloat(user?.wallet_balance)}`}
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
                        />
                      </Box>
                    </Box>
                  ))}
                  <Button
                    sx={{
                      width: "100%",
                      height: "48px",
                      marginTop: "10px",
                      borderRadius: "16px",
                      background:
                        selectedPayment === null
                          ? "gray"
                          : selectedPayment === "wallet" &&
                            parseFloat(user?.wallet_balance) < subTotal
                          ? "gray"
                          : "#D92531",
                      color: "white",
                      fontSize: "22px",
                      fontWeight: "400",
                      textTransform: "none",
                    }}
                    disabled={
                      !selectedPayment ||
                      (selectedPayment === "wallet" &&
                        parseFloat(user?.wallet_balance) < subTotal)
                    }
                    onClick={() => handleModal()}
                  >
                    {language === "en"
                      ? `Pay ${subTotal} Now`
                      : `ادفع ${subTotal} الآن`}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </motion.div>
        </Modal>
      ) : (
        // Loading Modal
        <Modal open={loading} {...modalProps}>
          <motion.div
            initial={{
              opacity: 0,
              y: isMobile ? "100%" : -20,
            }}
            animate={{
              opacity: 1,
              y: isMobile ? 0 : 0,
            }}
            exit={{
              opacity: 0,
              y: isMobile ? "100%" : -20,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: isMobile ? "100%" : "400px",
              left: isMobile ? 0 : isTablet ? "20%" : "35%",
              bottom: isMobile ? 0 : isTablet ? "10%" : "auto",
              top: isMobile ? "auto" : isTablet ? "25%" : "30%",
              transform: isMobile ? "none" : "translate(-50%, -50%)",
              outline: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignitems: "center",
                justifyContent: "center",
                height: "auto",
                gap: "40px",

                mb: { sm: "350px", md: "0", xs: "0", lg: "0" },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: "16px",
                  width: { lg: "100%", md: "100%", sm: "100%", xs: "92%" },
                  height: "100%",
                  margin: "0 auto",
                  direction: isArabic ? "rtl" : "ltr",
                  borderTopLeftRadius: isMobile ? "10px" : "0px",
                  borderTopRightRadius: isMobile ? "10px" : "20px",
                  borderRadius: isMobile ? "10px 10px 0 0" : "20px",
                }}
              >
                <Box component="form" noValidate autoComplete="off">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      marginBottom: "16px",
                      textAlign: "center",
                    }}
                  >
                    Making Payment Please Wait...
                  </Typography>
                  <Loader />
                </Box>
              </Paper>
            </Box>
          </motion.div>
        </Modal>
      )}
    </>
  );
};

export default PaymentModal;
