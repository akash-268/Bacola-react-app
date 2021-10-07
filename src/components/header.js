import React, { useState } from "react";
import HeaderBottom from "./headerBottom";
import HeaderCenter from "./headerCenter";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";
import Navbar from "./navbar";


import "../css/base.css";
import "../css/element.css";
import "../css/media.css";
import "../css/header.css";
import "../css/main.css";

const Header = () => {
  return (
    <>
      <Navbar />
      <header
        id="masthead"
        className="site-header desktop-shadow-disable mobile-shadow-enable mobile-nav-enable"
        itemscope="itemscope"
        itemtype="http://schema.org/WPHeader"
      >
        <div className="header-main header-wrapper">
          <div className="container">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
          </div>
        </div>
      </header>
      <HeaderBottom />
    </>
  );
};

export default Header;
