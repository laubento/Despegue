import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import axios from "axios";
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_HEROKU_URL || "http://localhost:3001";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Auth0Provider
                domain='dev-5n2ukjrth20df1by.us.auth0.com'
                clientId='XGE9oWcElvP7CZinvfvlSM7BKad6dR8Y'
                redirectUri={window.location.origin}
            >
                <App />
            </Auth0Provider>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
