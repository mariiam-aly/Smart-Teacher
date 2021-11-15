import React from 'react';
import {  useTranslation } from "react-i18next";
function Step(props) {
    // FIXME: i18n and t never used
    const { t, i18n } = useTranslation();
    return (<div className="Div4 col-lg-3 col-6">
        <p className="Div4-1">{props.number}</p>
        <p className="Div4-2">{props.title}</p>
        <p className="Div4-3">{props.info}</p></div>);

}

export default Step;
