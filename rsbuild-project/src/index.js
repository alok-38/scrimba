import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)} disabled={count === 5}>
        +
      </button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
