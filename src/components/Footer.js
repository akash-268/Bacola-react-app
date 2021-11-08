import React from "react";
import coupon from "../Assets/coupon.png"
import googleButton from "../Assets/googleButton.png";
import appleButton from "../Assets/appleButton.png"
import {GrFacebookOption,AiOutlineTwitter,AiOutlineInstagram,GiMilkCarton,GrDeliver,MdOutlineLocalOffer,AiOutlineDollar,FiPhoneCall} from"react-icons/all";
import "../css/footer.css";
const Footer=()=>{
    return(
        <div className="bg1">
            <div className="row text-white  align-items-center container-fluid color-1">
                <div className="col-sm-2"></div>
                <div className="col-sm-4 px-5 ">
                    <h5>$20 discount for your first order</h5>
                    <h1>
                        Join our newsletter and get...

                    </h1>
                    <p>
                        Join our email subscription now to get updates <br/>on promotions and coupons.
                    </p>
                    <div className="d-flex bg-white rounded-2 align-items-center ">
                        <input type="text" className="form-control border-0 bg-white " placeholder="Your email address"
                               />
                            <button className="btn btn-primary m-1 color-1" type="button">Subscribe</button>

                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={coupon} alt="coupon "/>
                </div>
            </div>
            <div className="container">


            <div className="row py-4 border-bottom">
                <div className="col-sm-3  border-end">
                    <GiMilkCarton size={18} className="me-2"/>
                    Everyday fresh products
                </div>
                <div className="col-sm-3 border-end">
                    <GrDeliver size={18} className="me-2"/>
                    Free delivery for order over $70
                </div>
                <div className="col-sm-3 border-end">
                    <MdOutlineLocalOffer size={18} className="me-2"/>
                    Daily Mega Discounts
                </div>
                <div className="col-sm-3 border-end">
                    <AiOutlineDollar size={18} className="me-2"/>
                    Best price on the market
                </div>
            </div>
            <div className="row justify-content-evenly py-5 my-5">
                <div className="col-sm-2">
                    <h6>
                        FRUIT & VEGETABLES

                    </h6>
                    <p>Herbs & Seasonings</p>
                    <p>Fresh Fruits</p>
                    <p>Cuts & Sprouts</p>
                    <p>Exotic Fruits & Veggies</p>
                    <p>Packaged Produce</p>
                    <p>Party Trays</p>
                </div>
                <div className="col-sm-2">
                    <h6>
                        FRUIT & VEGETABLES

                    </h6>
                    <p>Herbs & Seasonings</p>
                    <p>Fresh Fruits</p>
                    <p>Cuts & Sprouts</p>
                    <p>Exotic Fruits & Veggies</p>
                    <p>Packaged Produce</p>
                    <p>Party Trays</p>
                </div><div className="col-sm-2">
                <h6>
                    FRUIT & VEGETABLES

                </h6>
                <p>Herbs & Seasonings</p>
                <p>Fresh Fruits</p>
                <p>Cuts & Sprouts</p>
                <p>Exotic Fruits & Veggies</p>
                <p>Packaged Produce</p>
                <p>Party Trays</p>
            </div><div className="col-sm-2">
                <h6>
                    FRUIT & VEGETABLES

                </h6>
                <p>Herbs & Seasonings</p>
                <p>Fresh Fruits</p>
                <p>Cuts & Sprouts</p>
                <p>Exotic Fruits & Veggies</p>
                <p>Packaged Produce</p>
                <p>Party Trays</p>
            </div><div className="col-sm-2">
                <h6>
                    FRUIT & VEGETABLES

                </h6>
                <p>Herbs & Seasonings</p>
                <p>Fresh Fruits</p>
                <p>Cuts & Sprouts</p>
                <p>Exotic Fruits & Veggies</p>
                <p>Packaged Produce</p>
                <p>Party Trays</p>
            </div>

            </div>
            <div className="row justify-content-between py-5  border-top">
                <div className="col-sm-4 row">
                    <div className="col-sm-2 text-center pe-0">
                        <FiPhoneCall size={25}/>
                    </div>
                    <div className="col-sm-10">


                    <h5 className="mb-0 fw-bold">8 800 555-55</h5>
 <p>
     Working 8:00 - 22:00
 </p>
                    </div>


                </div>
                <div className="col-sm-7 row">
                    <div className="col-sm-5">
                        <h6 className="mb-0 fw-bold"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download App on Mobile :</h6>
                        <p>15% discount on your first purchase</p>


                    </div>
                    <div className="col-sm-4 d-flex">
                        <button className="btn p-0"><img src={googleButton} alt="googleButton"/></button>
                        <button className="btn  p-0"><img src={appleButton} alt="googleButton"/></button>
                    </div>
                    <div className="col-sm-3 row">
                        <div className="col-sm-4"><GrFacebookOption/></div>
                        <div className="col-sm-4"><AiOutlineTwitter/></div>

                        <div className="col-sm-4"><AiOutlineInstagram/></div>



                    </div>

                </div>
            </div>
                <div className="row">
                    <div className="col-sm-6"><p>
                        Copyright 2021 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.
                    </p></div>
                    <div className="col-sm-6"><p>
                        Privacy Policy

                        Terms and Conditions

                        Cookie

                    </p></div>
                </div>
            </div>

        </div>

    )
}
export default Footer;
