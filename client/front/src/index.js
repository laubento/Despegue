import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";

axios.defaults.baseURL = "http://localhost:3001";
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <React.StrictMode>
        <CSSReset>
          <App />
        </CSSReset>
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
