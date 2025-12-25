/** @jsxImportSource react */

// Small client island just for the refresh action
// The actual data fetching still happens on the server

export default function RefreshButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      style={{
        background: '#0070f3',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '0.5rem'
      }}
    >
      ↻ Refresh (Server Refetch)
    </button>
  );
}
