import React from "react";
import "../../../css/base.css";
import "../../../css/element.css";
import "../../../css/media.css";
import "../../../css/header.css";
import "../../../css/main.css";
import CarouselTab from "./Carousel/Carousel";

const TopSection = () => {
  return (
    <div className="container d-flex justify-content-center mr-4 mt-4">
      <CarouselTab />
    </div>
  );
};

export default TopSection;
