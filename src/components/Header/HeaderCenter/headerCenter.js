import React from "react";
import "../../../css/base.css";
import "../../../css/header.css";
import "../../../css/media.css";
import "../../../css/element.css";
import "../../../css/main.css";

const HeaderCenter = () => {
  return (
    
          <div className="column column-center">
            <div className="header-location site-location hide-mobile">
              <a href="#">
                <span className="location-description">Your Location</span>
                <div className="current-location">Select a Location</div>
              </a>
            </div>
            <div className="header-search">
              <div className="dgwt-wcas-search-wrapp dgwt-wcas-no-submit woocommerce js-dgwt-wcas-layout-classNameic dgwt-wcas-layout-classNameic js-dgwt-wcas-mobile-overlay-enabled">
                <form
                  className="dgwt-wcas-search-form"
                  role="search"
                  action="https://klbtheme.com/bacola/"
                  method="get"
                >
                  <div className="dgwt-wcas-sf-wrapp">
                    <svg
                      version="1.1"
                      className="dgwt-wcas-ico-magnifier"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 51.539 51.361"
                      enable-background="new 0 0 51.539 51.361"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="#444"
                        d="M51.539,49.356L37.247,35.065c3.273-3.74,5.272-8.623,5.272-13.983c0-11.742-9.518-21.26-21.26-21.26 S0,9.339,0,21.082s9.518,21.26,21.26,21.26c5.361,0,10.244-1.999,13.983-5.272l14.292,14.292L51.539,49.356z M2.835,21.082 c0-10.176,8.249-18.425,18.425-18.425s18.425,8.249,18.425,18.425S31.436,39.507,21.26,39.507S2.835,31.258,2.835,21.082z"
                      />
                    </svg>
                    <label
                      className="screen-reader-text"
                      for="dgwt-wcas-search-input-1"
                    >
                      Products search
                    </label>
                    <input
                      id="dgwt-wcas-search-input-1"
                      type="search"
                      className="dgwt-wcas-search-input"
                      name="s"
                      value=""
                      placeholder="Search for products..."
                      autocomplete="off"
                    />
                    <div className="dgwt-wcas-preloader"></div>
                    <input type="hidden" name="post_type" value="product" />
                    <input type="hidden" name="dgwt_wcas" value="1" />
                  </div>
                </form>
              </div>
            </div>
          </div>
  );
};
export default HeaderCenter;
