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

const ReactMemo = ({ todos }) => {
  const [newTodo, setNewTodo] = useState("");
  const [customTodos, setCustomTodos] = useState(todos);

  const addCustomTodo = () => {
    if (newTodo.length > 5) {
      setCustomTodos([...customTodos, newTodo]);
      setNewTodo("");
    } else {
      alert("Task must be more than 5 characters long.");
    }
  };

  return (
    <div>
      <h1>React.memo</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}  
        placeholder="Add a task"
      />
      <button onClick={addCustomTodo}>Add Skill</button>
      <TodoList todos={customTodos} />
    </div>
  );
};

export default ReactMemo;
