import styles from'./WebBase.module.css'
import weblogo from './bloglogo.webp'
import ppic from '../static/propic.jpg'
import person from '../static/person.png'
import food from '../static/food.png'
import travel from '../static/travel.jpg'
import signin from '../static/signin.jpg'
import automob from '../static/automobile.webp' 
import back from '../static/bg1.jpg'
import { useNavigate } from 'react-router-dom';
import img from '../static/bg1.jpeg'
import logo from '../static/logofinal.png'
import logoutimg from '../static/logout.jpg'

import React, { useState } from "react";



//import { useHistory } from 'react-router-dom';




function WebBase(props) {
    let loginstat = props.data;
    const authid = props.authid
    //alert(authid)
    let setAuthorfunc = props.setAuthor
    const navigate = useNavigate();
    document.body.style.backgroundImage = `url(${back})`;
    document.body.style.backgroundSize = "1600px 900px";



 
    

    return (
         
        <div className={styles.grid_lay}>
            
            <div className={styles.mainHeader}>

                <h1 className={styles.base_h1}>BLOGOSPHERE <button /*onClick={()=> navigate('createblog')}*/ onClick={()=> {
                        if(loginstat===true)
                        navigate('temp1',{state: authid});
                        else
                        {
                            alert("Please login/signup to continue");
                            navigate('signup',{state : loginstat});
                        }
                    }} className={styles.wrBlog}>Write a blog</button></h1>
                
        </div>

            <div className={styles.navBar}>

                <ul className={styles.base_ul}>
                   
                    <li onClick={()=> {
                        if(loginstat===true)
                        navigate('profile',{state : authid});
                        else
                        {
                            alert("Please login/signup to continue");
                            navigate('signup',{state : loginstat,setAuthor : setAuthorfunc});
                        }
                    }} className={styles.base_li}> <img src={person} height={"35px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Profile</li>
                    <li 
                    onClick={()=>{
                        //alert("image button was clicked");
                        props.changeBlogs(props.splitArray(props.travelBlogs))
                    }}
                    className={styles.base_li}><img src={travel} height={"40px"} alt="image" style={{float:"left",paddingRight:"20px",paddingLeft:"10px"}}></img>Travel</li>
                    <li 
                    onClick={()=>{
                        //alert("image button was clicked");
                        props.changeBlogs(props.splitArray(props.foodBlogs))
                    }}
                    className={styles.base_li}><img src={food} height={"40px"} alt="image" style={{float:"left",paddingRight:"10px",paddingLeft:"10px"}}></img>Food</li>
                    <li 
                    onClick={()=>{
                        //alert("image button was clicked");
                        props.changeBlogs(props.splitArray(props.automobilelBlogs))
                    }}
                    className={styles.base_li}><img src={automob} height={"40px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"10px"}}></img>Automobile</li>
                    <li onClick={()=> {

                        if(loginstat===true)
                        alert("You have already logged in");
                        else
                        navigate('signup')

                    }} className={styles.base_li}><img src={signin} height={"42px"} alt="image" style={{float:"left",paddingRight:"14px",paddingLeft:"10px"}}></img>Sign/SignUp</li>
                    <li onClick={()=> {

                            loginstat=false;
                            navigate('signup')
                       
                    }} 
                    className={styles.base_li}> <img src={logoutimg} height={"35px"} alt="image" style={{float:"left",paddingRight:"22px",paddingLeft:"18px"}}></img>Logout</li>
                </ul>

            </div>


            <footer className={styles.About}>

            <img src={logo} className={styles.fimg}  style={{width:"21vh",height:"21vh"}}></img>
            <div className={styles.info}>
            <h2 style={{color:"white",fontSize:"30px"}}>Info</h2>
             <ul style={{listStyleType:"none"}}>
              <li className={styles.flist} href="#">About Us</li>
              <li className={styles.flist} href="#">Terms & Conditions</li>
             </ul>
            </div>
            <div className={styles.contact}>
              <h2 style={{color:"white",fontSize:"30px"}}>Contact Us</h2>
              <h4 style={{paddingTop:"18px",color:"rgb(161, 161, 161)"}}>NIE Boys Hostel, Mysore - 570008</h4>
              <h4 style={{padding:"6px",color:"rgb(161, 161, 161)"}}>Phone No : +91 1234-234-234</h4>
              <h4 style={{padding:"0px",color:"rgb(161, 161, 161)"}}>Email : Blogosphere@gmail.com</h4>
              </div>
              <div className={styles.copyright}>
              <h4 style={{padding:"8px"}}>  BLOGOSPHERE Copyright © 2023 - All rights reserved  ||  Project Batch-A1</h4>
              </div>

            </footer>



        </div>

    )


}


export default WebBase;