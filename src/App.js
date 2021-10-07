import React from "react";
import AsideBar from "./components/asideBar";
import Footer from "./components/Footer";
import Header from "./components/header";
import Main from "./components/main";

const App = () => {
  return (
    <div>
      <AsideBar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;
