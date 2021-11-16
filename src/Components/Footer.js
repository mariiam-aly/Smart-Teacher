import st from './Images/SmartTeacher.svg';
import companyLogo from './Images/Logo.svg';
import ss from './Images/SmartStudent.svg';
import fb from './Images/FaceBook.svg';
import GooglePlay from './Images/Google Play Badge.png';
import telegram from './Images/Telegram_logo.svg'
import Links from './Links/Links';
import { useTranslation } from "react-i18next";
import React from 'react';
function Footer() {
   // FIXME: i18n never used
   const { t} = useTranslation();
   return (
      <div style={{ color: "white" }} className="container " >
         <div style={{ textAlign: "center", paddingTop: "80px" }}>
            <div style={{ paddingBottom: "3em" }} className="row">

               <div className="col-lg-3">
                  <img style={{ minWidth: "200px" }} src={companyLogo} alt="" className="img-fluid" />

               </div>
               <div className="col-lg-6">

                  <div style={{ marginTop: "1.5em" }}>
                     <a className="flinks" href="#div1">{t("Footer.link1")}</a>


                     <a className="flinks" href="#div2">{t("Footer.link2")}</a>


                     <a className="flinks" href="#div3">{t("Footer.link3")}</a>

                     <a className="flinks" href="#div4">{t("Footer.link4")}</a>

                     <a style={{ marginRight: "0" }} className="flinks" href="#contact">{t("Footer.link5")}</a>
                  </div>
                  <div style={{ marginTop: "2em" }} className="row">
                     <div className="col-md-3 col-6">
                        <img src={st} width="25%" alt="" className="img-fluid smart" />
                     </div>
                     <div className="col-md-3 col-6">
                        <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Teacher}><img src={GooglePlay} width="15%" alt="Google Play" className="img-fluid pointer download" /></a>
                     </div>
                     <div className="col-md-3 col-6">
                        <img src={ss} width="25%" alt="" className="img-fluid smart" />
                     </div>
                     <div className="col-md-3 col-6">
                        <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Student}><img src={GooglePlay} width="15%" alt="Google Play" className="img-fluid pointer download" /></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3">
                  <div style={{ marginTop: "1.5em" }}>
                     <p className="follow">{t("Footer.p1")}	&mdash;</p>
                     <a target="_blank" rel="noopener noreferrer" href={Links.FaceBook}><img src={fb} alt="" className="icon img-fluid pointer" /></a>

                     <p className="pageName">{t("Footer.p2")}</p>
                  </div>
                  <div style={{ marginTop: "1.5em" }}>
                     <p className="follow">{t("Footer.p1")}	&mdash;</p>
                     <a target="_blank" rel="noopener noreferrer" href={Links.Telegram_Smart_Teacher}><img src={telegram} alt="" className="icon img-fluid pointer" /></a>

                     <p className="pageName">{t("Footer.p2")}</p>
                  </div>
                  <div style={{ marginTop: "1.5em" }}>
                     <p className="follow">{t("Footer.p1")}	&mdash;</p>
                     <a target="_blank" rel="noopener noreferrer" href={Links.Telegram_Smart_Student}><img src={telegram} alt="" className="icon img-fluid pointer" /></a>

                     <p className="pageName">{t("Footer.p3")}</p>
                  </div>
               </div>

            </div>
         </div>
      </div>);
}

export default Footer;