import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
// import Card from "./components/Card/Card.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Flights from "./components/Flights/Flights";
import FlightsSearch from "./components/FlightsSearch/FlightsSearch";
import CardDetail from './components/CardDetail/cardDetail'
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={NavBar}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/flightSearch" component={FlightsSearch}/>
        
        <Route exact path="/flights" component={Flights}/>
        <Route path="/flights/flightDetail/:id" component={CardDetail}/>
        
        <Route path="/" component={Footer}/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
