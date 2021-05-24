import React from "react"

import yellow_man from "../../images/yellow_man.svg"

function SecondPart() {
    return (
        <div id="second_part">
            <div className="row1">
                <span className="quote1">Зручно</span>
                <span className="quote2">Дистанційно</span>
                <span className="quote3">Слідкуйте за бізнесом<br/></span>
                <span className="circle1"></span>
                <span className="box1"></span>
                <span className="circle2"></span>
            </div>
            <div className="row2">
                <span className="quote4">Безпечно</span>
                <span className="quote5">Дешево</span>
                <span className="quote6">Круто<br/></span>
                <span className="box2"></span>
                <span className="circle3"></span>
                <span className="box3"></span>
            </div>
            <img src={yellow_man} className="yellow_man"></img>
            <div className="second_line"></div>
        </div>
    )
}

export default SecondPart