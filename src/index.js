import "react-app-polyfill/stable";
import "core-js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store1 from "./store";
import store2 from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store1}>
    <Provider store={store2}>
      <App />
    </Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
