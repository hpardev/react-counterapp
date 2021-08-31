import React from 'react';
import PropTypes from 'prop-types';

//const PrimeraApp = ({nombre, edad = 15}) => {  //Es una forma de hacerlo que no crea la Prop al inspeccionar el componente
const PrimeraApp = ({nombre, edad}) => {   //Esta otra forma se basa en .defaultProps

    return (
        <>
            <h1>Hola soy {nombre}, y tengo {edad} anios</h1>
        </>
    );    
}

PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number
}

PrimeraApp.defaultProps = {
    edad: 15
}

export default PrimeraApp;
