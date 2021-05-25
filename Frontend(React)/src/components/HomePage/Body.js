import React from "react"

import WelcomePart from "./BodyParts/WelcomePart"
import FeaturesPart from "./BodyParts/FeaturesPart"
import PayPlansPart from "./BodyParts/PayPlansPart"

function Body() {
    return (
        <div>
            <img src="../../images/homepage_images/logo.svg" />
            <WelcomePart />
            <FeaturesPart />
            <PayPlansPart />
        </div>
    )
}

export default Body