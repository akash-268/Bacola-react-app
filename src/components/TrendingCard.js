import React from "react";
import productOne from "../Assets/product-image-7.jpg";
const TrendingCard=()=>{
    return(
        <div className="p-2">
            <div className="row ">
                <div className="col-sm-4">
                    <a href="#"><img src={productOne} alt="product image"/></a>
                </div>
                <div className="col-sm-8">
                    <p>USDA Choice Angus Beef Stew Meat</p>
                    <p><del>$7.25</del></p>

                </div>

            </div>
        </div>
    )
}
export default TrendingCard