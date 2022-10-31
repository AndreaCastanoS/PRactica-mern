import logo from './logo.svg'; //importo el logo en la ruta en donde esta este
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Andrea Castaño
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//linea 8 para incorporar una variable de js, se emplea directamente con {}

export default App;
