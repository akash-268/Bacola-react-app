import React from "react";
import "../../../css/base.css";
import "../../../css/element.css";
import "../../../css/media.css";
import "../../../css/header.css";
import "../../../css/main.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      id="masthead"
      className="site-header desktop-shadow-disable mobile-shadow-enable mobile-nav-enable"
      itemscope="itemscope"
      itemtype="http://schema.org/WPHeader"
    >
      <div className="header-top header-wrapper hide-mobile">
        <div className="container">
          <div className="column column-left">
            <nav className="site-menu horizontal">
              <ul id="menu-top-left" className="menu">
                <li
                  id="menu-item-1893"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1893"
                >
                  <Link to="/about-us">About Us</Link>
                </li>
                <li
                  id="menu-item-1892"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1892"
                >
                  <Link to="/my-account">My account</Link>
                </li>
                <li
                  id="menu-item-1891"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1891"
                >
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li
                  id="menu-item-1890"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1890"
                >
                  <Link to="/order-tracking">Order Tracking</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="column column-right">
            <div className="topbar-notice">
              <i className="klbth-icon-secure"></i>
              <span>100% Secure delivery without contacting the courier</span>
            </div>
            <div className="text-content">
              {" "}
              Need help? Call Us:{" "}
              <a href="#">
                <strong style={{ color: "#2bbef9" }}>+ 0020 500</strong>
              </a>
            </div>
            <div className="header-switchers">
              <nav className="store-language site-menu horizontal">
                <ul id="menu-top-right-1" className="menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1832">
                    <a href="#">English</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1838">
                        <a href="#">English</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1833">
                        <a href="#">Spanish</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1834">
                        <a href="#">German</a>
                      </li>
                    </ul>{" "}
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1835">
                    <a href="#">USD</a>{" "}
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1839">
                        <a href="#">USD</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1836">
                        <a href="#">INR</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1837">
                        <a href="#">GBP</a>
                      </li>
                    </ul>{" "}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
