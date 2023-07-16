import style from "./Template1.module.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import person from '../../../static/person.png';
import signin from '../../../static/signin.jpg';
//import { useNavigate } from 'react-router-dom';
import plus from '../../../static/plus.jpeg';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import logo from '../../../static/logofinal.png'

import { Router, useLocation, useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function Template() {

  const location = useLocation()
  const navigate = useNavigate();
  const [count,setCount] = useState(sessionStorage.getItem("count"))
  const authid = location.state
  var pageView
  //alert(count)
  useEffect(()=>{
    
    sessionStorage.setItem("count",24)
   
    alert(count)


  },[])

  function nav1() {
    const urli = document.getElementById('choosetemplate').value;
    if (urli == 'temp1') {
      alert("Already in Template 1");
    }
    else
      navigate(urli);
  }


  const imageRef = useRef();
  
  const handleDownload = () => {
    html2canvas(imageRef.current)
      .then((canvas) => {
        
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = `blog${count}.png`;
        link.click();
        const title = document.getElementById('title').innerHTML
        const message = document.getElementById('text1').innerHTML.slice(0,20)
        
        const data = {
          "authid" : authid,
          "blogid" : count,
          "title": title,
          "message": message,
          "type": "Travel",
          "path": `header.jpg`,
          
        }
        axios.post("http://localhost:8080/postBlogs",data).then((res)=>{
          //alert(authid)
            const xyz = parseInt(count) + 1
            sessionStorage.setItem("count",xyz) 
            console.log("Posted")
        }).catch((err)=>{
          alert(err)

        })

      });
  }






  const [file, setFile] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function handleChange1(e1) {
    console.log(e1.target.files);
    setFile1(URL.createObjectURL(e1.target.files[0]));
  }
  function handleChange2(e2) {
    console.log(e2.target.files);
    setFile2(URL.createObjectURL(e2.target.files[0]));
  }









  return (
    <div className={style.main}>
      <div className={style.mainHeader}>
        <h1 className={style.base_h1}>BLOGOSPHERE</h1>


        <label for="choosetemplate" className={style.dropdown}>Template</label>
        <select name="choosetemplate" id="choosetemplate" className={style.dropdownoptions} onChange={nav1}>
          <option>Choose a Template</option>
          <option value="temp1">Template 1</option>
          <option value="temp2">Template 2</option>
          <option value="temp3">Template 3</option>
        </select>



      </div>
      <form method="post" target="_self" action="">
        <div className={style.temp1} ref={imageRef}>
          <div className={style.title}>
            <textarea id="title" name="title" style={{ textDecorationThickness: "100%", border: "0px solid black", width: "140vh", backgroundColor: "rgb(223, 220, 220)", fontSize: "20px" }}></textarea>
          </div>
          <hr className={style.line}></hr>
          <div className={style.blog}>
            <img src={file} className={style.blog} style={{ left: "0px", top: "0px" }} />

            <div className={style.add}><h1>+</h1>
              <div class={style.dropdown}>
                <label for="image1"><a href="#">Add Image</a></label>
                <input type="file" id="image1" name="image1" onChange={handleChange}></input>
              </div>
            </div>

          </div> <br></br><hr className={style.line}></hr>
          <div className={style.t1}>
            <div className={style.text1}>
              <div contenteditable="true" id="text1" name="text1" style={{ width: "93.6vh", height: "68vh", border: "0px solid black", backgroundColor: "rgb(223, 220, 220)", padding: "10px", fontSize: "20px" }}></div>
            </div>
            <div className={style.iim}>
              <img src={file1} className={style.iim} style={{ left: "0px", top: "0px" }} />
              <div className={style.add1}><h1>+</h1>
                <div class={style.dropdown}>
                  <label for="image2"><a href="#">Add Image</a></label>
                  <input type="file" id="image2" name="image2" onChange={handleChange1}></input>

                </div>
              </div>
            </div>
            <div className={style.text3}>
              <div contenteditable="true" id="text3" name="text3" style={{ width: "43vh", height: "35vh", border: "0px solid black", backgroundColor: "rgb(223, 220, 220)", padding: "10px", fontSize: "20px" }}></div>
            </div>
          </div>
          <div className={style.rights}>
            <img src={file2} className={style.rights} style={{ left: "0px", top: "0px" }} />
            <div className={style.add2}><h1>+</h1>
              <div class={style.dropdown}>
                <label for="image3"><a href="#">Add Image</a></label>
                <input type="file" id="image3" name="image3" onChange={handleChange2}></input>

              </div>
            </div>
          </div>
          <div className={style.rtext}>
            <div contenteditable="true" id="rtext" name="rtext" style={{ width: "35vh", height: "61vh", border: "0px solid black", backgroundColor: "rgb(223, 220, 220)", padding: "10px", fontSize: "20px" }}></div>
          </div>
        </div>
      </form>
      <button type="submit" className={style.b1} onClick={handleDownload}> Publish</button>
      {/* <button type="draft" className={style.b2}>Save as draft</button> */}
      <footer className={style.About}>
        <img src={logo} className={style.fimg} style={{ width: "21vh", height: "21vh" }}></img>
        <div className={style.info}>
          <h2 style={{ color: "white", fontSize: "30px" }}>Info</h2>
          <ul style={{ listStyleType: "none" }}>
            <li className={style.flist} href="#">About Us</li>
            <li className={style.flist} href="#">Terms & Conditions</li>
          </ul>
        </div>
        <div className={style.contact}>
          <h2 style={{ color: "white", fontSize: "30px" }}>Contact Us</h2>
          <h4 style={{ paddingTop: "18px", color: "rgb(161, 161, 161)" }}>NIE Boys Hostel, Mysore - 570008</h4>
          <h4 style={{ padding: "6px", color: "rgb(161, 161, 161)" }}>Phone No : +91 1234-234-234</h4>
          <h4 style={{ padding: "0px", color: "rgb(161, 161, 161)" }}>Email : Blogosphere@gmail.com</h4>
        </div>
        <div className={style.copyright}>
          <h4 style={{ padding: "8px" }}>  BLOGOSPHERE Copyright © 2023 - All rights reserved  ||  Batch A1</h4>
        </div>
      </footer>
    </div>
  )
}

export default Template