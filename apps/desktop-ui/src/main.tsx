import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ImmersiveShell } from "./experience/ImmersiveShell";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./theme/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ImmersiveShell />
    </ThemeProvider>
  </StrictMode>,
);
