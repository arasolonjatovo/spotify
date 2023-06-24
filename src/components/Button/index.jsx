import "./index.scss";

export default function Button({ label, type }) {
  return (
    <button className={type}>
      <p className="button__label">{label}</p>
    </button>
  );
}
