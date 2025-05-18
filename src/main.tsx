import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts/font.css";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
