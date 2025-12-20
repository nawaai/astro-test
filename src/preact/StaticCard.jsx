export default function PreactStaticCard({ title, message }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{message}</p>
      <small>Rendered statically with Preact</small>
    </div>
  );
}
