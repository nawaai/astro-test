/** @jsxImportSource react */
import { useState } from 'react';

// This is like an RSC "Client Component"
// - Has "use client" directive equivalent (client:load in Astro)
// - JavaScript IS shipped to the client
// - Can use useState, useEffect, event handlers
// - This is an "island" of interactivity

export default function ClientCounter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div style={{ border: '2px solid #e91e63', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3 style={{ color: '#e91e63' }}>Client Component (Interactive)</h3>
      <p>Count: <strong>{count}</strong></p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{
          background: '#e91e63',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          marginRight: '0.5rem'
        }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          background: '#666',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
      <br/>
      <small style={{ color: '#666' }}>
        JS hydrated on client (check Network tab for React bundle)
      </small>
    </div>
  );
}
