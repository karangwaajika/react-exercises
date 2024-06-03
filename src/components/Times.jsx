import React, { useEffect, useRef, useState } from "react";

function Times() {
  const [input, inputSet] = useState("");
  const times = useRef(0);
  const handleInput = (e) => {
    inputSet((i) => (i = e.target.value));
  };
  useEffect(() => {
    times.current++;
  }, [input]);
  const inputTyl = {
    width: "200px",
    border: "1px solid rgb(153, 158, 160)",
    borderRadius: "5px",
    padding: "7px",
    fontWeight: "20",
  };
  return (
    <>
      <h1 style={{ fontWeight: 200 }}>Rendering a Component</h1>
      <p>the use of useRef, useEffect and useState</p>
      <div>
        <input type="text" onChange={handleInput} style={inputTyl}/>
        <p>My input: {input}</p>
        <p>
          Component renders <b>{times.current}</b> times
        </p>
      </div>
    </>
  );
}

export default Times;
