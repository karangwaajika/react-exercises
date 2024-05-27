import React, {useState} from "react";

const ColorPicker = ()=>{
    const [color, setColor] = useState("#FFFFFF")
    const changeColor = (e)=>{
        setColor(e.target.value)
    }
    const cardStyle = {
        width: "400px",
        height: "250px",
        borderRadius: "5px",
        boxShadow: `1px 1px 2px 2px ${color == "#FFFFFF" ? "lightblue" : "white"}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
        color: color == "#FFFFFF" ? "black" : "white"
    }

    const inputStyle = {
        width: "200px",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "pointer"
    }

    return(
        <>
        <h1 style={{ fontWeight: 200 }}>Color Picker</h1>
        <p>Select a color to change the background-color of the card</p>
        <div style={{display:"flex", gap: "2rem"}}>
        <div style={cardStyle}>
            <p>Selected color: {color}</p>
        </div>
        <input type="color" style={inputStyle} onChange={changeColor}/>
        </div>
        </>
    )
}

export default ColorPicker