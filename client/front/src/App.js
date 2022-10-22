import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Card from "./components/Card/Card.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Flights from "./components/Flights/Flights";
import FlightsSearch from "./components/FlightsSearch/FlightsSearch";
import NavBar from "./components/NavBar/NavBar";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CardDetail from "./components/CardDetail/cardDetail";
// import LogInButton from "./components/Login auth0/LogInAuth0";
import MiPerfil from "./components/MiPerfil/MiPerfil";
import RoundtripFF from "./components/Flights/RoundtripFF";
import RoundtripSF from "./components/Flights/RoundtripSF";
import Cart from "./components/Cart/Cart";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "./Redux/Actions";
import Success from "./components/Compras/Success";
import Failure from "./components/Compras/Failure";
import { activeAcc, bannedAcc } from "./utils/alerts";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  const { user, logout } = useAuth0();

  useEffect(() => {
    console.log("hola");
    axios
      .post("/auth0/getUser", { user })
      .then((data) => {
        if (data.status === 200) return data.data;
      })
      .then((user) => {
        if (user.active && !user.banned) {
          window.localStorage.setItem("user", JSON.stringify(user));
          dispatch(storeUserInfo(user));
        } else if (!user.active && !user.banned) {
          return activeAcc(logout);
        } else if (!user.active && user.banned) {
          bannedAcc(logout);
        }
      })
      .catch((err) => {
        console.log("usuario no logueado");
      });
  }, [dispatch, user, logout]);

  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} render={() => <NavBar />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login />} />
        <Route path="/user" render={() => <MiPerfil />} />
        <Route exact path={"/register"} render={() => <Register />} />
        <Route exact path="/flights" component={Flights} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <Route
          exact
          path="/flights/roundtrip/firstFlight"
          component={RoundtripFF}
        />
        <Route
          exact
          path="/flights/roundtrip/secondFlight"
          component={RoundtripSF}
        />
        <Route exact path="/flights/roundtrip/cart" component={Cart} />
        <Route exact path="/flightSearch" component={FlightsSearch} />
        <Route exact path="/flights/flightDetail/:id" component={CardDetail} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/failure" component={Failure} />
        <Route path="/" component={Footer} />
        <Route path="/purchase" render={() => <Checkout />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
