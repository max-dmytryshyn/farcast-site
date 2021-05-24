import React from "react"

import red_woman from "../../images/red_woman.svg"

function FirstPart() {
    return (
        <div id="first_part">
            <div className="square"> 
                <div className="content">
                    <p>Вигідне</p>
                    <p>рішення для </p>
                    <p><span className="yours">вашого</span> бізнесу!</p>
                </div>
            </div>
            <button type="button" className="buy_button">Замовити сьогодні</button>
            <img src={red_woman} className="red_woman"></img>
            <div className="first_line"></div>
        </div>
    )
}

export default FirstPart