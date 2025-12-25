// RSC Pattern Demo - Real React Server Components
// This page fetches fresh data on EVERY request (no caching)

import ServerCard from './ServerCard';
import ClientCounter from './ClientCounter';

// Force dynamic rendering - no static generation, no caching
export const dynamic = 'force-dynamic';

async function getRandomFact() {
  const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random', {
    cache: 'no-store', // Ensure fresh data on every request
  });
  return response.json();
}

export default async function RSCPage() {
  const factData = await getRandomFact();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
      <h1>React Server Components Demo</h1>
      <p><a href="/">← Back to Home</a></p>

      <div style={{ background: '#fffbe6', borderLeft: '4px solid #ffe58f', padding: '1rem', margin: '1rem 0' }}>
        <strong>Key Insight:</strong> This is a real Next.js RSC page.
        The Server Component fetches fresh data on <strong>every request</strong> - try refreshing!
      </div>

      <h2>The Pattern</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '2rem 0' }}>
        <div>
          <h4>Server Component</h4>
          <ul>
            <li>No <code>"use client"</code> directive</li>
            <li>Can be async</li>
            <li>Runs on server only</li>
            <li>Zero JS to client</li>
          </ul>
        </div>
        <div>
          <h4>Client Component</h4>
          <ul>
            <li>Has <code>"use client"</code> directive</li>
            <li>Uses hooks (useState, etc)</li>
            <li>Hydrated on client</li>
            <li>JS shipped to browser</li>
          </ul>
        </div>
      </div>

      <h2>Live Demo</h2>

      <h3>1. Server Component (async, fetches data)</h3>
      <ServerCard fact={factData.text} source={factData.source_url} />

      <h3>2. Client Component (interactive)</h3>
      <ClientCounter initialCount={0} />

      <h2>How It Works</h2>
      <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
{`// Server Component (default in App Router)
async function getRandomFact() {
  const res = await fetch('https://...', { cache: 'no-store' });
  return res.json();
}

export default async function RSCPage() {
  const fact = await getRandomFact(); // Runs on server!
  return <ServerCard fact={fact.text} />;
}

// Client Component (has "use client")
'use client';
import { useState } from 'react';
export function ClientCounter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`}
      </pre>

      <p style={{ marginTop: '2rem', color: '#666' }}>
        <small>
          Powered by Next.js App Router with React Server Components.<br/>
          Reference: <a href="https://nextjs.org/docs/app/building-your-application/rendering/server-components" target="_blank">Next.js RSC Docs</a>
        </small>
      </p>
    </div>
  );
}
