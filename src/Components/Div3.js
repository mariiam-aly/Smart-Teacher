
import ft1 from './Images/Features1.svg';
import ft2 from './Images/Features2.svg';
import ft3 from './Images/Features3.svg';
import ft4 from './Images/Features4.svg';
import bg from './Images/Background.png';
import st from './Images/SmartTeacher.png';
import ss from './Images/SmartStudent.png';
import GooglePlay from './Images/Google Play Badge.png';
import Feature from './Props/Feature';
import { useTranslation } from "react-i18next";
import React from 'react';
function Div3() {

   const { t } = useTranslation();
   return (
      <div id="div3" className="img-fluid" style={{
         // FIXME: duplicate keys backgroundSize
         backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"
      }}>
         <div style={{ margin: "90px auto auto auto", color: "white" }} className="container " >
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
                  <img src={st} alt="" className="img-fluid" />
                  <p className="title1">{t("Div3.st1")}<span style={{ color: "#9CD3FF" }}>{t("Div3.st2")}</span> {t("Div3.st3")}</p>
                  <p className="title2">{t("Div3.st4")}<span style={{ color: "#9CD3FF" }}>{t("Div3.st5")}</span></p>
                  <div style={{ marginTop: "35px" }} className="row">

                     <Feature image={ft1} title={t("Div3.ft1-teacher")} text={t("Div3.ft12-teacher")} />
                     <Feature image={ft2} title={t("Div3.ft2-teacher")} text={t("Div3.ft22-teacher")} />

                  </div>
                  <div className="row">
                     <Feature image={ft1} title={t("Div3.ft3-teacher")} text={t("Div3.ft32-teacher")} />
                     <Feature image={ft2} title={t("Div3.ft4-teacher")} text={t("Div3.ft42-teacher")} />
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.wazos.smart_teacher">  <img style={{ marginBottom: "0.5em" }} src={GooglePlay} alt="Google Play" className="img-fluid pointer" /></a>
                  <p className="P33">{t("Div3.p3t")}</p>
               </div>
               <div style={{ textAlign: "center" }} className="col-lg ">
                  <img src={ss} alt="" className=" img-fluid " />
                  <p className="title1">{t("Div3.ss1")}<span style={{ color: "#F1C637" }}>{t("Div3.ss2")}</span> {t("Div3.ss3")}</p>
                  <p className="title2">{t("Div3.ss4")}<span style={{ color: "#F1C637" }}>{t("Div3.ss5")}</span></p>
                  <div style={{ marginTop: "35px" }} className="row">


                     <Feature image={ft3} title={t("Div3.ft1-student")} text={t("Div3.ft12-student")} />
                     <Feature image={ft4} title={t("Div3.ft2-student")} text={t("Div3.ft22-student")} />



                  </div>
                  <div className="row">
                     <Feature image={ft3} title={t("Div3.ft3-student")} text={t("Div3.ft32-student")} />
                     <Feature image={ft4} title={t("Div3.ft4-student")} text={t("Div3.ft42-student")} />
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.wazos.smart_student">  <img style={{ marginBottom: "0.5em" }} src={GooglePlay} alt="Google Play" className="img-fluid pointer" /></a>
                  <p className="P33">{t("Div3.p3s")}</p>
               </div>

            </div>
         </div>

      </div>


   );
}

export default Div3;