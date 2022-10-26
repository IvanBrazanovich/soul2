import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SoulProvider } from "./context/SoulProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SoulProvider>
      <App />
    </SoulProvider>
  </React.StrictMode>
);
