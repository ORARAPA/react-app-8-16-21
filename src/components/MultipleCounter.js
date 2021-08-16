import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import "../styles/Counter.css"

function MultipleCounter(){
    const [counterSize,setCounterSize] = useState(0);

    function updateCounterSize(counterSize){
        setCounterSize(counterSize);
    }
    
    return(
        <div className="multipleCounter">
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize = {counterSize}></CounterGroup>
        </div>
    );
}

export default MultipleCounter;