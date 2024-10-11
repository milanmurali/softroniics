import React, { useState, useEffect } from "react";

function Todoo() {
  const [tasks, setTasks] = useState([
    { name: "1" },
    { name: "2" },
    { name: "3" }
  ]);

  
  useEffect(() => {
    displayTasks();
  }, []);


  const displayTasks = () => {
    
  };
  
  const addTasks = () => {
    const newTask = prompt("Enter New Task:");
    if (newTask) {
      setTasks([...tasks, { name: newTask }]);
    } else {
      alert("Task cannot be Empty!");
    }
  };

  
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="main">
      <h1>Things to Do</h1>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            {task.name}
            <span className="delete" onClick={() => deleteTask(index)}>
              ❌
            </span>
          </li>
        ))}
      </ul>
      <button className="addbutton" onClick={addTasks}>
        New Task
      </button>
    </div>
  );
}

export default Todoo;
