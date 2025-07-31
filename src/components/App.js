import React, { useState } from "react";
import "./../styles/App.css"; // Make sure styles exist or adjust accordingly

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setTodoList([...todoList, task]);
      setTask("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <div className="main">
      {/* Do not remove the main div */}
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
