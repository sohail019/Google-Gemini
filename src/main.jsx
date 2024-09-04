import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import ContextProvider from "./context/Context.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ContextProvider>
);
