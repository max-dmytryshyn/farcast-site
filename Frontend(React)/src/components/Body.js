import React from "react"

import FirstPart from "./BodyParts/FistPart"
import SecondPart from "./BodyParts/SecondPart"
import ThirdPart from "./BodyParts/ThirdPart"

import logo from "../images/logo.svg"

function Body() {
    return (
        <div>
            <img src="../images/logo.svg" />
            <FirstPart />
            <SecondPart />
            <ThirdPart />
        </div>
    )
}

export default Body