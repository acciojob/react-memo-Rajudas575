import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Performing an expensive calculation...");
  let result = 0;
  for (let i = 0; i < num; i++) {
    result = i + 1;
  }
  return result;
};

const UseMemo = () => {
  const [number, setNumber] = useState(1000000000);
  const [text, setText] = useState("");

  const calculation = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>Result: {calculation}</p>
      <input
        id="memo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

export default UseMemo;
