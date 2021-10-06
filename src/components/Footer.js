import React from "react";
import coupon from "../Assets/coupon.png"
const Footer=()=>{
    return(
        <div className="">
            <div className="row text-white bg-primary align-items-center">
                <div className="col-sm-1"></div>
                <div className="col-sm-5 ">
                    <p>$20 discount for your first order</p>
                    <h1>
                        Join our newsletter and get...

                    </h1>
                    <p>
                        Join our email subscription now to get updates <br/>on promotions and coupons.
                    </p>
                    <div className="d-flex bg-white">
                        <input type="text" className="form-control" placeholder="Recipient's username"
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="d-flex bg-white m-2">
                            <button className="btn btn-primary " type="button">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <img src={coupon} alt="coupon "/>
                </div>
            </div>
            <div className="row p-3 border-bottom">
                <div className="col-sm-3  border-end">
                    Everyday fresh products
                </div>
                <div className="col-sm-3 border-end">
                    Free delivery for order over $70
                </div>
                <div className="col-sm-3 border-end">
                    Daily Mega Discounts
                </div>
                <div className="col-sm-3 border-end">
                    Best price on the market
                </div>
            </div>
            <div className="row justify-content-evenly">
                <div className="col-sm-2">
                    <h5>
                        FRUIT & VEGETABLES

                    </h5>
                    <p>Herbs & Seasonings</p>
                    <p>Fresh Fruits</p>
                    <p>Cuts & Sprouts</p>
                    <p>Exotic Fruits & Veggies</p>
                    <p>Packaged Produce</p>
                    <p>Party Trays</p>
                </div>
                <div className="col-sm-2">
                    <h5>
                        FRUIT & VEGETABLES

                    </h5>
                    <p>Herbs & Seasonings</p>
                    <p>Fresh Fruits</p>
                    <p>Cuts & Sprouts</p>
                    <p>Exotic Fruits & Veggies</p>
                    <p>Packaged Produce</p>
                    <p>Party Trays</p>
                </div><div className="col-sm-2">
                <h5>
                    FRUIT & VEGETABLES

                </h5>
                <p>Herbs & Seasonings</p>
                <p>Fresh Fruits</p>
                <p>Cuts & Sprouts</p>
                <p>Exotic Fruits & Veggies</p>
                <p>Packaged Produce</p>
                <p>Party Trays</p>
            </div><div className="col-sm-2">
                <h5>
                    FRUIT & VEGETABLES

                </h5>
                <p>Herbs & Seasonings</p>
                <p>Fresh Fruits</p>
                <p>Cuts & Sprouts</p>
                <p>Exotic Fruits & Veggies</p>
                <p>Packaged Produce</p>
                <p>Party Trays</p>
            </div><div className="col-sm-2">
                <h5>
                    FRUIT & VEGETABLES

                </h5>
                <p>Herbs & Seasonings</p>
                <p>Fresh Fruits</p>
                <p>Cuts & Sprouts</p>
                <p>Exotic Fruits & Veggies</p>
                <p>Packaged Produce</p>
                <p>Party Trays</p>
            </div>

            </div>
            <div className="row">
                <div className="col-sm-4 ">

                    8 800 555-55
                    Working 8:00 - 22:00
                </div>
                <div className="col-sm-8">
                    Download App on Mobile :
                    15% discount on your first purchase
                </div>

            </div>

        </div>

    )
}
export default Footer;
