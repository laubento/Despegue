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
import OfertasContainer from "./components/Ofertas/OfertasContainer";
// import LogInButton from "./components/Login auth0/LogInAuth0";
import MiPerfil from "./components/MiPerfil/MiPerfil";
import RoundtripFF from "./components/Flights/RoundtripFF";
import RoundtripSF from "./components/Flights/RoundtripSF";
import Cart from "./components/Cart/Cart";
import Help from "./components/Help/Help";
import AsistenciasCard from "./components/Asistencias/AsistenciasCard";
import CompraAsistencias from "./components/Asistencias/CompraAsistencias";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "./Redux/Actions";
import Success from "./components/Compras/Success";
import Failure from "./components/Compras/Failure";
import { activeAcc, bannedAcc } from "./utils/alerts";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Auth0Callback from "./auth0callback";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ChatBot from "./components/ChatBot/ChatBot";
import UpladPhoto from "./components/UploadPhoto";
import Rating from "./components/ratingComments/rating";
import Filter from "./components/Filter/Filter";

function App() {
  const dispatch = useDispatch();

  const { user, logout } = useAuth0();
  console.log(`user --> ${user}`);


  useEffect(() => {
    axios
      .post("/auth0/getUser", { user })
      .then((data) => {
        if (data.status === 200) return data.data;
      })
      .then((user) => {
        console.log(user);
        if (user.active && !user.banned) {
          window.localStorage.setItem("user", JSON.stringify(user));
          dispatch(storeUserInfo(user));
        } else if (user.banned) {
            return bannedAcc(logout);
        } else if (!user.active) {
            return activeAcc(logout);
        }
      })
      .catch((err) => {
        console.log("usuario no logueado");
      });
  }, [dispatch, user, logout]);

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={ChatBot} />
        <Route path={"/"} render={() => <NavBar />} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/ofertas" render={() => <OfertasContainer />} />
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
        <Route exact path="/flights/flightDetail/:id" component={CardDetail} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/failure" component={Failure} />
        <Route path="/" component={Footer} />
        <Route path="/purchase" render={() => <Checkout />} />
        <Route path="/help" render={() => <Help />} />
        <Route path={"/asistencias"} render={() => <AsistenciasCard />} />
        <Route path='/uploadPhoto' component={UpladPhoto}/>
        <Route exact path='/callback' component={Auth0Callback} />
        <Route exact path={"/flights/roundtrip/asistant"} component={CompraAsistencias} />
        <Route path={"/feedBack"} component={Rating}/>
        <Route path={"/sliders"} component={Filter}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
