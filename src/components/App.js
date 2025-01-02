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
      <h1>React App</h1>
      <h2>My Todos</h2>
      <button id="add-todo-button" onClick={addTodo}>
        Add Todo
      </button>
      <p>
        Count: {count}
        <button id="increment-button" onClick={incrementCount}>
          +
        </button>
      </p>
      <UseMemo />
      <ReactMemo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
