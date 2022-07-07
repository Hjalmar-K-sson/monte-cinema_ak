import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { FormProvider } from "./context/form.context";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
