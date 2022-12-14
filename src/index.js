import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import UserContextProvider from "./Context/UserContext";

const container = document.getElementById("App");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
