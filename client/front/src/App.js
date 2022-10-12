import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Card from './components/Card';
import Home from './components/Home.js'



function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
         <Route exact path ='/' component={Home} /> 
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
