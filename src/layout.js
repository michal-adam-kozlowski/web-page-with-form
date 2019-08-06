import React, {Component} from "react";
import "./layout.scss";
import ContactFooter from './contactfooter.js'
import SectionFoundation from './sectionfoundation.js'
import SectionUs from './sectionus.js'
import SectionSteps from './sectionsteps.js'
import SectionAchi from './sectionachi.js'
import Header from './header.js'


function Layout() {

    return (
        <div className="main-container">

            <Header/>

            <SectionAchi/>

            <SectionSteps/>

            <SectionUs/>

            <SectionFoundation/>

            <ContactFooter/>

        </div>
    )
}



export default Layout;