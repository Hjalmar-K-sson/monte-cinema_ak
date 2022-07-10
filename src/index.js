import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { FormProvider } from "./context/form.context";

import MonteTheme from "./utils/styled-components/monte-theme.theme";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <MonteTheme>
        <App />
      </MonteTheme>
    </FormProvider>
  </React.StrictMode>
);
