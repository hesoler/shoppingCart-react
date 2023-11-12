import React from "react";
import ReactDOM from "react-dom/client";
import { ShoppingKart } from "./ShoppingKart.jsx";
import { BrowserRouter } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../src/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoppingKart />
    </React.StrictMode>
  </BrowserRouter>
);
