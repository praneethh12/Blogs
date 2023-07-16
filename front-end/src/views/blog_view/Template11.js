import style from "./Template11.module.css"
function Template() {
    return (
        <div className={style.main}>
        <div className={style.mainHeader}>
        <h1 className={style.base_h1}>BLOGOSPHERE</h1>
    </div>
          <form method="get" target="_self" action="">
          <div className={style.temp1}>
          <div className={style.title}>
          <div id="title" name="title" style={{textDecorationThickness:"100%",border: "0px solid black",width:"140vh",backgroundColor:"rgb(223, 220, 220)"}}></div>
          </div>
          <hr className={style.line}></hr>
          <div className={style.blog}> 
          <img  className={style.blog} style={{left:"0px",top:"0px"}}/>
          </div> <br></br><hr className={style.line}></hr>
          <div className={style.t1}>
          <div className={style.text1}>
          <div id="text1" name="text1" style={{width:"93.6vh",height: "68vh",border: "0px solid black",backgroundColor:"rgb(223, 220, 220)",padding:"10px"}}></div>
          </div>
          <div className={style.iim}>
          <img  className={style.iim} style={{left:"0px",top:"0px"}}/>
          </div>
          <div className={style.text3}>
          <div id="text3" name="text3" style={{width:"43vh",height: "35vh",border: "0px solid black",backgroundColor:"rgb(223, 220, 220)",padding:"10px"}}></div>
          </div>
          </div>
          <div className={style.rights}>
          <img  className={style.rights} style={{left:"0px",top:"0px"}}/>
          </div>
          <div className={style.rtext}>
          <div id="rtext" name="rtext" style={{width:"35vh",height: "61vh",border: "0px solid black",backgroundColor:"rgb(223, 220, 220)",padding:"10px"}}></div>
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