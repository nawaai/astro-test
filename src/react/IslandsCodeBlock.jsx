/** @jsxImportSource react */

export default function IslandsCodeBlock() {
  return (
    <pre style={{ background: '#1e1e1e', color: '#d4d4d4', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
      <code>
        <span style={{ color: '#6a9955' }}>{'// ClientFact.jsx - Client Component with data fetching'}</span>{'\n'}
        <span style={{ color: '#c586c0' }}>import</span> {'{'} <span style={{ color: '#9cdcfe' }}>useState</span>, <span style={{ color: '#9cdcfe' }}>useEffect</span> {'}'} <span style={{ color: '#c586c0' }}>from</span> <span style={{ color: '#ce9178' }}>'react'</span>;{'\n\n'}
        <span style={{ color: '#c586c0' }}>export default function</span> <span style={{ color: '#dcdcaa' }}>ClientFact</span>() {'{'}{'\n'}
        {'  '}<span style={{ color: '#c586c0' }}>const</span> [<span style={{ color: '#9cdcfe' }}>fact</span>, <span style={{ color: '#9cdcfe' }}>setFact</span>] = <span style={{ color: '#dcdcaa' }}>useState</span>(<span style={{ color: '#569cd6' }}>null</span>);{'\n\n'}
        {'  '}<span style={{ color: '#dcdcaa' }}>useEffect</span>(() ={'>'} {'{'}{'\n'}
        {'    '}<span style={{ color: '#dcdcaa' }}>fetch</span>(<span style={{ color: '#ce9178' }}>'https://uselessfacts.jsph.pl/...'</span>){'\n'}
        {'      '}.<span style={{ color: '#dcdcaa' }}>then</span>(<span style={{ color: '#9cdcfe' }}>r</span> ={'>'} <span style={{ color: '#9cdcfe' }}>r</span>.<span style={{ color: '#dcdcaa' }}>json</span>()){'\n'}
        {'      '}.<span style={{ color: '#dcdcaa' }}>then</span>(<span style={{ color: '#9cdcfe' }}>setFact</span>);{'\n'}
        {'  }'}, []);{'\n\n'}
        {'  '}<span style={{ color: '#c586c0' }}>return</span> {'<'}<span style={{ color: '#4ec9b0' }}>div</span>{'>'}{'{'}<span style={{ color: '#9cdcfe' }}>fact</span>?.text{'}'}{'<'}/<span style={{ color: '#4ec9b0' }}>div</span>{'>'};{'\n'}
        {'}'}{'\n\n'}
        <span style={{ color: '#6a9955' }}>{'// In Astro template:'}</span>{'\n'}
        {'<'}<span style={{ color: '#4ec9b0' }}>ClientFact</span> <span style={{ color: '#9cdcfe' }}>client:load</span> /{'>'}{'\n'}
        {'<'}<span style={{ color: '#4ec9b0' }}>ClientCounter</span> <span style={{ color: '#9cdcfe' }}>client:load</span> <span style={{ color: '#9cdcfe' }}>initialCount</span>={'{'}0{'}'} /{'>'}
      </code>
    </pre>
  );
}
