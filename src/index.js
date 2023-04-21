import React from 'react';
import ReactDOM from 'react-dom/client';
import './DUX.css';
import reportWebVitals from './reportWebVitals';
import Formulario from './components/03-formulario';
import Registrar from './components/registrarUser';
import Login from './components/LoginUser';
import Principal from './components/principal';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
