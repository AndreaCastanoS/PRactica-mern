import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //lo estilo son los unicos que se importan directamente
import App from './App'; //aqui estoy importando otro componente (linea 1 ,2 importo modulos, en la linea 4 importo componentes)
/* import reportWebVitals from './reportWebVitals'; */
// se borra porque no lo vamos a usar

//la estructura de lo que se importa es la siguiente
//priemero escribo la palabra import (para decirle que necesito importar algo)
//segundo escribo el nombre de lo que necesito
//tercero escribo la palabra from(que significa desde donde lo estoy importando)
//cuarto escribo la ruta de lo que necesito

//todo lo que yo necesito para crear algo se tiene que importar

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
//se borra porque no se va usar
