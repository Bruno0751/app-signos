export default function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      value={props.value}
    />
  );
}
