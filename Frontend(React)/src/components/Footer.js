import React from "react"
import wave from "../images/wave-background.svg"

import FirstColumn from "./FoterParts/FirstColumn"
import SecondColumn from "./FoterParts/SecondColumn"
import ThirdColumn from "./FoterParts/ThirdColumn"

import instagram from "../images/telegram.svg"
import telegram from "../images/facebook.svg"
import youtube from "../images/youtube.svg"

function Footer() {
    return (
        <div id="contacts">
            <div>
                <a id="contacts_head">Контакти</a><br/>
                <a id="contacts_quote">Перший в Україні хлібопекарний прогнозер</a>
            </div>
            <FirstColumn />
            <SecondColumn />
            <ThirdColumn />   
            <span className="socials"> 
                <img src={instagram} className="insta_logo"/>
                <img src={telegram} className="tele_logo"/>
                <img src={youtube} className="youtube_logo"/>
             
            </span>
        </div>
    )
}

export default Footer