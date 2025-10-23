export default function Button(props) {
  return (
    <button
      type="button"
      id={props.id}
      name={props.name}
      style={{
        backgroundColor: "#ffffff"
      }}
      onClick={props.click}
    >
        {props.text}
    </button>
  );
}
