/** @jsxImportSource react */
import { useState } from 'react';

// Full client component - fetches data on client side
// More JS shipped, but no page reload needed

export default function ClientFact({ initialFact, initialSource }) {
  const [fact, setFact] = useState(initialFact);
  const [source, setSource] = useState(initialSource);
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
      const data = await res.json();
      setFact(data.text);
      setSource(data.source_url);
    } catch (err) {
      console.error('Failed to fetch:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ border: '2px solid #10b981', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3 style={{ color: '#10b981', marginTop: 0 }}>Client Component + Fetch</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: loading ? 0.5 : 1 }}>
        "{fact}"
      </p>
      <small style={{ color: '#666' }}>
        Source: <a href={source} target="_blank" rel="noopener">{source}</a>
      </small>
      <br />
      <button
        onClick={refetch}
        disabled={loading}
        style={{
          background: '#10b981',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: loading ? 'wait' : 'pointer',
          marginTop: '0.5rem',
          opacity: loading ? 0.7 : 1
        }}
      >
        {loading ? 'Loading...' : '↻ Refresh (Client Fetch)'}
      </button>
      <br />
      <small style={{ color: '#666', marginTop: '0.5rem', display: 'block' }}>
        JS bundle includes fetch logic - no page reload!
      </small>
    </div>
  );
}
