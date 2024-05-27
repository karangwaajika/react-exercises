import React, {useState} from "react";

function UpdateObject(){
    const [player, setPlayer] = useState({name: "Leo", club:"Inter Miami", nationality: "Argentina", age: 36 })
    const changeAge= (e)=>{
        setPlayer((p=>({...p, age : e.target.value})))
    }
    const changeName= (e)=>{
        setPlayer((p=>({...p, name : e.target.value})))
    }
    const changeNat= (e)=>{
        setPlayer((p=>({...p, nationality : e.target.value})))
    }
    const changeClub= (e)=>{
        setPlayer((p=>({...p, club : e.target.value})))
    }

    const cardStyle = {
        display:"flex",
        gap: "1rem",
    }

    const input ={
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px"
    }

    return (
        <>
        <h1 style={{ fontWeight: 200 }}>Updating an Object</h1>
        <p>Display your favorite professional athlete</p>
    
        <div style={cardStyle}>
            <input type="text" style={input} placeholder="" value={player.name} onChange={changeName}/>
            <input type="text" style={input} placeholder="" value={player.club} onChange={changeClub}/>
            <input type="text" style={input} placeholder="" value={player.nationality} onChange={changeNat}/>
            <input type="number" style={input} placeholder="" value={player.age} onChange={changeAge}/>
        </div>
        <p>My fovorite player is <i style={{fontWeight:"bold"}}>{player.name}</i> from <i>{player.nationality}</i>, he plays in <i>{player.club}</i> and he's <i>{player.age}</i> years old</p>
        </>
    )
}

export default UpdateObject