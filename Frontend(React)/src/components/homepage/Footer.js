import React from "react"
import wave from "../../images/homepage_images/wave.svg"
import ContactsColumn from "./footer-parts/Contacts"


function Footer() {
    return (
        <div id="contacts">
            <div>
            </div>
            <ContactsColumn /> 
            <img src={wave} id="wave"></img>
        </div>
    )
}

export default Footer