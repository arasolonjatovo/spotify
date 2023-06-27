import "./index.scss";

export default function Toggle() {
  return (
    <div className="toggle">
      <label className="toggle__label">
        <input
          type="checkbox"
          className="toggle__checkbox"
          name="toggle"
          id="toggle"
        />
      </label>
      <span className="toggle__switch"></span>
    </div>
  );
}
