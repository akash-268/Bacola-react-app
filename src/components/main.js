import React from "react";
import TopSection from "./section";
import '../css/base.css';

const Main = () => {
  return (
    <main id="main" class="site-primary">
      <div class="site-content">
        <div class="homepage-content">
          <div
            data-elementor-type="wp-page"
            data-elementor-id="50"
            class="elementor elementor-50"
            data-elementor-settings="[]"
          >
            <div class="elementor-section-wrap">
                <TopSection/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
