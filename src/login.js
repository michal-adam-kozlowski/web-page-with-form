import React, {Component} from "react";
import LoginButton from './loginbutton.js'
import './login.scss'

function Login() {

    return (
        <div className="login">
            <LoginButton name='Zaloguj'/>
            <LoginButton name='Załóż konto'/>
        </div>
    )
}

export default Login