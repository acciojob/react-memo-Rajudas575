import React from 'react';

const ReactMemo = React.memo(({ todos }) => {
  console.log('ReactMemo Render');
  return (
    <div>
      <h3>Filtered Todos</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
