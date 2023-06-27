import "./index.scss";

// @params {string} label
// @params {string} type
// @params {function} onClick

export default function Button({ label, type, onClick }) {
  return (
    <button className={type} onClick={onClick}>
      <p className="button__label">{label}</p>
    </button>
  );
}
