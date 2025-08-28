import './App.css';
import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [additionresult, setAdditionResult] = useState("");
  const [substractionresult, setSubstractionResult] = useState("");
  const [multiplicationresult, setMultiplicationResult] = useState("");
  const [divisionresult, setDivisionResult] = useState("");


  
  

  function handleAddition() {
    setAdditionResult(num1 + num2)
    setMultiplicationResult("")
    setDivisionResult("")
    setSubstractionResult("")
  }

  function handleSubstract() { 
    setSubstractionResult(num1 - num2)
    setAdditionResult("")
    setMultiplicationResult("")
    setDivisionResult("")
   
  }

  function handleMultiply() {
    setAdditionResult("")
    setSubstractionResult("")
    
    setMultiplicationResult(num1 * num2)
    setDivisionResult("")

    
  }

  function handleDivision() {
   setAdditionResult("")
    setSubstractionResult("")
    setDivisionResult(num1 / num2);
    setMultiplicationResult("")

    
  }

  function handleNum1Change(event) {
    setNum1(parseInt(event.target.value));
  }

  function handleNum2Change(event) {
    setNum2(parseInt(event.target.value));
  }

  return (
    <div>
      <input
        name="number1"
        value={num1}
        onChange={handleNum1Change}
      />
      <input
        name="number2"
        value={num2}
        onChange={handleNum2Change}
      />

      <span><button onClick={handleAddition}>Addition</button></span>
      <span><button onClick={handleSubstract}>Substraction</button></span>
      <span><button onClick={handleMultiply}>Multiplication</button></span>
      <span><button onClick={handleDivision}>Division</button></span>


{additionresult !== "" && (
        <h1>Addition of {num1}+ {num2}: {additionresult}</h1>
      )}
      {substractionresult !== "" && (
        <h1>Subtraction of {num1}- {num2}: {substractionresult}</h1>
      )}
      {multiplicationresult !== "" && (
        <h1>Multiplication of {num1}* {num2}: {multiplicationresult}</h1>
      )}
      {divisionresult !== "" && (
        <h1>Division of {num1}/ {num2}: {divisionresult}</h1>
      )}
    </div>
  );
}

export default App;
