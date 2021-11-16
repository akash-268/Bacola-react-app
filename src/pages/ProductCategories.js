import React from "react";
import Banner from "../Assets/bacola-banner-18.jpg";
import SideBanner from "../Assets/sidebar-banner.gif"
import "../css/ProductCategories.css"
const ProductCategories = ()=>{

    return(
        <div>
            <div className="container">
                <div className="row p-5">
                    <div className="col-sm-3 ">
                        <div className="pb-3">


                            <h5>Product Status</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    In Stock
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    On Sale
                                </label>
                            </div>
                        </div>
                        <img src={SideBanner} alt="sideBanner"/>
                    </div>
                    <div className="col-sm-9">
                        <div className="position-relative">
                            <img src={Banner} alt="banner" />


                            <div className="position-absolute text1">
                                <h3>
                                    Organic Meals Prepared<br/>
                                    Delivered to your Home
                                </h3>
                            </div>
                        </div>
                        <p>No products were found matching your selection.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default ProductCategories;