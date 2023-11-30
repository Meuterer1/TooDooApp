import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "./styles.scss";

import App from "./app";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error("Element with ID 'root' not found in the document.");
}
