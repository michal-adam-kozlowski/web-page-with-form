import React, {Component} from "react";
import NaviButton from './navibutton.js'
import "./navi.scss";

function Navi() {

    return (
        <div className="main-navi">
            <NaviButton name="Start"/>
            <NaviButton name="O co chodzi"/>
            <NaviButton name="O nas"/>
            <NaviButton name="Fundacje i organizacje"/>
            <NaviButton name="Kontakt"/>
        </div>
    )
}

export default Navi