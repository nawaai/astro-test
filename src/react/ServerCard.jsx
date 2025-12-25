/** @jsxImportSource react */

// This is like an RSC "Server Component"
// - Runs only on the server (or build time)
// - No JavaScript shipped to the client
// - Cannot have useState, useEffect, or event handlers
// - Refresh requires page reload (server refetch)

export default function ServerCard({ fact, source, children }) {
  return (
    <div style={{ border: '2px solid #0070f3', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3 style={{ color: '#0070f3', marginTop: 0 }}>Server Component + Refresh</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>"{fact}"</p>
      <small style={{ color: '#666' }}>
        Source: <a href={source} target="_blank" rel="noopener">{source}</a>
      </small>
      {children}
      <br/>
      <small style={{ color: '#666', marginTop: '0.5rem', display: 'block' }}>
        Data fetched on server - button is a tiny client island
      </small>
    </div>
  );
}
