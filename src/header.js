import React, {Component} from "react";
import Navi from './navi.js'
import Login from './login.js'
import Title from './title.js'
import "./header.scss";

function Header() {

    return (
        <div className="header">
            <Login/>
            <Navi/>
            <Title/>
        </div>
    )
}

export default Header