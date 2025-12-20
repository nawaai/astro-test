import { useState } from 'react';

export default function ReactCounter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '2px solid blue', padding: '1rem', margin: '1rem' }}>
      <h2>React Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
