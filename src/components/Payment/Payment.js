import React from "react";
import { InputBox } from "./InputBox";
export const Payment=()=>{
    return(
        <div className="payment-box">
            <div className="top-div d-flex justify-content-center pb-5">
                <div className="number">
                    <span className="num">1</span>
                    Sign Up
                </div>

                <div className="number">
                    <span className="num">2</span>
                    Subscribe
                </div>
            </div>
           <h3 className="text-center">Select your subcription plan</h3>
           <InputBox  text="12 Months Subscription"  mo="8"  total="99" value="A"/>
            <InputBox  text="12 Months Subscription"  mo="15"  total="179" value="B"/>
            <InputBox  text="6 Months Subscription "  mo="25"  total="149" value="C"/>
            <InputBox  text="3 Months Subscription"  mo="33"  total="99" value="D"/>
           <div className="bottom-div pt-4">
              <div className="subscrip d-flex justify-content-between">
                 <span className="heading">Subscription Fee</span>
                 <span className="amount">₹18,500</span>
              </div>
              <div className="offer-box d-flex justify-content-between">
                 <div className="left">Limited time offer <span>Offer valid till 25th March 2023 </span></div>
                 <div className="right">- ₹18,401</div>
              </div>
              <div className="total d-flex justify-content-between">
                 <span className="heading"><strong>Total </strong>(Incl. of 18% GST)</span>
                 <span className="amount">₹149</span>
              </div>


              <div className="btn-bottom d-flex justify-content-between mt-5">
              <button className="btn btn-outline-danger">  Cancel </button>
              <button className="btn btn-success"> Submit </button>
              </div>

           </div>
        </div>
    )
}