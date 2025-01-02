import React, { useState } from "react";

const TodoList = React.memo(({ todos }) => {
  console.log("Rendering TodoList");
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
});

const ReactMemo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const addCustomTodo = () => {
    if (newTodo.length > 5) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    } else {
      alert("Task must be more than 5 characters long.");
    }
  };

  return (
    <div>
      <h2>Add Custom Task</h2>
      <input
        id="add-skill-input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a task"
      />
      <button id="add-skill-button" onClick={addCustomTodo}>
        Add Skill
      </button>
      <TodoList todos={todos} />
    </div>
  );
};

export default ReactMemo;
