//FRAGMENT
//========

import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp />, divRoot);

//===PrimeraApp.js===
/*
//import React, { Fragment } from 'react';
import React from 'react';

//Trabajaremos con Functional Components
const PrimeraApp = () => {
    // return (
    //     <Fragment>
    //         <h1>Hola Mundo!</h1>
    //         <p>Mi primera aplicacion...</p>
    //     </Fragment>
    // );

    return (
        <>
            <h1>Hola Mundo!</h1>
            <p>Mi primera aplicacion.....</p>
        </>
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
