import React, { useState, useEffect, useMemo } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [taskInput, setTaskInput] = useState('');
  const [customTask, setCustomTask] = useState('');

  // Adding a new default todo when the component mounts
  useEffect(() => {
    setTodos((prevTodos) => [...prevTodos, 'New todo']);
  }, []);

  // useMemo to optimize filtering tasks
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => todo.length > 5);
  }, [todos]);

  // Increment counter
  const incrementCounter = () => setCounter(counter + 1);

  // Add custom task
  const handleSubmit = () => {
    if (taskInput.length > 5) {
      setTodos([...todos, taskInput]);
      setTaskInput('');
    } else {
      alert('Task should be more than 5 characters');
    }
  };

  return (
    <div>
      <h1>Task Management</h1>

      {/* Display todos with React.memo */}
      <ReactMemo todos={filteredTodos} />

      {/* Input for new custom tasks */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        data-testid="task-input"  // Add data-testid here
      />
      <button
        onClick={handleSubmit}
        data-testid="submit-task-button"  // Add data-testid here
      >
        Submit Custom Task
      </button>

      {/* Increment counter */}
      <button
        onClick={incrementCounter}
        data-testid="increment-button"  // Add data-testid here
      >
        Increment Counter
      </button>
      <p>Counter Value: {counter}</p>

      {/* UseMemo component */}
      <UseMemo />
    </div>
  );
}

export default App;
