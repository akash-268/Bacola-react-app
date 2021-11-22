import React from "react";
import "../css/SingleProductView.css"
import SinglePageMain from "../Assets/SinglePageMain.jpg"
import { AiFillHeart,BsArrowDownUp,AiOutlineCheck,FaPinterestP,FaLinkedinIn,AiFillRedditCircle,BsWhatsapp,FaFacebookF,ImTwitter} from 'react-icons/all';
import HomeCard from "../components/Main/MidSection/CentreContent/BestSellersSection/HomeCard";

const SingleProductView =()=>{
    return(
        <div className="SinglePV ">


        <div className="container p-5">
            <div className=" bg-white p-5">
                <h3>All Natural Italian-Style Chicken Meatballs</h3>
                <div className="row col-5">
                    <div className="col-sm-4 d-flex">
                      <p>Brands:</p>
                      <p>welch's</p>
                    </div>
                    <div className="col-sm-4 d-flex">
                        <p>********</p>
                        <p>REVIEW</p>
                    </div>
                    <div className="col-sm-4 d-flex">
                        <p>SKU:</p>
                        <p>HJHJHJHK</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <img/>
                        </div>

                    </div>

                </div>
                <div className="row">
                   <div className="col-sm-4">
                     <img src={SinglePageMain} alt="single page main image "/>

                   </div>
                    <div className="col-sm-5">
                        <div className="d-flex ">
                            <p className="mt-2">$9.35</p>
                            <h3> $7.25</h3>
                        </div>

                        <div className="rounded-pill col-4 p-2 text-center inStock ">
                            IN STOCK

                        </div>
                        <h6>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</h6>
                        <div className="d-flex ">
                            <button className="btn  rounded-circle me-2 countButtons">-</button>
                            <h3 className="">3</h3>
                            <button className="btn  rounded-circle mx-2 countButtons">+</button>
                            <button className="btn  rounded-pill mx-2 addButton">Add to cart</button>


                        </div>
                        <div className="d-flex my-4">
                            <button className="btn AddWishlist btn-outline-primary rounded-pill"><AiFillHeart size={30}/>ADD TO WISHLIST</button>
                            <button className="btn AddWishlist btn-outline-primary border-0 rounded-pill"><BsArrowDownUp/>COMPARE</button>


                        </div>
                        <div className="border-bottom">
                            <p><AiOutlineCheck/>Type: Organic</p>
                            <p><AiOutlineCheck/>MFG: Jun 4.2021c</p>
                            <p><AiOutlineCheck/>LIFE: 30 days</p>

                        </div>
                        <div className="">

                                <div className="d-flex">
                                    <p>Categories:</p><a href="#">Meats & Seafood</a>
                                    <p>Tags:</p><a href="#">chicken, natural, organic</a>

                                </div>
                            <div>

                                <a className="btn rounded-circle FbIcon " href="#!" role="button"
                                ><FaFacebookF /></a>

                                <a className="btn rounded-circle TwIcon"  href="#!" role="button">
                                <ImTwitter/></a>
                                <a className="btn rounded-circle PiIcon"  href="#!" role="button "><FaPinterestP /></a>
                                <a className="btn rounded-circle LiIcon " href="#!" role="button"><FaLinkedinIn/></a>
                                <a className="btn rounded-circle ReIcon" href="#!" role="button"><AiFillRedditCircle/></a>
                                <a className="btn rounded-circle WhIcon" href="#!" role="button"><BsWhatsapp/></a>

                            </div>



                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="rounded-2  CovidDiv">
                            Covid-19 Info: We keep delivering.

                        </div>
                        <div className="rounded-2 CovidDiv my-3">
                            <p>                            Free Shipping apply to all orders over $100
                            </p>
                            <p>                            Guranteed 100% Organic from natural farmas
                            </p>
                            <p>                            1 Day Returns if you change your mind
                            </p>

                        </div>


                    </div>

                </div>

            </div>

        </div>
            <div className="container p-5">
                 <div className=" d-flex bg-white ">
                     <h6 className="mx-2">DESCRIPTION</h6>
                     <h6 className="mx-2">ADDITIONAL INFORMATION </h6>
                     <h6 className="mx-2">REVIEWS(6)</h6>

                 </div>
                <div className="bg-white mt-1">
<p>
    Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.

    Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.

</p>
                </div>

            </div>
            <div className="container ">
                <h3>RELATED PRODUCTS</h3>
                <div className="d-flex">
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                    <HomeCard/>
                </div>


            </div>
        </div>

    )
}


export default SingleProductView;
