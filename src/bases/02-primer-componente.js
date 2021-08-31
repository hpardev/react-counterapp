//NUESTRO PRIMER COMPONENTE
//=========================

import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp />, divRoot);

//===PrimeraApp.js===
/*
import React from 'react';

//Trabajaremos con Functional Components
const PrimeraApp = () => {
    return (
        <div>
            <h1>Hola Mundo!</h1>
            <p>Mi primera aplicacion</p>
        </div>
    );

}
export default PrimeraApp;*/

//===index.css===
/*
html, body {
  background-color: #21232A;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.3m;
  padding: 70px;
}*/
