import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      < Home />
    </div>
  );
}

export default App;
