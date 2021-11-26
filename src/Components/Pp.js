import pdf from './Privacy Policy.pdf';
import GooglePlay from './Images/Download/Downloaden.png';
import GooglePlay2 from './Images/Download/Downloadar.png';
import { useTranslation } from "react-i18next";
import {LanguageContext} from"./Context";
import Links from './Links/Links';
import React,{useContext}  from 'react';
function Pp() {
  const {Language}= useContext(LanguageContext);
  const { t} = useTranslation();
  return (
    
    
    
    <div id="PrivacyPolicy">
    <div className="row" style={{marginRight:0,marginBottom:"1em"}}>
    <div className="col" >

    {Language? <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Teacher}>  <img  src={GooglePlay} alt="Google Play" className="img-fluid pointer" /></a>
:null}
{!Language? <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Teacher}>  <img  src={GooglePlay2} alt="Google Play" className="img-fluid pointer" /></a>
:null}
    </div>
    <div className="col">
    <div  style={{position:"relative",top:"1em"}}>
    <button type="button" className="Policy" data-bs-toggle="modal" data-bs-target="#PDF">

      {t("Pp")}
    </button>


    <div className="modal fade" id="PDF" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">

            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <iframe title="Our Privacy Policy" src={pdf} width="100%" height="100%"></iframe>
          </div>

        </div>
      </div>
    </div>
    </div>
    </div>
    <div className="col">
    {Language?  <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Student}>  <img  src={GooglePlay} alt="Google Play" className="img-fluid pointer" /></a>
    :null}
    {!Language?  <a target="_blank" rel="noopener noreferrer" href={Links.Smart_Student}>  <img  src={GooglePlay2} alt="Google Play" className="img-fluid pointer" /></a>
    :null}</div>
    </div>
  </div>);
}
export default Pp;