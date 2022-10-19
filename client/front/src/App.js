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
import { useDispatch } from "react-redux";
import { storeUserInfo } from "./Redux/Actions";
import axios from "axios";

function App() {
    const dispatch = useDispatch()
    // useEffect(() => {
    //     const getUser = () => {
    //         axios({
    //             method: "GET",
    //             withCredentials: true,
    //             url: "/auth/login/success",
    //             })
    //         .then((response) => {
    //           if (response.status === 200) return response.data;
    //           throw new Error("authentication has been failed!");
    //         })
    //         .then((resObject) => {
    //           const obj = {
    //             name: resObject.user.displayName
    //               ? resObject.user.displayName
    //               : resObject.user.name,
    //             photos: resObject.user.photos ? resObject.user.photos[0].value : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
    //             firstName: resObject.user.name.givenName
    //               ? resObject.user.name.givenName
    //               : resObject.user.name,
    //           };
    //           dispatch(storeUserInfo(obj))
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     };
    //     getUser();
    //   }, [dispatch]);


    const user = window.location.href = "http://localhost:3001/auth/google" 

    console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <Route path={"/"} render={() => <NavBar />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login />} />
        <Route path="/user" render={() => <MiPerfil/>} />
        <Route
          exact
          path={"/register"}
          render={() => <Register />}
        />
        <Route exact path="/flights" component={Flights} />
        <Route exact path="/flightSearch" component={FlightsSearch} />
        <Route exact path="/flights/flightDetail/:id" component={CardDetail} />
        <Route path="/" component={Footer} />
        <Route path="/purchase" render={() => <Checkout/>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
