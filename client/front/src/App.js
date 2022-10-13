import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Flights from "./components/Flights/Flights";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route path="/flights" component={Flights} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
