import React from "react";
import AsideBar from "./components/asideBar";
import Header from "./components/header";
import Footer from "./components/Footer"
import HomeComponent from "./components/HomeComponent";

const App = () => {
  return (
    <div>
      <AsideBar />
      <Header />
        <HomeComponent/>
        <Footer/>
    </div>
  );
};

export default App;
