import React, {Component} from "react";
import "./navibutton.scss";

function NaviButton(props) {

    return (
        <div className="main-navi-button">{props.name}</div>
    )
}

export default NaviButton