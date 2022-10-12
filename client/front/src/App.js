import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";

function App() {
  return (
      <div className="App">
          <Home />
      </div>
  );
}

export default App;
