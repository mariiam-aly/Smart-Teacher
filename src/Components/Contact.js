import bg from './Images/Group4586.png';
import { Trans, useTranslation } from "react-i18next";

function Contact(){
  const { t, i18n } = useTranslation();
return(

    <div id="contact" className="img-fluid" style={{ 
        backgroundImage: `url(${bg})`, backgroundSize:"100% auto",backgroundRepeat:"no-repeat",backgroundSize:"cover"
      }}>
      <div style={{margin:"90px auto auto auto", color:"white",paddingTop:"6.5em",paddingBottom:"10em"}} className="container " >
      <p className="pc1"><span id="underline3">{t("Contact.header1")}</span>{t("Contact.header2")}</p>
      <p className="pc2">{t("Contact.p1")}</p>
      <p className="pc3">{t("Contact.p2")} <a className="pc4" href="mailto:webmaster@example.com">{t("Contact.p3")}</a></p>
      
 </div>

      </div>
    

);

}

export default Contact;