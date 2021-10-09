import React from "react";
import banner from "../Assets/banner-box.jpg";
import "../css/HomeComponent.css";
import HomeCard from "../components/HomeCard";
import productOne from "../Assets/product-image-7.jpg"
import TrendingCard from "./TrendingCard";
const HomeComponent=()=>{
  return(
      <div className="container">
          <div className="row ">
              <div className="col-sm-3 image-div p-0 ">
                  <div className="text-div-1 p-3">
                      <p className="text-white">natural foods</p>
                      <h5>Special Organic </h5>
                      <h5>Dummy</h5>
                  </div>

                  <a href="#"><img src={banner} alt="this is the banner image" className="border-5"/></a>
              </div>
              <div className="col-sm-9  ">
                  <h3>BEST SELLERS</h3>
                  <p>Do not miss the current offers until the end of March. </p>
                  <div className="row border-2 border rounded-2">

<HomeCard/>
<HomeCard/>
<HomeCard/>
<HomeCard/>


              </div>


              </div>
          </div>
          <div className="row">
              <div className="col-sm-3 px-4">
                  <h6>Trending Products</h6>
                  <div className="border border-2 ">
                      <TrendingCard/>
                      <TrendingCard/>
                      <TrendingCard/>
                      <TrendingCard/>
                      <TrendingCard/>

                  </div>

              </div>
              <div className="col-sm-9">
                  <h3>NEW PRODUCTS</h3>
                  <p> New products with updated stocks.</p>
                  <div className="row border-2 border rounded-2">

                      <HomeCard/>
                      <HomeCard/>
                      <HomeCard/>
                      <HomeCard/>
                      <HomeCard/>
                      <HomeCard/>
                      <HomeCard/>
                      <HomeCard/>


                  </div>
              </div>

          </div>

      </div>
  );

};

export default HomeComponent;