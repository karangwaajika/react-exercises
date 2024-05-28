import React, { useState } from "react";
import "../css/to-do.css";
import "../css/font-awesome-4.7.0/css/font-awesome.min.css";

function ToDo() {
  const [task, setTask] = useState(["To cook", "Read"]);
  const addTask = () => {
    const newTask = document.querySelector("#taskId");
    if (newTask.value.trim() !== "") {
      setTask((t) => [...t, newTask.value]);
      newTask.value = "";
    }
  };
  const removeTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };
  const doneTask = (e) => {
    const element = e.target.parentElement.previousElementSibling;

    if (element.classList.contains("linethrough")) {
      element.classList.remove("linethrough");
    } else {
      element.classList.add("linethrough");
    }
    console.log(element.getAttribute("class"));
  };

  const moveUp = (index)=>{
    if(index > 0){
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index -1]] = [updatedTask[index-1], updatedTask[index]];
      setTask(updatedTask)
    }
  }
  const moveDown = (index)=>{
    if(index < task.length - 1){
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index +1]] = [updatedTask[index+1], updatedTask[index]];
      setTask(updatedTask)
    }
  }
  return (
    <div>
      <h1 style={{ fontWeight: 200 }}>To-Do List</h1>
      <p>Add tasks to be done on the list</p>
      <div className="task">
        <div className="top">
          <input type="text" id="taskId" placeholder="Task" />
          <button onClick={addTask}>Add Task</button>
        </div>

        <ul className="todo-list">
          {task.map((tsk, index) => (
            <li key={index}>
              <span>{tsk}</span>{" "}
              <div className="btns">
                <i
                  className="fa fa-trash"
                  style={{ color: "red" }}
                  onClick={() => {
                    removeTask(index);
                  }}
                ></i>{" "}
                <i
                  className="fa fa-check-square-o"
                  style={{ color: "green" }}
                  onClick={doneTask}
                ></i>
                <i
                  className="fa fa-long-arrow-up"
                  style={{ color: "blue" }}
                  onClick={() => {
                    moveUp(index);
                  }}
                ></i>{" "}
                <i
                  className="fa fa-long-arrow-down"
                  style={{ color: "red" }}
                  onClick={() => {
                    moveDown(index);
                  }}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
