import React, {useState} from "react"
import '../css/increment.css'

function Increment(){
    const countColor = {
        fontSize: "3rem",
        color: "green"
    }
    const countColorRed = {
        fontSize: "3rem",
        color: "red"
    }
    const [count, setCount] = useState(0)
    const [color, setIsColor] = useState(countColor)
    const addOne = () =>{
        let clr = count < 0? countColorRed: countColor
        setIsColor(clr)
        setCount(count+1)
        
    }
    const minusOne = () =>{
        let clr = count < 1 ? countColorRed: countColor
        setIsColor(clr)
        setCount(count-1)
        
    }
    const reset = () =>{
        setCount(0)
        setIsColor(countColor)
    }
    

    return(
        <div className="increment">
            <h1>Incrementation and Decrementation</h1>
            <p>Changing the state of a digit by color as well.</p>
            <strong style={color}>{count}</strong>
            <div className="btns">
            <button onClick={minusOne}>Decrement</button><button onClick={reset}>Reset</button><button onClick={addOne}>Increment</button>
            </div>
        </div>
    )
}

export default Increment