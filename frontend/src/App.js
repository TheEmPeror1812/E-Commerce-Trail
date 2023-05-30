import "./App.css";
import Header from "./Components/Layout/Header/Header";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import WebFont from "webfontloader";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Home/Home";
import Profile from "./Components/User/Profile.jsx";
import ProductDetails from "./Components/Product/ProductDetails.jsx";
import Products from "./Components/Product/Products";
import Search from "./Components/Product/Search";
import LoginSingUp from "./Components/User/LoginSingUp";
import UpdateProfile from "./Components/User/UpdateProfile.jsx";
import UpdatePassword from "./Components/User/UpdatePassword.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Shipping from "./Components/Cart/Shipping.jsx";
import Payment from "./Components/Payment/Payment";
import ConfirmOrder from "./Components/Cart/ConfirmOrder.jsx";
import { loaduser } from "./Actions/userAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserOptions from "./Components/Layout/Header/UserOptions.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = React.useState("");

  async function getStripeApiKey() {
    const { data } = await axios.post("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
    
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    getStripeApiKey();

    dispatch(loaduser());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginSingUp />} />
        {isAuthenticated && <Route path="/account" element={<Profile />} />}
        {isAuthenticated && (
          <Route path="/me/update" element={<UpdateProfile />} />
        )}
        {isAuthenticated && (
          <Route path="/password/update" element={<UpdatePassword />} />
        )}
        {isAuthenticated && <Route path="/shipping" element={<Shipping />} />}
        {isAuthenticated && (
          <Route path="/order/confirm" element={<ConfirmOrder />} />
        )}
        {isAuthenticated && (
          <Route path="/process/payment" element={<Payment />} />
        )}
        {/* {isAuthenticated && (
          <Route
            path="/process/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
        )} */}

        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
