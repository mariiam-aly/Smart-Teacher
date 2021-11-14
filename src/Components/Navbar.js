
import companyLogo from './Images/Logo.svg';
import En from './Images/Langen.svg';
import Ar from './Images/Langar.svg';
import { Trans, useTranslation } from "react-i18next";
import React, {useState} from 'react';
import Scrollspy from 'react-scrollspy';
function Navbar() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language,l) => {
    i18n.changeLanguage(language);
  document.getElementById("root").style.direction=l;
   
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
      
        <nav style={{marginTop:"24px "}} className={navbar? "navbar navbar-expand-lg navbar-dark sticky-top backgroundaf ": "navbar navbar-expand-lg navbar-dark sticky-top backgroundbf"}>
        
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
              <li className="nav-item padding">
                <a className="nav-link" href="#contact">{t("nav.link5")}</a>
              </li>
              <li className="nav-item padding">
              <img src={En} alt="English" className="img-fluid pointer" />
              <button  className="lang" onClick={() => changeLanguage("en","ltr")}>
      
              English
              
              </button>
            </li>
           
              <li className="nav-item padding">
              <button className="lang" onClick={() => changeLanguage("ar","rtl")}>العربية</button>
              <img src={Ar} alt="English" className="img-fluid pointer" />
            </li>
        </Scrollspy>
           
          </div>
        </div>
      </nav>
    
    );
  }
  
  export default Navbar;
  