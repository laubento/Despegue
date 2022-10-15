import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Card from "./components/Card/Card.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Flights from "./components/Flights/Flights";
import FlightsSearch from "./components/FlightsSearch/FlightsSearch";
import NavBar from "./components/NavBar/NavBar";
import Checkout from './components/Checkout/Checkout'
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject);
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} render={() => <NavBar user={user}/>} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login user={user}/>} />
        <Route exact path={'/register'} render={() => <Register user={user}/>} />
        <Route exact path="/flightSearch" component={FlightsSearch} />
        <Route path="/flights" component={Flights} />
        <Route path="/" component={Footer} />
        <Route path="/p" component={Checkout} />
      </BrowserRouter>
    </div>
  );
}

export default App;