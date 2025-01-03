import React, { useState, useMemo } from "react";

fconst [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const todoCount = useMemo(() => {
    console.log("Calculating todo count...");
    return todos.length;
  }, [todos]);

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "New Todo"]);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>useMemo Todo App</h1>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <div>Total Todos: {todoCount}</div>

      <hr />

      <div>
        <h2>Counter Example (Unrelated to Todos)</h2>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      </div>
    </div>
  );
}

export default UseMemo;
