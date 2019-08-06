import React, {Component} from "react";
import "./title.scss";

function Title() {

    return (
        <div className="title-container">
            <h1>Zacznij pomagać!</h1>
            <h1>Oddaj niechciane rzeczy w dobre ręce</h1>
            <img src={require('./img/decoration.png')} alt="decoration"/>
            <ul>
                <li>Oddaj rzeczy</li>
                <li>Zorganizuj zbiórkę</li>
            </ul>

        </div>
    )
}

export default Title