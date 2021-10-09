import React from "react";
import dummyImg from "../Assets/dummyimg1.jpg"
const HomeCard=()=>{
    return(
        <div className="col-sm-3 p-3 border-end" >
            <div className="dummy-img-1">
                <img src={dummyImg} alt="img 1"/>
            </div>
            <h6 className="fw-bold">All Natural Italian-Style Chicken Meatballs
            </h6>
            <p>IN STOCK</p>
             <p>*****  1</p>
            <p><del>$7.25</del></p>

                <button className="btn btn-outline-primary rounded-pill px-4 py-2 col-12"> Add to cart</button>





        </div>
    )
}
export default HomeCard;