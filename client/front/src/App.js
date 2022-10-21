import "./App.css";
import React, { useEffect } from "react";
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
import CardDetail from "./components/CardDetail/cardDetail";
import  MiPerfil  from "./components/MiPerfil/MiPerfil";
import RoundtripFF from "./components/Flights/RoundtripFF";
import RoundtripSF from "./components/Flights/RoundtripSF";
import Cart from "./components/Cart/Cart";

import { useDispatch } from "react-redux";
import { storeUserInfo } from "./Redux/Actions";
import Success from "./components/Compras/Success";
import Failure from "./components/Compras/Failure"; 

import { useState } from "react";
import axios from "axios";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


function App() {
    const dispatch = useDispatch()
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
          axios({
            method: "POST",
            data: {id: resObject.user._id},
            url: "/update",
        }).then((data) => {
          const obj = {
            name: data.data.name,
            photos: data.data.photo ? resObject.user.photo : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
            firstName: data.data.firstName,
            lastname: data.data.lastname,
            email: data.data.email,
            id: data.data._id,
            dni: data.data.dni,
            phone: data.data.phone,
            birthDate: data.data.birthDate
          };
          dispatch(storeUserInfo(obj))
        })
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} render={() => <NavBar/>} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login />} />
        <Route path="/user" render={() => <MiPerfil/>} />
        <Route
          exact
          path={"/register"}
          render={() => <Register />}
        />
        <Route exact path="/flights" component={Flights}/>
        <PrivateRoute exact path="/admin" component={Admin} />
        <Route exact path="/flights/roundtrip/firstFlight" component={RoundtripFF}/>
        <Route exact path="/flights/roundtrip/secondFlight" component={RoundtripSF}/>
        <Route exact path="/flights/roundtrip/cart" component={Cart}/>
        <Route exact path="/flightSearch" component={FlightsSearch}/>
        <Route exact path="/flights/flightDetail/:id" component={CardDetail}/>
        <Route exact path="/success" component={Success} />
        <Route exact path="/failure" component={Failure} />
        <Route path="/" component={Footer}/>
        <Route path="/purchase" render={() => <Checkout/>}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
