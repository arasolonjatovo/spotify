import React from "react";
import ReactDOM from "react-dom/client";

import Playlist from "./pages/Playlist";

import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Playlist />
  </React.StrictMode>
);
