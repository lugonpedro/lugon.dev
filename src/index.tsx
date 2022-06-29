import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import Routes from "./Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Routes />);
