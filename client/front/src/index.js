import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
