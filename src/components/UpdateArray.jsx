import React, { useState } from "react";
import "../css/update-array.css";

function UpdateArray() {
  const [food, setFood] = useState(["Apple", "Banana"]);
  const addFood = () => {
    const newItem = document.querySelector("#foodId");
    setFood((f) => [...f, newItem.value]);
    newItem.value = "";
  };
  const removeFood = (index) => {
    // use _ when we want to ignore the parameter
    setFood(food.filter((_, i) => i !== index)); 
  };

  return (
    <div>
      <h1 style={{ fontWeight: 200 }}>Updating an Array</h1>
      <p>Add your favorite food on the list and remove it by clicking on the item</p>
      <div className="card-list">
        <ul>
          {food.map((item, i) => (
            <li key={i} onClick={() => removeFood(i)}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="source">
        <input type="text" id="foodId" placeholder="Food" />
        <button onClick={addFood}>Add</button>
      </div>
    </div>
  );
}

export default UpdateArray;
