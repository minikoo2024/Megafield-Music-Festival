import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
console.log("root area@");
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);

reportWebVitals();
