import React from "react";
import TopSection from "./section";
import "../css/base.css";
import "../css/element.css";
import "../css/media.css";
import "../css/header.css";
import "../css/main.css";

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
                <TopSection/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
