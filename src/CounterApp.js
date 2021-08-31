import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({value}) => {

  //Hook
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter( (c) => c + 1); //Tambien funciona de este forma
  }

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      {/* <button onClick = {function() { console.log('+1')}}>+1</button> */}
      {/* <button onClick = { (e) => console.log(e)}>+1</button> */}
      {/* <button onClick = { (e) => {handleAdd(e)} }>+1</button> */}
      <button onClick = { handleAdd } >+1</button>
      <button onClick = { handleReset } >Reset</button>
      {/* Una forma mas directa */}
      <button onClick = { () => setCounter(counter - 1) } >-1</button>
    </>
  );    
}

PrimeraApp.propTypes = {
    value: PropTypes.number.isRequired
}

PrimeraApp.defaultProps = {
    value: 0
}

export default PrimeraApp;
