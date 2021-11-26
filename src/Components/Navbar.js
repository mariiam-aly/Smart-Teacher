
import companyLogo from './Images/Logo.svg';
import En from './Images/Langen.svg';
import Ar from './Images/Langar.svg';
import { useTranslation } from "react-i18next";
import {LanguageContext} from"./Context";
import React, {useContext, useState} from 'react';
import Scrollspy from 'react-scrollspy';
function Navbar() {
const {Language, SetLanguage}= useContext(LanguageContext);

  const { t, i18n } = useTranslation();
  
//const[lang,setlang]=useState(true);

  const changeLanguage = (language,x,l) => {
    i18n.changeLanguage(language);
  //document.getElementById("root").style.direction=x;
  SetLanguage(l);
  };


  const [navbar,setNavbar]= useState(false);
  const backgroundColor= ()=>
  {
    if(window.scrollY>=80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',backgroundColor);
    return (
      
        <nav style={{marginTop:"24px "}} className={navbar? "navbar navbar-expand-xxl navbar-dark sticky-top backgroundaf ": "navbar navbar-expand-xxl navbar-dark sticky-top backgroundbf"}>
        
        <div  className="container-fluid">
       
     

        <img style={{paddingLeft:"1em", minWidth:"200px"}} src={companyLogo} width="18%"  alt="" className="d-inline-block align-text-top img-fluid"/>
     
        <button className="navbar-toggler" type="navbar-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
         
            <Scrollspy className="navbar-nav" items={ ['div1', 'div2', 'div3', 'div4', 'contact' ]} currentClassName="activelink ">
            <li  className="nav-item padding ">
            <a className="nav-link" href="#div1">{t("nav.link1")}</a>
          </li>
          
              <li  className="nav-item padding ">
                <a className="nav-link" href="#div2">{t("nav.link2")}</a>
              </li>
              <li className="nav-item padding">
                <a className="nav-link" href="#div3">{t("nav.link3")}</a>
              </li>
              <li className="nav-item padding">
                <a className="nav-link" href="#div4">{t("nav.link4")}</a>
              </li>
              <li style={{marginRight:"6em"}} className="nav-item padding">
                <a className="nav-link" href="#contact">{t("nav.link5")}</a>
              </li>
              <li className="nav-item padding">
              <img src={En} alt="English" className="img-fluid pointer" />
              <button   className="lang" onClick={() => changeLanguage("en","ltr",true)}>
      
              English <br/>
              {Language?  <span className="dot"></span> : null}
              </button>
            </li>
           
              <li className="nav-item padding">
              <button  className="lang2 " onClick={() => changeLanguage("ar","rtl",false)}>العربية
           <br/>   {!Language?  <span className="dot"></span> : null}</button>
              <img src={Ar} alt="Arabic" className="img-fluid pointer" />
            </li>
        </Scrollspy>
           
          </div>
        </div>
      </nav>
    
    );
  }
  
  export default Navbar;
