import React from "react";
import Image from 'next/image';
export const Iconlist=(props)=>{
    return (
         <>
           <div className="d-flex align-items-center icon-list">
              <Image src={props.image} alt="logo" width={158} height={45} />
              <div className="text-content">
                 <span>{props.number}</span> {props.text} 
              </div>
           </div>
         </>
    )
}