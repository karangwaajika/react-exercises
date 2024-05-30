import React, { useEffect, useState } from "react";
import '../css/time.css'

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000); //run when mount
    return () => {
      //cleaning when unmount
      clearInterval(interval);
    };
  }, []);

  const timeFormat = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${addZer0(hours)} : ${addZer0(minutes)} : ${addZer0(seconds)} ${meridiem}`;
  };

  const addZer0 = (nbr)=>{
    return (nbr < 10 ? "0": "")+nbr
  }

  const timeStyl = {
    fontWeight: 200,
    color: "white"
    
  }

  return (
    <>
      <h1 style={{ fontWeight: 200 }}>Digital Clock</h1>
      <p>The useEffect hook was used to handle the time interval function </p>
      <div className="time">
        <span style={timeStyl}>{timeFormat()}</span>
      </div>
    </>
  );
}

export default Clock;
