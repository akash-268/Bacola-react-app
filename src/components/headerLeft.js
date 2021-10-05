import React, { useState } from "react";
import "../css/base.css";
import Sidebar from "./sidebar";

const HeaderLeft = () => {
  const [clicked, setClicked] = useState(false);
  const sidebarHandler = () => {
    setClicked(prev=>!prev);
  };
  return (
    <>
    {clicked && <Sidebar/>}
    <div className="column column-left">
      <div className="header-buttons hide-desktop">
        <div className="header-canvas button-item">
          {" "}
          <a href="#">
            {" "}
            <i className="klbth-icon-menu-thin" onClick={sidebarHandler}></i>{" "}
          </a>{" "}
        </div>
      </div>
      <div className="site-brand">
        <a href="#" title="Bacola &#8211; Grocery Market and Food Theme">
          {" "}
          <img
            className="desktop-logo hide-mobile"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png"
            width="164"
            height="44"
            alt="Bacola &#8211; Grocery Market and Food Theme"
          />
          <img
            className="mobile-logo hide-desktop"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo-mobile.png"
            alt="Bacola &#8211; Grocery Market and Food Theme"
          />{" "}
          <span className="brand-description">
            Online Grocery Shopping Center
          </span>
        </a>
      </div>
    </div>
    </>
  );
};

export default HeaderLeft;
