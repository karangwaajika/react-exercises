import React, { useEffect, useRef, useState } from "react";

function Previous() {
  const [input, inputSet] = useState("");
  const previous = useRef('');
  const handleInput = (e) => {
    inputSet((i) => (i = e.target.value));
  };
  useEffect(() => {
    previous.current = input;
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
      <h1 style={{ fontWeight: 200 }}>Previous state of a Component</h1>
      <p>the use of useRef, useEffect and useState</p>
      <div>
        <input type="text" onChange={handleInput} style={inputTyl}/>
        <p>My input: {input}</p>
        <p>
          Previous input : <b>{previous.current}</b>
        </p>
      </div>
    </>
  );
}

export default Previous;
