import { useState } from 'preact/hooks';

export default function PreactCounter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '2px solid purple', padding: '1rem', margin: '1rem' }}>
      <h2>Preact Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
