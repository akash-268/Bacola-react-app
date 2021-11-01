import React from "react";

import "../../css/base.css";
import "../../css/element.css";
import "../../css/media.css";
import "../../css/header.css";
import "../../css/main.css";

import TopSection from "./TopSection/TopSection";
import MidSection from "./MidSection/MidSection";
import BottomSection from "./BottomSection/BottomSection";

const Main = () => {
  return (
    <main id="main" className="site-primary">
      <div className="site-content">
        <div className="homepage-content">
          <div
            data-elementor-type="wp-page"
            data-elementor-id="50"
            className="elementor elementor-50"
            data-elementor-settings="[]"
          >
            <div className="elementor-section-wrap">
              <TopSection />
              <MidSection />
              <BottomSection/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
