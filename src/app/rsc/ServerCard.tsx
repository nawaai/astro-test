// Server Component by default in Next.js App Router
// - Runs only on the server
// - No JavaScript shipped to the client
// - Cannot have useState, useEffect, or event handlers

export default function ServerCard({ fact, source }: { fact: string; source: string }) {
  return (
    <div style={{ border: '2px solid #0070f3', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3 style={{ color: '#0070f3', marginTop: 0 }}>Server Component</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>"{fact}"</p>
      <small style={{ color: '#666' }}>
        Source: <a href={source} target="_blank" rel="noopener">{source}</a><br/>
        Fetched on server at: {new Date().toISOString()}<br/>
        <strong>Refresh the page to see new data!</strong>
      </small>
    </div>
  );
}
