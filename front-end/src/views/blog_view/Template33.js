import style from "./Template33.module.css"
import React,{useState} from "react";

function Template() {

    return (
          <div className={style.main}>
          <div className={style.mainHeader}>
          <h1 className={style.base_h1}>BLOGOSPHERE</h1>
      </div>
      <form method="post" target="_self" action="">
            <div className={style.temp3}>
            <div className={style.title}>
            </div>
            <hr className={style.line}></hr>
            <div className={style.b1}>
            <div className={style.b}>
            </div>
            </div>
            <div className={style.imbg}>
            </div>
            <div className={style.b2}>
            <div className={style.bt}>
            </div>
            <div className={style.b2i}>
            </div>
            <div className={style.b2i2}>
            </div>
            <div className={style.b2i3}>
            </div>
            </div>
            <div className={style.mt}>
            </div>
            </div>
            </form>
            <footer className={style.About}>
            <img className={style.fimg}  style={{width:"21vh",height:"21vh"}}></img>
            <div className={style.info}>
            <h2 style={{color:"white",fontSize:"30px"}}>Info</h2>
             <ul style={{listStyleType:"none"}}>
              <li className={style.flist} href="#">About Us</li>
              <li className={style.flist} href="#">Terms & Conditions</li>
             </ul>
            </div>
            <div className={style.contact}>
              <h2 style={{color:"white",fontSize:"30px"}}>Contact Us</h2>
              <h4 style={{paddingTop:"18px",color:"rgb(161, 161, 161)"}}>NIE Boys Hostel, Mysore - 570008</h4>
              <h4 style={{padding:"6px",color:"rgb(161, 161, 161)"}}>Phone No : +91 1234-234-234</h4>
              <h4 style={{padding:"0px",color:"rgb(161, 161, 161)"}}>Email : Blogosphere@gmail.com</h4>
              </div>
              <div className={style.copyright}>
              <h4 style={{padding:"8px"}}>  BLOGOSPHERE Copyright © 2023 - All rights reserved  ||  Batch A1</h4>
              </div>
            
            </footer>
          </div>
    )
}

export default Template