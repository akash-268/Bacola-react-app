import React, { useState } from "react";
import "../css/base.css";
import { BrowserRouter as Router} from "react-router-dom";

const HeaderBottom = () => {
  const [clicked, setClicked] = useState(false);
  function clickHandler() {
    setClicked((prev) => !prev);
  }
  return (
      <Router>
    <header
      id="masthead"
      className="site-header desktop-shadow-disable mobile-shadow-enable mobile-nav-enable"
      itemscope="itemscope"
      itemtype="http://schema.org/WPHeader"
      style={{ zIndex: "1" }}
    >
      <div className="header-nav header-wrapper hide-mobile">
        <div className="container">
          <div className="all-categories locked">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#all-categories"
              onClick={clickHandler}
            >
              <i className="klbth-icon-menu-thin"></i>
              <span className="text">ALL CATEGORIES</span>
              <div className="description">TOTAL 63 PRODUCTS</div>
            </a>
            {clicked && (
              <div
                className="dropdown-categories collapse show"
                id="all-categories"
              >
                <ul id="menu-sidebar-menu" className="menu-list">
                  <li className="category-parent parent menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children">
                    <a href="#">
                      <i className="klbth-icon-apple-juice"></i> Fruits &amp;
                      Vegetables
                    </a>
                    <ul className="sub-menu">
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Cuts &amp; Sprouts</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="https://klbtheme.com/bacola/product-category/fruits-vegetables/exotic-fruits-veggies/">
                          Exotic Fruits &amp; Veggies
                        </a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Fresh Fruits</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Fresh Vegetables</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Herbs &amp; Seasonings</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Packaged Produce</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Party Trays</a>
                      </li>{" "}
                    </ul>{" "}
                  </li>
                  <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                    <a href="#">
                      <i className="klbth-icon-meat"></i> Meats &amp; Seafood
                    </a>
                  </li>
                  <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                    <a href="#">
                      <i className="klbth-icon-boiled-egg"></i> Breakfast &amp;
                      Dairy
                    </a>
                  </li>
                  <li className="category-parent parent menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children">
                    <a href="#">
                      <i className="klbth-icon-cup"></i> Beverages
                    </a>
                    <ul className="sub-menu">
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Coffee</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Craft Beer</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Drink Boxes &amp; Pouches</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Milk &amp; Plant-Based Milk</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Soda &amp; Pop</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Sparkling Water</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Tea &amp; Kombucha</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Water</a>
                      </li>
                      <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                        <a href="#">Wine</a>
                      </li>{" "}
                    </ul>{" "}
                  </li>
                  <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                    <a href="#">
                      <i className="klbth-icon-biscuit"></i> Breads &amp; Bakery
                    </a>
                  </li>
                  <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                    <a href="#">
                      <i className="klbth-icon-snowflake"></i> Frozen Foods
                    </a>
                  </li>
                  <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                    <a href="#">
                      <i className="klbth-icon-candy"></i> Biscuits &amp; Snacks
                    </a>
                  </li>
                  <li className="category-parent menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                    <a href="#">
                      <i className="klbth-icon-vegan"></i> Grocery &amp; Staples
                    </a>
                  </li>
                  <li className="link-parent menu-item menu-item-type-custom menu-item-object-custom">
                    <a href="#">
                      <i className="bottom"></i> Value of the Day
                    </a>
                  </li>
                  <li className="link-parent menu-item menu-item-type-custom menu-item-object-custom">
                    <a href="#">
                      <i className="bottom"></i> Top 100 Offers
                    </a>
                  </li>
                  <li className="link-parent menu-item menu-item-type-custom menu-item-object-custom">
                    <a href="#">
                      <i className="bottom"></i> New Arrivals
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <nav className="site-menu primary-menu horizontal">
            <ul id="menu-menu-2" className="menu">
              <li className="dropdown menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-50 current_page_item">
                    <a href="#">Home 1</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Home 2</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Home 3</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Home 4</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Home 5</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown mega-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                <a href="#">
                  <i className="mega-menu"></i> Shop
                </a>
                <ul className="sub-menu">
                  <li className="dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                    <a href="#">Shop Lists</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="#">Shop Default</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Shop Right Sidebar</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Shop Wide</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">List Left Sidebar</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Load More Button</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Infinite Scrolling</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children">
                    <a href="#">Product Detail</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-product">
                        <a href="#">Product Default</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product">
                        <a href="#">Product Variable</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product">
                        <a href="#">Product Grouped</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product">
                        <a href="#">Product External</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product">
                        <a href="#">Product Downloadable</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-product">
                        <a href="#">Product With Video</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown menu-item menu-item-type-post_type menu-item-object-product menu-item-has-children">
                    <a href="#">Product Types</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-product">
                        <a href="#">Single Type 1</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Single Type 2</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Single Type 3</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Single Type 4</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Thumbnails Left</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Zoom Image</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                    <a href="#">Shop Pages</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="#">Cart</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="#">Checkout</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="#">My account</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="#">Wishlist</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="#">Order Tracking</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                    <a href="#">Shop Layouts</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Two Columns</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Three Columns</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Three Columns Wide</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Four Columns</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Four Columns Wide</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom">
                        <a href="#">Five Columns wide</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <a href="#">
                  <i className="klbth-icon-meat"></i> Meats &amp; Seafood
                </a>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
                <a href="#">
                  <i className="klbth-icon-biscuit"></i> Bakery
                </a>
              </li>
              <li className="menu-item menu-item-type-taxonomy menu-item-object-product_cat">
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
      </div>
    </header>
      </Router>
  );
};

export default HeaderBottom;
