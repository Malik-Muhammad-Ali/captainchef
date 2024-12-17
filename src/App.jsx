import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// React Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Features from "./pages/features/Features";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import Authentication from "./pages/authentication/Authentication";
import CreateAccount from "./pages/createAccount/CreateAccount";
import ForgotPassword from "./pages/forgetPassword/ForgotPassword";
import BarCode from "./pages/barcode/BarCode";

// Components
import Navbar from "./components/navbar/Navbar";
import PlanDetails from "./pages/planDetails/PlanDetails";
import Plans from "./pages/choosePlan/Plans";
import DeliveryAddress from "./pages/deliveryAddress/DeliveryAddress";
import RegeneratePassowrd from "./pages/regeneratePassword/RegeneratePassword";
import Checkout from "./pages/checkout/Checkout";
import PickupAddress from "./pages/pickupAddress/PickupAddress";
import MySubscriptions from "./pages/mySubscriptions/MySubscriptions";
import NotRegisterYet from "./components/notRegisterYet/NotRegisterYet";

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptions/category/:categoryId" element={<Plans />} />
          <Route
            path="/subscriptions/category/:categoryId/plans/:planId"
            element={<PlanDetails />}
          />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/deliveryaddress" element={<DeliveryAddress />} />
          <Route path="/pickupaddress" element={<PickupAddress />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/regeneratepassword" element={<RegeneratePassowrd />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mysubscriptions" element={<MySubscriptions />} />
          <Route path="/downloadapp" element={<BarCode />} />
          <Route path="/otp" element={<NotRegisterYet />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
