
import companyLogo from './Images/SmartTeachers.svg';
import companyLogo2 from './Images/SmartStudents.svg';

import fb from './Images/FaceBook.svg';
import yt from './Images/Youtube.svg';
import tel from './Images/Telegram.svg';
import Links from './Links/Links';

import { useTranslation } from "react-i18next";
import React from 'react';
function Footer() {
  
   const { t} = useTranslation();
   return (
      <div style={{ color: "white",marginLeft:"3em",marginRight:"3em",marginBottom:"2em"}}>
         <div style={{  paddingTop: "80px" }}>
            <div style={{ paddingBottom: "3em" }} className="row">

            <div className="col-lg-4" style={{ marginTop: "1.5em" }}>
            <img style={{minWidth:"200px",float:"left",marginRight: "2.5em"}} src={companyLogo} width="25%"  alt="" />
            <div style={{ position: "relative",top:"1em" }}>

               <p className="follow">{t("Footer.p1")}	&mdash;</p>
<div style={{display:"inline-block"}}>
               <div className="socials">
               <a target="_blank" rel="noopener noreferrer" href={Links.FaceBook}><img src={fb} alt="" className="icon img-fluid pointer" /></a>

               
               </div>
               <div  className="socials">
               <a target="_blank" rel="noopener noreferrer" href={Links.Telegram_Smart_Teacher}><img src={tel} alt="" className="icon img-fluid pointer" /></a>

               </div>
               
               <div  className="socials">
               <a target="_blank" rel="noopener noreferrer" href={Links.Youtube}><img src={yt} alt="" className="icon img-fluid pointer" /></a>

               </div>
               </div>
            </div>
           
            
           
         </div>
         <div className="col-lg-4">
            
            </div>
         <div className="col-lg-4" style={{ marginTop: "1.5em"}}>
    
         <img style={{ minWidth:"200px",float:"left",marginRight: "2.5em"}} src={companyLogo2} width="25%"  alt="" />
      
         <div style={{ position: "relative",top:"1em" }}>

            <p className="follow">{t("Footer.p1")}	&mdash;</p>
<div style={{display:"inline-block"}}>
            <div className="socials">
            <a target="_blank" rel="noopener noreferrer" href={Links.FaceBook}><img src={fb} alt="" className="icon img-fluid pointer" /></a>

            
            </div>
       
            <div  className="socials">
            <a target="_blank" rel="noopener noreferrer" href={Links.Telegram_Smart_Student}><img src={tel} alt="" className="icon img-fluid pointer" /></a>

            </div>
            <div  className="socials">
            <a target="_blank" rel="noopener noreferrer" href={Links.Youtube}><img src={yt} alt="" className="icon img-fluid pointer" /></a>

            </div>
            </div>
         </div>
        
      </div>

            </div>
         </div>
      </div>);
}

export default Footer;