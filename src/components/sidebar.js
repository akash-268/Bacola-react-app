import React, { useState } from "react";
import "../css/base.css";
import "../css/element.css";
import "../css/media.css";
import "../css/header.css";
import "../css/main.css";

const Sidebar = () => {
  const [close, setClose] = useState(true);
  const closeHandler = () => {
    setClose((prev) => !prev);
  };
  return (
    close && (
      <div className="site-canvas" onClick={closeHandler}>
        <div className="site-scroll">
          <div className="canvas-header">
            <div className="site-brand">
              <a href="#" title="Bacola &#8211; Grocery Market and Food Theme">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-logo.png"
                  width="127"
                  height="34"
                  alt="Bacola &#8211; Grocery Market and Food Theme"
                />
              </a>
            </div>
            <div className="close-canvas">
              <i className="klbth-icon-x"></i>
            </div>
          </div>
          <div className="canvas-main">
            <div className="site-location">
              <a href="#">
                <span className="location-description">Your Location</span>
                <div className="current-location">Select a Location</div>
              </a>
            </div>
            <div className="canvas-title">
              <h6 className="entry-title">Site Navigation</h6>
            </div>
            <nav className="canvas-menu canvas-primary vertical">
              <ul id="menu-menu-1" className="menu">
                <li
                  className="
                  dropdown
                  menu-item menu-item-type-custom menu-item-object-custom
                  current-menu-item current_page_item
                  menu-item-home
                  current-menu-ancestor current-menu-parent
                  menu-item-has-children
                "
                >
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li
                      className="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-home
                      current-menu-item
                      page_item page-item-50
                      current_page_item
                    "
                    >
                      <a href="#">Home 1</a>
                    </li>
                    <li
                      className="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                    >
                      <a href="#">Home 2</a>
                    </li>
                    <li
                      className="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                    >
                      <a href="#">Home 3</a>
                    </li>
                    <li
                      className="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                    >
                      <a href="#">Home 4</a>
                    </li>
                    <li
                      className="
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page
                    "
                    >
                      <a href="#">Home 5</a>
                    </li>
                  </ul>
                </li>
                <li
                  className="
                  dropdown
                  mega-menu
                  menu-item
                  menu-item-type-post_type
                  menu-item-object-page menu-item-has-children
                "
                >
                  <a href="#">
                    <i className="mega-menu"></i> Shop
                  </a>
                  <ul className="sub-menu">
                    <li
                      className="
                      dropdown
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-page menu-item-has-children
                    "
                    >
                      <a href="#">Shop Lists</a>
                      <ul className="sub-menu">
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                        >
                          <a href="#">Shop Default</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Shop Right Sidebar</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Shop Wide</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">List Left Sidebar</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Load More Button</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Infinite Scrolling</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="
                      dropdown
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-product menu-item-has-children
                    "
                    >
                      <a href="#">Product Detail</a>
                      <ul className="sub-menu">
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-product
                        "
                        >
                          <a href="#">Product Default</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-product
                        "
                        >
                          <a href="#">Product Variable</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-product
                        "
                        >
                          <a href="#">Product Grouped</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-product
                        "
                        >
                          <a href="#">Product External</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-product
                        "
                        >
                          <a href="#">Product Downloadable</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-product
                        "
                        >
                          <a href="#">Product With Video</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="
                      dropdown
                      menu-item
                      menu-item-type-post_type
                      menu-item-object-product menu-item-has-children
                    "
                    >
                      <a href="#">Product Types</a>
                      <ul className="sub-menu">
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-product
                        "
                        >
                          <a href="#">Single Type 1</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Single Type 2</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Single Type 3</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Single Type 4</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Thumbnails Left</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Zoom Image</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="
                      dropdown
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-has-children
                    "
                    >
                      <a href="#">Shop Pages</a>
                      <ul className="sub-menu">
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                        >
                          <a href="#">Cart</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                        >
                          <a href="#">Checkout</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                        >
                          <a href="#">My account</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                        >
                          <a href="#">Wishlist</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-post_type
                          menu-item-object-page
                        "
                        >
                          <a href="#">Order Tracking</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="
                      dropdown
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-has-children
                    "
                    >
                      <a href="#">Shop Layouts</a>
                      <ul className="sub-menu">
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Two Columns</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Three Columns</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Three Columns Wide</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Four Columns</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Four Columns Wide</a>
                        </li>
                        <li
                          className="
                          menu-item
                          menu-item-type-custom
                          menu-item-object-custom
                        "
                        >
                          <a href="#">Five Columns wide</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className="
                  menu-item menu-item-type-taxonomy
                  menu-item-object-product_cat
                "
                >
                  <a href="#">
                    <i className="klbth-icon-meat"></i> Meats &amp; Seafood
                  </a>
                </li>
                <li
                  className="
                  menu-item menu-item-type-taxonomy
                  menu-item-object-product_cat
                "
                >
                  <a href="#">
                    <i className="klbth-icon-biscuit"></i> Bakery
                  </a>
                </li>
                <li
                  className="
                  menu-item menu-item-type-taxonomy
                  menu-item-object-product_cat
                "
                >
                  <a href="#">
                    <i className="klbth-icon-cup"></i> Beverages
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="canvas-footer">
            <div className="site-copyright">
              Copyright 2021 © Bacola WordPress Theme. All rights reserved.
              Powered by KlbTheme.
            </div>
            <nav className="canvas-menu canvas-secondary select-language vertical">
              <ul id="menu-top-right" className="menu">
                <li
                  id="menu-item-1832"
                  className="
                  menu-item
                  menu-item-type-custom
                  menu-item-object-custom
                  menu-item-has-children
                  menu-item-1832
                "
                >
                  <a href="#">English</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-1838"
                      className="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-1838
                    "
                    >
                      <a href="#">English</a>
                    </li>
                    <li
                      id="menu-item-1833"
                      className="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-1833
                    "
                    >
                      <a href="#">Spanish</a>
                    </li>
                    <li
                      id="menu-item-1834"
                      className="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-1834
                    "
                    >
                      <a href="#">German</a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-1835"
                  className="
                  menu-item
                  menu-item-type-custom
                  menu-item-object-custom
                  menu-item-has-children
                  menu-item-1835
                "
                >
                  <a href="#">USD</a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-1839"
                      className="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-1839
                    "
                    >
                      <a href="#">USD</a>
                    </li>
                    <li
                      id="menu-item-1836"
                      className="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-1836
                    "
                    >
                      <a href="#">INR</a>
                    </li>
                    <li
                      id="menu-item-1837"
                      className="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-1837
                    "
                    >
                      <a href="#">GBP</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
