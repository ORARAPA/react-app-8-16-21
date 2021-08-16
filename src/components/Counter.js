import React, { useState } from "react"
import "../styles/Counter.css"

function Counter(){
    const[number, setNumber] = useState(0);

    function increase(){
        setNumber(number+1);
    }
    
    function decrease(){
        setNumber(number-1);
    }

    return(
        <div className="counter">
            <button className = "buttonMinus" onClick = {decrease}>-</button>
            <span className="span1">    {number}    </span>
            <button className = "buttonPlus" onClick = {increase}>+</button>
        </div>
    )
}

export default Counter;