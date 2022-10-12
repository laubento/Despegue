import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Card from "./components/Card/Card.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={Footer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
