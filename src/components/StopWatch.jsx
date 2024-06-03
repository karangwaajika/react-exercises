import React, { useEffect, useState, useRef } from "react";

function StopWatch() {
    const [isRunning,  setIsRunning] = useState(false)
    const timeStyl = {
        fontWeight: 400,
        color: "black"
      }
  return (
    <>
      <h1 style={{ fontWeight: 200 }}>Stop Watch</h1>
      <p>The useEffect hook was used to handle the time interval function </p>
      <div className="card" style={{paddingTop: "10%"}}>
        <span style={timeStyl}>00-00-00</span>
        <div className="btns">
          <button >Start</button>
          <button >Stop</button>
          <button >Reset</button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
