import pdf from './Privacy Policy.pdf';
import { Trans, useTranslation } from "react-i18next";
function Pp(){
  const { t, i18n } = useTranslation();
    return(<div id="PrivacyPolicy">
      <button type="button"  className="Policy" data-bs-toggle="modal" data-bs-target="#PDF">
  
    {t("Pp")}
  </button>
  

  <div className="modal fade" id="PDF" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-fullscreen">
      <div className="modal-content">
        <div className="modal-header">
          
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <iframe src={pdf} width="100%"  height="100%"></iframe>
        </div>
        
      </div>
    </div>
  </div>
  </div>);
}
export default Pp;