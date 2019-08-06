import React, {Component} from "react";
import "./loginbutton.scss";

function LoginButton(props) {

    return (
        <div className="login-button">{props.name}</div>
    )
}

export default LoginButton