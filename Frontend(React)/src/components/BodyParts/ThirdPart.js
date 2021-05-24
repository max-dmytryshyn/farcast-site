import React from "react"

import PremiumPlan from "./plans/PremiumPlan"
import StandartPlan from "./plans/StandartPlan"
import NewbiePlan from "./plans/NewbiePlan"

import blue_man from "../../images/blue_man.svg"
import bubbles from "../../images/bubbles.svg"

function ThirdPart() {
    return (
        <div id="third_part">
            <div className="newbie_plan">
                <NewbiePlan />
            </div>
            <img src={blue_man} className="blue_man"/>
            <div className="standart_plan">
                <StandartPlan />
            </div>
            <div className="premium_plan">
                <PremiumPlan />
            </div>
        </div>
    )
}

export default ThirdPart