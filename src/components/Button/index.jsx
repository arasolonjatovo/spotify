import "./index.scss";

export default function Button({ label, type, onClick }) {
  return (
    <button className={type} onClick={onClick}>
      <p className="button__label">{label}</p>
    </button>
  );
}
