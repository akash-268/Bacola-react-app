import React from "react";

import "../css/base.css";
import "../css/element.css";
import "../css/media.css";
import "../css/header.css";
import "../css/main.css";

import Cart from "./cart";

const HeaderRight = () => {
  const [touched, setTouched] = React.useState(false);
  const touchedHandler = () => {
    setTouched((prev) => !prev);
  };
  return (
    <div className="column column-right">
      <div className="header-buttons">
        <div className="header-login button-item bordered">
          <a href="#">
            <div className="button-icon">
              <i className="klbth-icon-user"></i>
            </div>
          </a>
        </div>
        <div className="header-cart button-item bordered">
          <a href="#">
            <div className="cart-price">
              <span className="woocommerce-Price-amount amount">
                <bdi>
                  <span className="woocommerce-Price-currencySymbol">
                    &#36;
                  </span>
                  0.00
                </bdi>
              </span>
            </div>
            <div className="button-icon" onPointerOut={touchedHandler}>
              <i className="klbth-icon-shopping-bag"></i>
            </div>
            <span className="cart-count-icon">0</span>
          </a>
          <Cart isOpen={touched} />
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
