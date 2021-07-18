import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

/* ReactDOM.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); */
