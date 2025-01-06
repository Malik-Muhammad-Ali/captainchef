import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useAppStore from "./store/store";
import { CssBaseline } from "@mui/material";
import React, { Suspense } from "react";

// Lazy-loaded pages
import Home from "./pages/home/Home";
const Features = React.lazy(() => import("./pages/features/Features"));
const Subscriptions = React.lazy(() =>
  import("./pages/subscriptions/Subscriptions")
);
const Contactus = React.lazy(() => import("./pages/home/Contactus"));
const Login = React.lazy(() => import("./pages/login/Login"));
const CreateAccount = React.lazy(() =>
  import("./pages/createAccount/CreateAccount")
);
const ForgotPassword = React.lazy(() =>
  import("./pages/forgetPassword/ForgotPassword")
);
const BarCode = React.lazy(() => import("./pages/barcode/BarCode"));
const PlanDetails = React.lazy(() => import("./pages/planDetails/PlanDetails"));
const Plans = React.lazy(() => import("./pages/choosePlan/Plans"));
const DeliveryAddress = React.lazy(() =>
  import("./pages/deliveryAddress/DeliveryAddress")
);
const RegeneratePassword = React.lazy(() =>
  import("./pages/regeneratePassword/RegeneratePassword")
);
const Checkout = React.lazy(() => import("./pages/checkout/Checkout"));
const PickupAddress = React.lazy(() =>
  import("./pages/pickupAddress/PickupAddress")
);
const MySubscriptions = React.lazy(() =>
  import("./pages/mySubscriptions/MySubscriptions")
);
const NotRegisterYet = React.lazy(() =>
  import("./components/notRegisterYet/NotRegisterYet")
);
const MyCart = React.lazy(() => import("./components/mycart/MyCart"));
const AddDeliveryAddress = React.lazy(() =>
  import("./pages/deliveryAddress/AddDeliveryAddress")
);
const PaymentModal = React.lazy(() =>
  import("./components/paymentModal/PaymentModal")
);
const ErrorModal = React.lazy(() =>
  import("./components/errorModal/ErrorModal")
);
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const CityModal = React.lazy(() => import("./components/cityModal/CityModal"));
const Terms = React.lazy(() => import("./pages/home/Terms"));
const PrivacyPolicy = React.lazy(() => import("./pages/home/PrivacyPolicy"));

// Animation Variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/features"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Features />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/subscriptions"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Subscriptions />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/subscriptions/category/:categoryId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Plans />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/subscriptions/category/:categoryId/plans/:planId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <PlanDetails />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Login />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/createaccount"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <CreateAccount />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/deliveryaddress"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <DeliveryAddress />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/pickupaddress"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <PickupAddress />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ForgotPassword />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/regeneratepassword"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <RegeneratePassword />
              </motion.div>
            </Suspense>
          }
        />
        {/* <Route
          path="/cart"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <MyCart />
            </motion.div>
          }
        /> */}
        <Route
          path="/checkout"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Checkout />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/mysubscriptions"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <MySubscriptions />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/downloadapp"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <BarCode />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/otp"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <NotRegisterYet />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <MyCart />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/addDeliveryAddress"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AddDeliveryAddress />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/payment"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <PaymentModal />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/error"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ErrorModal />
              </motion.div>
            </Suspense>
          }
        />
        {/* <Route
          path="/videoModal"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <VideoModal videoId="bHauDmejB5g" />
            </motion.div>
          }
        /> */}
        <Route
          path="/termsandconditions"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Terms />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/privacyPolicy"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <PrivacyPolicy />
              </motion.div>
            </Suspense>
          }
        />
        <Route
          path="/contactus"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Contactus />
              </motion.div>
            </Suspense>
          }
        />
        {/* <Route
          path="/videoModal"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <VideoModal videoId="bHauDmejB5g" />
            </motion.div>
          }
        /> */}
        <Route
          path="/termsandconditions"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Terms />
            </motion.div>
          }
        />
        {/* <Route
          path="/privacyPolicy"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PrivacyPolicy />
            </motion.div>
          }
        /> */}
        {/* <Route
          path="/contactus"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Contactus />
            </motion.div>
          }
        /> */}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { language } = useAppStore();
  const font = language === "en" ? "Poppins" : "NoorRegular";

  // Create a custom theme
  const theme = createTheme({
    typography: {
      // fontFamily: 'Poppins',
      fontFamily: font,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <CityModal />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
