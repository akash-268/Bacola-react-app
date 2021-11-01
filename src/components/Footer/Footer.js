import React from "react";
import coupon from "../../Assets/coupon.png";
import googleButton from "../../Assets/googleButton.png";
import appleButton from "../../Assets/appleButton.png";
import {
  GrFacebookOption,
  AiOutlineTwitter,
  AiOutlineInstagram,
  GiMilkCarton,
  GrDeliver,
  MdOutlineLocalOffer,
  AiOutlineDollar,
} from "react-icons/all";
import "../../css/footer.css";
const Footer = () => {
  return (
    <div className="">
      <div className="row text-white  align-items-center container-fluid color-1">
        <div className="col-sm-2"></div>
        <div className="col-sm-4 px-5 ">
          <p>$20 discount for your first order</p>
          <h1>Join our newsletter and get...</h1>
          <p>
            Join our email subscription now to get updates <br />
            on promotions and coupons.
          </p>
          <div className="d-flex bg-white rounded-2 align-items-center ">
            <input
              type="text"
              className="form-control border-0 bg-white "
              placeholder="Your email address"
            />
            <button className="btn btn-primary m-1 color-1" type="button">
              Subscribe
            </button>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={coupon} alt="coupon " />
        </div>
      </div>
      <div className="container">
        <div className="row p-5 border-bottom">
          <div className="col-sm-3  border-end">
            <GiMilkCarton size={20} />
            Everyday fresh products
          </div>
          <div className="col-sm-3 border-end">
            <GrDeliver size={20} />
            Free delivery for order over $70
          </div>
          <div className="col-sm-3 border-end">
            <MdOutlineLocalOffer size={20} />
            Daily Mega Discounts
          </div>
          <div className="col-sm-3 border-end">
            <AiOutlineDollar size={20} />
            Best price on the market
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-sm-2">
            <h5>FRUIT & VEGETABLES</h5>
            <p>Herbs & Seasonings</p>
            <p>Fresh Fruits</p>
            <p>Cuts & Sprouts</p>
            <p>Exotic Fruits & Veggies</p>
            <p>Packaged Produce</p>
            <p>Party Trays</p>
          </div>
          <div className="col-sm-2">
            <h5>FRUIT & VEGETABLES</h5>
            <p>Herbs & Seasonings</p>
            <p>Fresh Fruits</p>
            <p>Cuts & Sprouts</p>
            <p>Exotic Fruits & Veggies</p>
            <p>Packaged Produce</p>
            <p>Party Trays</p>
          </div>
          <div className="col-sm-2">
            <h5>FRUIT & VEGETABLES</h5>
            <p>Herbs & Seasonings</p>
            <p>Fresh Fruits</p>
            <p>Cuts & Sprouts</p>
            <p>Exotic Fruits & Veggies</p>
            <p>Packaged Produce</p>
            <p>Party Trays</p>
          </div>
          <div className="col-sm-2">
            <h5>FRUIT & VEGETABLES</h5>
            <p>Herbs & Seasonings</p>
            <p>Fresh Fruits</p>
            <p>Cuts & Sprouts</p>
            <p>Exotic Fruits & Veggies</p>
            <p>Packaged Produce</p>
            <p>Party Trays</p>
          </div>
          <div className="col-sm-2">
            <h5>FRUIT & VEGETABLES</h5>
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
            <h6>8 800 555-55</h6>
            <p>Working 8:00 - 22:00</p>
          </div>
          <div className="col-sm-8 row">
            <div className="col-sm-4">
              <h6>Download App on Mobile :</h6>
              <p>15% discount on your first purchase</p>
            </div>
            <div className="col-sm-4 d-flex">
              <button className="btn p-0">
                <img src={googleButton} alt="googleButton" />
              </button>
              <button className="btn  p-0">
                <img src={appleButton} alt="googleButton" />
              </button>
            </div>
            <div className="col-sm-4">
              <GrFacebookOption />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
