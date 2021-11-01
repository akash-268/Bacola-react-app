import React from "react";

import '../../../../css/base.css';

import BestSellers from "./BestSellersSection/BestSellers";
import BottomTags from "./BottomTags";
import HotProducts from "./HotProducts";
import NewProducts from "./NewProduct";
;

function CentreContent(){
    return(
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
        <BestSellers/>
        <HotProducts/>
        <NewProducts/>
        <BottomTags/>
      </div>
      </div>
    )
}

export default CentreContent;