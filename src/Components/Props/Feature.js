import React from 'react';
import {  useTranslation } from "react-i18next";
function Feature(props) {
    // FIXME: i18n never used
    const { t, i18n } = useTranslation();
    return (<div className="col-sm ">
        <img style={{ float: "left" }} src={props.image} alt="" className=" img-fluid  feature" />
        <p className="P31">{props.title}</p>
        <p className="P32">{props.text}</p>

    </div>);

}

export default Feature;