import React from "react";

import "../../../../../css/base.css";
import "../../../../../css/element.css";
import "../../../../../css/media.css";
import "../../../../../css/header.css";
import "../../../../../css/main.css";
import HomeCard from "./HomeCard";

function BestSellers(){
    return (
      <>
        <div
          className="
                          elementor-element
                          elementor-element-b85a8e4
                          elementor-widget
                          elementor-widget-bacola-product-carousel
                        "
          data-id="b85a8e4"
          data-element_type="widget"
          data-widget_type="bacola-product-carousel.default"
        >
          <div className="elementor-widget-container">
            <div className="site-module module-carousel">
              <div className="module-header">
                <div className="column">
                  <h4 className="entry-title">Best Sellers</h4>
                  <div className="entry-description">
                    Do not miss the current offers until the end of March.
                  </div>
                </div>
                <div className="column">
                  <a
                    className="
                                    button button-info-default
                                    xsmall
                                    rounded
                                  "
                    href="#"
                  >
                    View All
                    <i className="klbth-icon-right-arrow"></i>
                  </a>
                </div>
              </div>
              
                <div className="row pl-3">
                  <div className="col-sm-12  ">
                    <div className="row border-2 border rounded-2">
                      <HomeCard />
                      <HomeCard />
                      <HomeCard />
                      <HomeCard />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
                          elementor-element
                          elementor-element-2ce0c75
                          elementor-widget
                          elementor-widget-bacola-banner-box2
                        "
          data-id="2ce0c75"
          data-element_type="widget"
          data-widget_type="bacola-banner-box2.default"
        >
          <div className="elementor-widget-container">
            <div className="site-module module-banner wide">
              <div className="module-body">
                <div className="banner-wrapper">
                  <div className="banner-content">
                    <h4 className="sub-text color-info-dark">
                      Always Taking Care
                    </h4>
                    <h3 className="entry-title mini color-text-lighter">
                      In store or online your health &amp; safety is our top
                      priority.
                    </h3>
                  </div>
                  <div className="banner-thumbnail">
                    <img
                      src="https://klbtheme.com/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box2.jpg"
                      alt="banner"
                    />
                  </div>
                  <a href="#" className="overlay-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default BestSellers;