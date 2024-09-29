import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter } from "react-router-dom";
import ApiContextProvider from "./Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiContextProvider>
);
