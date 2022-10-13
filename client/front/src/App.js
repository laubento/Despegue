import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Card from "./components/Card/Card.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Flights from "./components/Flights/Flights";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/flights" component={Flights} />
        <Route path="/" component={Footer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
