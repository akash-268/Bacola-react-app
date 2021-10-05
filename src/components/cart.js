import React, { useState } from "react";

const Cart = ({ isOpen}) => {
  return (
    isOpen && (
      <div className="cart-dropdown hide">
        <div className="cart-dropdown-wrapper" style={{ zIndex: "" }}>
          <div className="fl-mini-cart-content">
            <div className="cart-empty">
              <div className="empty-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 280.028 280.028"
                  width="280.028"
                  height="80.028"
                >
                  <path
                    className="c-01"
                    d="M35.004 0h210.02v78.758H35.004V0z"
                    fill="#d07c40"
                  />
                  <path
                    className="c-02"
                    d="M262.527 61.256v201.27c0 9.626-7.876 17.502-17.502 17.502H35.004c-9.626 0-17.502-7.876-17.502-17.502V61.256h245.025z"
                    fill="#f4b459"
                  />
                  <path
                    className="c-03"
                    d="M35.004 70.007h26.253V26.253L35.004 0v70.007zm183.767-43.754v43.754h26.253V0l-26.253 26.253z"
                    fill="#f4b459"
                  />{" "}
                  <path
                    className="c-04"
                    d="M61.257 61.256V26.253L17.503 61.256h43.754zm157.514-35.003v35.003h43.754l-43.754-35.003z"
                    fill="#e3911c"
                  />{" "}
                  <path
                    className="c-05"
                    d="M65.632 105.01c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c0-5.25-3.5-8.751-8.751-8.751zm148.764 0c-5.251 0-8.751 3.5-8.751 8.751s3.5 8.751 8.751 8.751 8.751-3.5 8.751-8.751c.001-5.25-3.501-8.751-8.751-8.751z"
                    fill="#cf984a"
                  />
                  <path
                    className="c-06"
                    d="M65.632 121.637c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001-.001.874-6.126 6.124-6.126z"
                    fill="#cf984a"
                  />
                  <path
                    className="c-07"
                    d="M65.632 112.886c5.251 0 6.126 6.126 6.126 6.126 0 39.379 29.753 70.882 68.257 70.882s68.257-31.503 68.257-70.882c0 0 .875-6.126 6.126-6.126s6.126 6.126 6.126 6.126c0 46.38-35.003 83.133-80.508 83.133s-80.508-37.629-80.508-83.133c-.001 0 .874-6.126 6.124-6.126z"
                    fill="#fdfbf7"
                  />
                </svg>
              </div>
              <div className="empty-text">No products in the cart.</div>
            </div>
          </div>
          <div className="cart-noticy">
            {" "}
            We reduce shipping prices to only 2.49 €!
          </div>
        </div>
      </div>
    )
  );
};

export default Cart;
