import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AsideBar from "./components/Header/HeaderTop/asideBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Aboutus from "./pages/Aboutus";
import Myaccount from "./pages/Myaccount";
import Wishlist from "./pages/Wishlist";
import OrderTracking from "./pages/OrderTracking";


const App = () => {
  return (

    <Router>
      <AsideBar />
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about-us">
          <Aboutus />
        </Route>
        <Route exact path="/my-account">
          <Myaccount />
        </Route>
        <Route exact path="/wishlist">
          <Wishlist />
        </Route>
        <Route exact path="/order-tracking">
          <OrderTracking />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
