import React from "react";
import HotProducts from "./HotProducts";
import SideImages from "./SideImages";

function MidSection() {
  return (
    <section
      className="
                  elementor-section
                  elementor-top-section
                  elementor-element
                  elementor-element-057d4fb
                  elementor-reverse-mobile
                  elementor-section-boxed
                  elementor-section-height-default
                  elementor-section-height-default
                "
      data-id="057d4fb"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-extended">
        <SideImages/>
        <HotProducts/>
      </div>
    </section>
  );
}
export default MidSection;
