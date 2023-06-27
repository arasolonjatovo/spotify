import { useState } from "react";

import "./index.scss";

// @params {boolean} toggled
// @params {function} onClick

export default function Toggle({ toggled, onClick }) {
  const [toggle, isToggled] = useState(toggled);

  function callback() {
    isToggled(!toggle);
    onClick(!toggle);
  }

  return (
    <label className="toggle">
      <input
        type="checkbox"
        defaultChecked={toggle}
        onClick={callback}
        name="ToggleSwitch"
        className="toggle__checkbox"
      />
      <span className="toggle__button" />
    </label>
  );
}
