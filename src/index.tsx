import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { GlobalStyles } from "./ui/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ExpensesContextProvider>
    <App />
    <GlobalStyles />
  </ExpensesContextProvider>
);
