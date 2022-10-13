import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Flights from "./components/Flights/Flights";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/flights" component={Flights} />
      </BrowserRouter>
    </div>
  );
}

export default App;
