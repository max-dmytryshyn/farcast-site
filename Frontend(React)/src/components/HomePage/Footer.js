import React from "react"

import FirstColumn from "./FooterParts/Contacts"


function Footer() {
    return (
        <div id="contacts">
            <div>
                <a id="contacts_head">Контакти</a><br/>
                <a id="contacts_quote">Перший в Україні хлібопекарний прогнозер</a>
            </div>
            <FirstColumn /> 
        </div>
    )
}

export default Footer