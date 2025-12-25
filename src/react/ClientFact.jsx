/** @jsxImportSource react */
import { useState, useEffect } from 'react';

// Client Component - fetches data on the client side
// This allows fresh data on every page load/refresh

export default function ClientFact() {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
      const data = await response.json();
      setFact(data);
    } catch (error) {
      console.error('Failed to fetch fact:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  if (loading) {
    return (
      <div style={{ border: '2px solid #0070f3', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <h3 style={{ color: '#0070f3', marginTop: 0 }}>Client Component (Fetching...)</h3>
        <p style={{ color: '#666' }}>Loading random fact...</p>
      </div>
    );
  }

  return (
    <div style={{ border: '2px solid #0070f3', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3 style={{ color: '#0070f3', marginTop: 0 }}>Client Component (Data Fetched)</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>"{fact?.text}"</p>
      <small style={{ color: '#666' }}>
        Source: <a href={fact?.source_url} target="_blank" rel="noopener">{fact?.source_url}</a><br/>
        Fetched on client - Data refreshes on every page load!
      </small>
      <br/><br/>
      <button
        onClick={fetchFact}
        style={{
          background: '#0070f3',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Fetch New Fact
      </button>
    </div>
  );
}
