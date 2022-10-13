import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Card from "./components/Card/Card.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Flights from "./components/Flights/Flights";
import Footer from "./components/Footer/Footer";
import FlightsSearch from "./components/FlightsSearch/FlightsSearch";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/flightSearch" component={FlightsSearch}/>
        <Route path="/flights" component={Flights} />
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
