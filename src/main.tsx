import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./locales/i18next";
import "./index.css";
import { LandingPage } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
