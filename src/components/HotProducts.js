import React from "react";

import "../css/base.css";

function HotProducts() {
  return (
    <div
      className="
                      elementor-column
                      elementor-col-50
                      elementor-top-column
                      elementor-element
                      elementor-element-9a40b7e
                    "
      data-id="9a40b7e"
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className="
                          elementor-element
                          elementor-element-c9a2835
                          elementor-widget
                          elementor-widget-bacola-deal-carousel
                        "
          data-id="c9a2835"
          data-element_type="widget"
          data-widget_type="bacola-deal-carousel.default"
        >
          <div className="elementor-widget-container">
            <div className="site-module module-hot-product">
              <div className="module-header">
                <div className="column">
                  <h4 className="entry-title">
                    HOT PRODUCT FOR <span>THIS WEEK</span>
                  </h4>
                  <div className="entry-description">
                    Dont miss this opportunity at a special discount just for
                    this week.
                  </div>
                </div>
                <div className="column">
                  <a
                    href="#"
                    className="
                                    button button-info-default
                                    xsmall
                                    rounded
                                  "
                  >
                    View All
                    <i className="klbth-icon-right-arrow"></i>
                  </a>
                </div>
              </div>
              <div className="module-body">
                <div className="hot-product products">
                  <div className="product">
                    <div className="hot-sale">19%</div>
                    <div className="product-wrapper">
                      <div className="thumbnail-wrapper">
                        <a
                          href="#"
                          title="Chobani Complete Vanilla Greek Yogurt"
                        >
                          <img
                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50.jpg"
                            alt="Chobani Complete Vanilla Greek Yogurt"
                          />
                        </a>
                      </div>
                      <div className="content-wrapper">
                        <div className="hot-product-header">
                          <span className="price">
                            <del aria-hidden="true">
                              <span
                                className="
                                                woocommerce-Price-amount
                                                amount
                                              "
                              >
                                <bdi>
                                  <span
                                    className="
                                                    woocommerce-Price-currencySymbol
                                                  "
                                  >
                                    &#36;
                                  </span>
                                  5.49
                                </bdi>
                              </span>
                            </del>
                            <ins>
                              <span
                                className="
                                                woocommerce-Price-amount
                                                amount
                                              "
                              >
                                <bdi>
                                  <span
                                    className="
                                                    woocommerce-Price-currencySymbol
                                                  "
                                  >
                                    &#36;
                                  </span>
                                  4.49
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                        <h3 className="product-title">
                          <a href="#">
                            Chobani Complete Vanilla Greek Yogurt
                          </a>
                        </h3>
                        <div className="product-meta">
                          <div className="product-unit">1 kg</div>
                          <div className="product-available in-stock">In Stock</div>
                        </div>
                        <div className="product-progress">
                          <span className="progress" style={{width: "77%"}}></span>
                        </div>
                        <div className="product-expired">
                          <div className="countdown" data-date="2021/12/11">
                            <div className="count-item days"></div>
                            <span>:</span>
                            <div className="count-item hours"></div>
                            <span>:</span>
                            <div className="count-item minutes"></div>
                            <span>:</span>
                            <div className="count-item second"></div>
                          </div>
                          <div className="expired-text">
                            Remains until the end of the offer
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      title="Chobani Complete Vanilla Greek Yogurt"
                      className="overlay-link"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
                          elementor-element
                          elementor-element-1dbaee9
                          elementor-widget
                          elementor-widget-bacola-text-banner
                        "
          data-id="1dbaee9"
          data-element_type="widget"
          data-widget_type="bacola-text-banner.default"
        >
          <div className="elementor-widget-container">
            <div className="site-module module-purchase-banner">
              <div className="module-body">
                <a href="#">
                  <span className="purchase-text">
                    Super discount for your
                    <strong>first purchase.</strong>
                  </span>
                  <span className="purchase-code">FREE25BAC</span>
                  <span className="purchase-description">
                    Use discount code in checkout!
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotProducts;
