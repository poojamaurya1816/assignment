import React from "react";
import Image from 'next/image';
import styles from '../../app/page.module.css'

export const Header= () =>{
    return (
          <>
           <div className="container-fluid px-5 header-sec">
              <div className="d-flex">
                 <div className="right-box d-flex">
                  <div className="logo">
                    <a href="/"> <Image src="/logo.svg" alt="logo" width={158} height={45} /></a>
                  </div>
                  <div className="menu-div">
                     <ul className={styles.menulist}>
                        <li>Course</li>
                        <li><a href="#">Programs</a></li>
                     </ul>
                  </div>
                </div>
                  <div className="left-box">
                      <div className="search-box">

                      </div>
                      <a href="#">Login</a>
                      <a href="#" className="join-now">Join Now</a>
                  </div>
              </div>
           </div>
         </>
    )
}