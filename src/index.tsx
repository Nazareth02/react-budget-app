import { AppContextProvider } from "context/AppContext/AppContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./ui/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AppContextProvider>
    <App />
    <GlobalStyles />
  </AppContextProvider>
);
