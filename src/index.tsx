import React from "react";
import ReactDOM from "react-dom";

import "@scss/index.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Using the react strict-mode. The strick mode allows you to warn you if you are using any
 * Unsafe lifecycle,
 * Legacy string reference,
 * Deprecated findDOMNode usage,
 * Unexpected side effects,
 * Legacy context API.
 * This is only applicable on the development mode.
 *
 * @see https://reactjs.org/docs/strict-mode.html
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
