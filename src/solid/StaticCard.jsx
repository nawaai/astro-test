export default function SolidStaticCard(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
      <small>Rendered statically with SolidJS</small>
    </div>
  );
}
