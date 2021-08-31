//HOLA MUNDO EN REACT
//===================

import React from 'react';
import ReactDOM from 'react-dom';

const saludo = <h1>Hola mundo!</h1>
const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot); //Para renderizar el saludo
