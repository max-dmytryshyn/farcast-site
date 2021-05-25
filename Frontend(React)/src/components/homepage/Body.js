import React from "react"

import WelcomePart from "./body-parts/WelcomePart"
import FeaturesPart from "./body-parts/FeaturesPart"
import PayPlansPart from "./body-parts/PayPlansPart"

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