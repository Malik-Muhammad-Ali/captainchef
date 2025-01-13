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
// const Subscriptions = React.lazy(() =>
//   import("./pages/subscriptions/Subscriptions")
// );
// const Contactus = React.lazy(() => import("./pages/home/Contactus"));
// const Login = React.lazy(() => import("./pages/login/Login"));
// const CreateAccount = React.lazy(() =>
//   import("./pages/createAccount/CreateAccount")
// );
// const ForgotPassword = React.lazy(() =>
//   import("./pages/forgetPassword/ForgotPassword")
// );
// const BarCode = React.lazy(() => import("./pages/barcode/BarCode"));
// const PlanDetails = React.lazy(() => import("./pages/planDetails/PlanDetails"));
// const Plans = React.lazy(() => import("./pages/choosePlan/Plans"));
// const DeliveryAddress = React.lazy(() =>
//   import("./pages/deliveryAddress/DeliveryAddress")
// );
// const RegeneratePassword = React.lazy(() =>
//   import("./pages/regeneratePassword/RegeneratePassword")
// );
// const Checkout = React.lazy(() => import("./pages/checkout/Checkout"));
// const PickupAddress = React.lazy(() =>
//   import("./pages/pickupAddress/PickupAddress")
// );
// const MySubscriptions = React.lazy(() =>
//   import("./pages/mySubscriptions/MySubscriptions")
// );
// const NotRegisterYet = React.lazy(() =>
//   import("./components/notRegisterYet/NotRegisterYet")
// );
// const MyCart = React.lazy(() => import("./components/mycart/MyCart"));
// const AddDeliveryAddress = React.lazy(() =>
//   import("./pages/deliveryAddress/AddDeliveryAddress")
// );
// const PaymentModal = React.lazy(() =>
//   import("./components/paymentModal/PaymentModal")
// );
// const ErrorModal = React.lazy(() =>
//   import("./components/errorModal/ErrorModal")
// );
// const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
// const CityModal = React.lazy(() => import("./components/cityModal/CityModal"));
// const Terms = React.lazy(() => import("./pages/home/Terms"));
// const PrivacyPolicy = React.lazy(() => import("./pages/home/PrivacyPolicy"));

// Pages
import Plans from "./pages/choosePlan/Plans";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Contactus from "./pages/home/Contactus";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/createAccount/CreateAccount";
import ForgotPassword from "./pages/forgetPassword/ForgotPassword";
import BarCode from "./pages/barcode/BarCode";
import PlanDetails from "./pages/planDetails/PlanDetails";
import DeliveryAddress from "./pages/deliveryAddress/DeliveryAddress";
import RegeneratePassword from "./pages/regeneratePassword/RegeneratePassword";
import Checkout from "./pages/checkout/Checkout";
import PickupAddress from "./pages/pickupAddress/PickupAddress";
import MySubscriptions from "./pages/mySubscriptions/MySubscriptions";
import NotRegisterYet from "./components/notRegisterYet/NotRegisterYet";
import MyCart from "./components/mycart/MyCart";
import AddDeliveryAddress from "./pages/deliveryAddress/AddDeliveryAddress";
import Terms from "./pages/home/Terms";
import PrivacyPolicy from "./pages/home/PrivacyPolicy";

// Components
// import SuspenceLoader from "./components/suspenseLoader/SuspenceLoader";
import PaymentModal from "./components/paymentModal/PaymentModal";
import ErrorModal from "./components/errorModal/ErrorModal";
import Navbar from "./components/navbar/Navbar";
import CityModal from "./components/cityModal/CityModal";

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
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Subscriptions />
            </motion.div>
          }
        />
        {/* <Route
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
            
          }
        /> */}
        <Route
          path="/subscriptions"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Subscriptions />
            </motion.div>
          }
        />
        <Route
          path="/subscriptions/category/:categoryId"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Plans />
            </motion.div>
          }
        />
        <Route
          path="/subscriptions/category/:categoryId/plans/:planId"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PlanDetails />
            </motion.div>
          }
        />
        <Route
          path="/login"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Login />
            </motion.div>
          }
        />
        <Route
          path="/createaccount"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CreateAccount />
            </motion.div>
          }
        />
        <Route
          path="/deliveryaddress"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <DeliveryAddress />
            </motion.div>
          }
        />
        <Route
          path="/pickupaddress"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PickupAddress />
            </motion.div>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ForgotPassword />
            </motion.div>
          }
        />
        <Route
          path="/regeneratepassword"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <RegeneratePassword />
            </motion.div>
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
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Checkout />
            </motion.div>
          }
        />
        <Route
          path="/mysubscriptions"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <MySubscriptions />
            </motion.div>
          }
        />
        <Route
          path="/downloadapp"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <BarCode />
            </motion.div>
          }
        />
        <Route
          path="/otp"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <NotRegisterYet />
            </motion.div>
          }
        />
        <Route
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
        />
        <Route
          path="/addDeliveryAddress"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AddDeliveryAddress />
            </motion.div>
          }
        />
        <Route
          path="/payment"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PaymentModal />
            </motion.div>
          }
        />
        <Route
          path="/error"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ErrorModal />
            </motion.div>
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
        <Route
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
        />
        <Route
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
