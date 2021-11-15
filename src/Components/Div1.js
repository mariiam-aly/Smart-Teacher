
import pic from './Images/Online lesson _Isometric 1.png';
import waves from './Images/Waves.png';
import React from 'react';
import { useTranslation } from "react-i18next";

function Div1() {
   // FIXME: i18n never used
  const { t, i18n } = useTranslation();
 

    return (
      <div id="div1">
      
     
        <div style={{margin:"90px auto auto auto", color:"white"}} className="container " >
        <div  className="row">
      
        <div style={{margin:"auto"}} className="col-md ">
        <p className="p1 " style={{marginBottom:"0px"}}>  {t("Div1.p1")}</p>
     <h1 id="header1">{t("Div1.header")}</h1>
     <p className="p2 ">{t("Div1.p2")}</p>
     {/* FIXME: the hrefs of the buttons are not declared */}
     <a href="#"><button className="button1" >{t("Div1.btn1")}</button></a>
     <a href="#"><button className="button2">{t("Div1.btn2")}</button></a>
     </div>
     <div  className="col-md  order-first order-md-0">
     <img src={pic} alt=""  className="d-inline-block align-text-top img-fluid"/>
     
     </div>
     
     </div>
     </div>
     <img id="waves" src={waves} alt=""  className=" img-fluid"/>
    </div>
    
      
    );
  }
  
  export default Div1;