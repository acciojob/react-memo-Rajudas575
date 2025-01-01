import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

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
      <button onClick={addTodo}>Add Todo</button>
      <p>
        Count: {count}
        <button onClick={incrementCount}>+</button>
      </p>
      <UseMemo />
      <ReactMemo todos={todos} />
    </div>
  );
};

export default App;
