import React from "react";

export const InputBox=(props)=>{
    return (
         <div className="radio-box d-flex justify-content-between align-items-center">
            <div className="left-div d-flex align-items-center">
               <input type="radio" value={props.value} />{props.text}
            </div>
            <div className="right-side">
                <div className="first">Total <span>₹{props.total}</span></div>
                <div className="second">₹{props.mo}<span>/mo</span></div>
            </div>
         </div>
    )
}