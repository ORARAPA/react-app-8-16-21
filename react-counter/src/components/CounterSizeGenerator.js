import { useState } from "react";
import "../styles/Counter.css"

function CounterSizeGenerator(props){
    const [size,setSize] = useState(0);

    function handleChangeSize(event){
        console.log(event.target.value,typeof(event.target.value));
        setSize(parseInt(event.target.value));
        props.updateCounterSize(parseInt(event.target.value));
    }



    return (
        <div>
            <span className="span2">SIZE: </span>
            <input className = "input" type="number" min="0" value={size} onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;