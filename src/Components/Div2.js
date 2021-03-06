import React from 'react';
import pic from './Images/Group 12.png';
import { useTranslation } from "react-i18next";



function Div2() {
  const { t} = useTranslation();
  return (
    <div id="div2">

      <div style={{ margin: "90px auto auto 0px", color: "white", paddingLeft: "0px" }} className="container " >
        <div className="row">
          <div className="col-md ">
            <img src={pic} style={{ margin: "auto auto auto 0px" }} alt="" className="d-inline-block align-text-top img-fluid" />
          </div>
          <div style={{ margin: "auto auto auto 0.5em" }} className="col-md ">
            <p className="p21 " style={{ marginBottom: "0px" }}>{t("Div2.p1")}</p>
            <h1 id="header21">{t("Div2.header")}
            </h1>
            <p className="p22 ">{t("Div2.p2")}</p>
            <a href="#div4"><button className="button1">{t("Div2.btn1")}</button></a>
            <a href="#div3"><button className="button2">{t("Div2.btn2")}</button></a>
          </div>

        </div>
      </div>

    </div>


  );
}

export default Div2;