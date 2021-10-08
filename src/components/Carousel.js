import { Carousel } from "react-bootstrap";
import React from "react";

import "../css/base.css";
import "../css/element.css";
import "../css/media.css";
import "../css/header.css";
import "../css/main.css";

const CarouselTab = () => {
  return (
    <div
      style={{ width: "60%", height: "55%" }}
      className="d-flex justify-content-center"
    >
      <Carousel>
        <Carousel.Item>
          <div className="slider-item">
            <div
              className="content-wrapper position-absolute"
              style={{ zIndex: "1" }}
            >
              <div className="content-header">
                <div className="content-description">Exclusive Offer</div>
                <div className="content-discount">-20% Off</div>
              </div>
              <div className="content-main">
                <h3 className="entry-title">Specialist in the grocery store</h3>
                <div className="content-text">
                  Only this week. Don’t miss...
                </div>
              </div>
              <div className="content-footer">
                <span className="price-text">from </span>
                <span className="price">$7.99</span>
              </div>
              <a
                href="#"
                className="
                                            button button-secondary
                                            rounded
                                          "
              >
                Shop Now
                <i className="klbth-icon-right-arrow"></i>
              </a>
            </div>
            <img
              className="d-block w-100 position-relative"
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="content-wrapper position-absolute"
            style={{ zIndex: "1" }}
          >
            <div className="content-header">
              <div className="content-description">Exclusive Offer</div>
              <div className="content-discount">-30% Off</div>
            </div>
            <div className="content-main">
              <h3 className="entry-title">Feed your family the best</h3>
              <div className="content-text">Only this week. Don’t miss...</div>
            </div>
            <div className="content-footer">
              <span className="price-text">from </span>
              <span className="price">$8.99</span>
            </div>
            <a
              href="#"
              className="
                                            button button-secondary
                                            rounded
                                          "
            >
              Shop Now
              <i className="klbth-icon-right-arrow"></i>
            </a>
          </div>
          <img
            className="d-block w-100 position-relative"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="content-wrapper position-absolute" style={{zIndex:"1"}}>
            <div className="content-header">
              <div className="content-description">Exclusive Offer</div>
              <div className="content-discount">-40% Off</div>
            </div>
            <div className="content-main">
              <h3 className="entry-title">Grocery full of inspiration</h3>
              <div className="content-text">Only this week. Don’t miss...</div>
            </div>
            <div className="content-footer">
              <span className="price-text">from </span>
              <span className="price">$6.99</span>
            </div>
            <a
              href="#"
              className="
                                            button button-secondary
                                            rounded
                                          "
            >
              Shop Now
              <i className="klbth-icon-right-arrow"></i>
            </a>
          </div>
          <img
            className="d-block w-100 position relative"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselTab;
