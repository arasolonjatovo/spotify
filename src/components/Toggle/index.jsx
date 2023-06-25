import "./index.scss";

export default function Toggle() {
  return (
    <div className="toggle">
      <input type="checkbox" className="toggle__checkbox" />
      <label className="toggle__label"></label>
      <span className="toggle__switch"></span>
    </div>
  );
}
