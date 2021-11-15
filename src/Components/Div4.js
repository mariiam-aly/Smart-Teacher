
import React from 'react';
import video from './Videos/Mine.mp4';
import { useTranslation } from "react-i18next";
import Step from './Props/Step';

function Div2() {
      // FIXME: i18n never used
      const { t, i18n } = useTranslation();
      return (
            <div style={{ marginBottom: "10em" }} id="div4">

                  <div style={{ margin: "90px auto auto auto", color: "white" }} className="container">
                        <div className="row">
                              <div className="col-lg ">
                                    <div className="center">
                                          <div className="video-con">

                                                <video width="560" height="315" controls >
                                                      <source src={video} type="video/mp4" />
                                                </video>
                                          </div>
                                    </div>

                              </div>
                              <div className="col-lg ">
                                    <p className="P41">{t("Div4.p1")}</p>
                                    <p className="P42"><span id="underline2">{t("Div4.header1")}</span>{t("Div4.header2")}</p>
                                    <p className="P43">{t("Div4.p2")}</p>
                                    <p className="P44">{t("Div4.p3")}</p>
                                    <div className="row ">

                                          <Step number={t("Div4.no1")} title={t("Div4.t1")} info={t("Div4.step1")} />
                                          <Step number={t("Div4.no2")} title={t("Div4.t2")} info={t("Div4.step2")} />
                                          <Step number={t("Div4.no3")} title={t("Div4.t3")} info={t("Div4.step3")} />
                                          <Step number={t("Div4.no4")} title={t("Div4.t4")} info={t("Div4.step4")} />
                                    </div>
                              </div>
                        </div>
                  </div>


                  <div style={{ margin: "10em auto auto auto", color: "white" }} className="container">
                        <div className="row">
                              <div className="col-lg ">
                                    <p className="P41">{t("Div4.p12")}</p>
                                    <p className="P42"><span id="underline2">{t("Div4.header12")}</span>{t("Div4.header22")}</p>
                                    <p className="P43">{t("Div4.p22")}</p>
                                    <p className="P44">{t("Div4.p32")}</p>
                                    <div className="row ">

                                          <Step number={t("Div4.no12")} title={t("Div4.t12")} info={t("Div4.step12")} />
                                          <Step number={t("Div4.no22")} title={t("Div4.t22")} info={t("Div4.step22")} />
                                          <Step number={t("Div4.no32")} title={t("Div4.t32")} info={t("Div4.step32")} />
                                          <Step number={t("Div4.no42")} title={t("Div4.t42")} info={t("Div4.step42")} />

                                    </div>
                              </div>
                              <div className="col-lg order-first order-lg-0">
                                    <div className="center">
                                          <div className="video-con">

                                                <video width="560" height="315" controls >
                                                      <source src={video} type="video/mp4" />
                                                </video>
                                          </div>
                                    </div>

                              </div>

                        </div>
                  </div>

            </div>





      );
}

export default Div2;