import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "./pages/home/Home";
import Features from "./pages/features/Features";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Login from "./pages/login/Login";
import CreateAccount from "./pages/createAccount/CreateAccount";
import ForgotPassword from "./pages/forgetPassword/ForgotPassword";
import BarCode from "./pages/barcode/BarCode";
import PlanDetails from "./pages/planDetails/PlanDetails";
import Plans from "./pages/choosePlan/Plans";
import DeliveryAddress from "./pages/deliveryAddress/DeliveryAddress";
import RegeneratePassowrd from "./pages/regeneratePassword/RegeneratePassword";
import Checkout from "./pages/checkout/Checkout";
import PickupAddress from "./pages/pickupAddress/PickupAddress";
import MySubscriptions from "./pages/mySubscriptions/MySubscriptions";
import NotRegisterYet from "./components/notRegisterYet/NotRegisterYet";
import MyCart from "./components/mycart/MyCart";

// Components
import Navbar from "./components/navbar/Navbar";
import CityModal from "./components/cityModal/CityModal";
import AddDeliveryAddress from "./pages/deliveryAddress/AddDeliveryAddress";
import PaymentModal from "./components/paymentModal/PaymentModal";
import ErrorModal from "./components/errorModal/ErrorModal";

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});

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
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/features"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Features />
            </motion.div>
          }
        />
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
              <RegeneratePassowrd />
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
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <CityModal />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
