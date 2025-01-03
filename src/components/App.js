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

      <ReactMemo todos={filteredTodos} />

      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Custom Task</button>

      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter Value: {counter}</p>
      <UseMemo />
    </div>
  );
}

export default App;
