import {React,useEffect} from 'react';
import logo from '../logo.svg';
import '../style/css/style.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  useEffect(()=>{
    document.title="Home - Learning Lions"
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to Dessai.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>This </Button>
      </header>
    </div>
  );
}

export default App;
