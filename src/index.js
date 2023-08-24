
//Uso de React version "react": "^18.2.0" y "react-dom": "^18.2.0","react-router-dom": "^6.15.0",

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ----------------------------------------------------------------------------------------
// warnig:
// VM1876:1  Warning: You are importing createRoot from "react-dom" which is not supported. 
// You should instead import it from "react-dom/client".

// codigo:

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// // bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// Explicacion:
// El mensaje de advertencia indica que estás importando createRoot desde el módulo "react-dom", 
// pero esta forma de importación no es compatible. En su lugar, 
// se sugiere importarlo desde el módulo "react-dom/client".



// ----------------------------------------------------------------------------------------------
// warning:
// VM1952:1  Warning: ReactDOM.render is no longer supported in React 18. 
// Use createRoot instead. Until you switch to the new API, 
// your app will behave as if it's running React 17. 
// Learn more: https://reactjs.org/link/switch-to-createroot

// codigo:

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// // bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Explicacion:
// El mensaje de advertencia que estás viendo indica que el método ReactDOM.render 
// ya no es compatible en React 18 y sugiere utilizar createRoot en su lugar.

// Antes de React 18, se utilizaba ReactDOM.render para renderizar la aplicación de React en el DOM. 
// Sin embargo, en React 18, se introdujo una nueva API llamada createRoot que reemplaza a ReactDOM.render.

// La API createRoot proporciona una forma más flexible de inicializar 
// y renderizar una aplicación de React. 
// En lugar de invocar ReactDOM.render una sola vez, 
// createRoot permite renderizar múltiples raíces de forma asincrónica y optimizada.

// Para corregir la advertencia, debes reemplazar la llamada a ReactDOM.render 
// con createRoot. 