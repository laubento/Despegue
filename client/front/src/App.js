import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Card from "./components/Card/Card.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Flights from "./components/Flights/Flights";
import FlightsSearch from "./components/FlightsSearch/FlightsSearch";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      axios
        .get("http://localhost:3001/auth/login/success")
        .then((response) => {
          console.log(response, "RESPONSE");
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject.user, "USER");
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} />
        {/* <Route path="/" component={NavBar} /> */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/flightSearch" component={FlightsSearch} />
        <Route exact path="/login" component={Login} />
        <Route path="/flights" component={Flights} />
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
