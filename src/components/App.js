import React, { useState } from "react";
import UseMemoDemo from "./UseMemo";
import ReactMemoDemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <button onClick={incrementCount}>Add Todo</button>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>+</button>
      <UseMemoDemo />
      <ReactMemoDemo todos={todos} />
    </div>
  );
};

export default App;
