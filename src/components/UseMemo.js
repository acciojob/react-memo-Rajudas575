import React, { useMemo } from 'react';

function UseMemo() {
  const [count, setCount] = React.useState(0);

  const expensiveComputation = useMemo(() => {
    console.log('Expensive computation is running...');
    return count * 2; // Simulating an expensive computation
  }, [count]); // Only recompute when count changes

  return (
    <div>
      <h3>UseMemo Example</h3>
      <p>Computed value: {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemo;
