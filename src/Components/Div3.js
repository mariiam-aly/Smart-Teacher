
import ft1 from './Images/Icons/library1.svg';
import ft11 from './Images/Icons/library2.svg';
import ft22 from './Images/Icons/shield1.svg';
import ft33 from './Images/Icons/tap2.svg';
import ft44 from './Images/Icons/easy-to-use2.svg';
import ft5 from './Images/Icons/computer1.svg';
import ft6 from './Images/Icons/communication1.svg';
import ft66 from './Images/Icons/communication2.svg';
import ft7 from './Images/Icons/analytics1.svg';
import ft77 from './Images/Icons/analytics2.svg';
import bg from './Images/Background.png';
import st from './Images/SmartTeacher.png';
import ss from './Images/SmartStudent.png';
import GooglePlay from './Images/Download/Downloaden.png';
import GooglePlay2 from './Images/Download/Downloadar.png';
import Feature from './Props/Feature';
import Links from './Links/Links';
import { useTranslation } from "react-i18next";
import {LanguageContext} from"./Context";
import React,{useContext} from 'react';
function Div3() {
   const {Language}= useContext(LanguageContext);
   const { t } = useTranslation();
   return (
      <div id="div3" className="img-fluid" style={{
    
         backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"
      }}>
         <div style={{ margin: "90px auto auto auto", color: "white" }} className="container" >
            <div style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "42px" }}>
               <p className="t1">{t("Div3.p1")}</p>

               <p className="t2">

                  <span id="underline">{t("Div3.headerpt1")}</span>{t("Div3.headerpt2")}

               </p>

               <p className="t3">{t("Div3.p2")}
               </p>

            </div>
            <div className="row">

               <div style={{ textAlign: "center" }} className="col-lg ">
                  <img  src={st} alt="" className="img-fluid  " />
                  <p className="title1">{t("Div3.st1")}<span style={{ color: "#9CD3FF" }}>{t("Div3.st2")}</span> {t("Div3.st3")}</p>
                  <p className="title2">{t("Div3.st4")}<span style={{ color: "#9CD3FF" }}>{t("Div3.st5")}</span></p>
                  <div style={{ marginTop: "35px" }} className="row">

                     <Feature image={ft1} title={t("Div3.ft1-teacher")} text={t("Div3.ft12-teacher")} />
                     <Feature image={ft22} title={t("Div3.ft2-teacher")} text={t("Div3.ft22-teacher")} />

                  </div>
                  <div className="row">
                     <Feature image={ft6} title={t("Div3.ft3-teacher")} text={t("Div3.ft32-teacher")} />
                     <Feature image={ft7} title={t("Div3.ft4-teacher")} text={t("Div3.ft42-teacher")} />
                  </div>
                  <div className="row">
                     <Feature image={ft5} title={t("Div3.ft5-teacher")} text={t("Div3.ft52-teacher")} />
                  </div>
                  {Language? <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Teacher}>  <img style={{ marginBottom: "3em" }} src={GooglePlay} alt="Google Play" className="img-fluid pointer" /></a>
             :null}
             {!Language? <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Teacher}>  <img style={{ marginBottom: "3em" }} src={GooglePlay2} alt="Google Play" className="img-fluid pointer" /></a>
             :null}
                  </div>
               <div style={{ textAlign: "center" }} className="col-lg ">
                  <img src={ss} alt="" className=" img-fluid " />
                  <p className="title1">{t("Div3.ss1")}<span style={{ color: "#F1C637" }}>{t("Div3.ss2")}</span> {t("Div3.ss3")}</p>
                  <p className="title2">{t("Div3.ss4")}<span style={{ color: "#F1C637" }}>{t("Div3.ss5")}</span></p>
                  <div style={{ marginTop: "35px" }} className="row">


                     <Feature image={ft44} title={t("Div3.ft1-student")} text={t("Div3.ft12-student")} />
                     <Feature image={ft33} title={t("Div3.ft2-student")} text={t("Div3.ft22-student")} />



                  </div>
                  <div className="row">
                     <Feature image={ft66} title={t("Div3.ft3-student")} text={t("Div3.ft32-student")} />
                     <Feature image={ft11} title={t("Div3.ft4-student")} text={t("Div3.ft42-student")} />
                  </div>

                  <div className="row">
                     <Feature image={ft77} title={t("Div3.ft5-student")} text={t("Div3.ft52-student")} />
                  </div>
                {Language?  <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Student}>  <img style={{ marginBottom: "3em" }} src={GooglePlay} alt="Google Play" className="img-fluid pointer" /></a>
             :null}
             {!Language?  <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Student}>  <img style={{ marginBottom: "3em" }} src={GooglePlay2} alt="Google Play" className="img-fluid pointer" /></a>
             :null}
               </div>

            </div>
         </div>

      </div>


   );
}

export default Div3;