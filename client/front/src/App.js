import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import FlightsSearch from '../src/components/FlightsSearch';
function App() {
  return (
    <BrowserRouter>
        <FlightsSearch/>
    </BrowserRouter>
  );
}

export default App;
