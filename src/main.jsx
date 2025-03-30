//main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Ensure Bootstrap is imported in index.css
import "bootstrap/dist/css/bootstrap.min.css";


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
