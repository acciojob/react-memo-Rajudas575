import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");

  let result = 0;
  for (let i = 0; i < num; i++) {
    result = i + 1;
  }

  return result;
};

const UseMemoDemo = () => {
  const [number, setNumber] = useState(1000000000);
  const [text, setText] = useState("");

  const calculation = useMemo(() => expensiveCalculation(number));

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{calculation}</p>
    </div>
  );
};

export default UseMemoDemo;
