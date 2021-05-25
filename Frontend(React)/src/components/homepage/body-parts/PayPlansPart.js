import React from "react"

import PremiumPlan from "./plans/PremiumPlan"
import StandartPlan from "./plans/StandartPlan"
import NewbiePlan from "./plans/NewbiePlan"

import blue_man from "../../../images/homepage_images/blue_man.svg"

function PayPlansPart() {
    return (
        <div id="pay_plans_part">
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

export default PayPlansPart