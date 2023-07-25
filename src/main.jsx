import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

import theme from "./theme.js";
import {Provider} from "react-redux";
import {store} from "./redux/data/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
