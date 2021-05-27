import React from "react"

import checkmark from "../../../../images/homepage_images/checkmark.svg"
import cross from "../../../../images/homepage_images/cross.svg"

function PremiumPlan() {
    return (
        <div>
            <div className="name">Premium</div>
            <div className="cost">66.9<span className="dollar">$</span></div>
            <div className="month">per month</div>
            <div className="plans_qual">
                <span><img src={checkmark} />Безкоштовне обслуговування</span><br/>
                <span><img src={checkmark} />Обмеження на зняття готівки</span><br/>
                <span><img src={checkmark} />Платна підтримка</span><br/>
                <span><img src={checkmark} />Платна допомога</span><br/>
                <span><img src={cross} />Безкоштовне обслуговування</span><br/>
                <span><img src={cross} />Обмеження на зняття готівки</span><br/>
                <span><img src={cross} />Платна підтримка</span><br/>
                <span><img src={cross} />Платна допомога</span><br/>
            </div>
            <div className="optional">Optional add-ons</div>
            <button className="buy">Замовити</button>
            <div className="extra">Додаткова інформація про цей план</div>
        </div>
    )
}

export default PremiumPlan