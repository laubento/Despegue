import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Flights from "./components/Flights/Flights";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/flights" component={Flights} />
        <Route path="/" component={Footer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
