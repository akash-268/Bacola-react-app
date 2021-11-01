import React from "react";
import AsideBar from "./components/Header/Asidebar/asideBar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";
import Main from "./components/Main/main";

const App = () => {
  return (
    <div>
      <AsideBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
