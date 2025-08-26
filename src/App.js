import './App.css';

import React, { useState } from 'react'

function App() {
    const [ num1 ,setNum1] =useState();
    const [num2 ,setNum2] =useState();
    const [sum ,setSum]=useState();
    const [substract,setSubstarct] =useState()
    const [multiply ,setMultiply]=useState();
    const [division ,setDivision]=useState();

    function handleCalculator(){
      setSum (num1 + num2); 
      setSubstarct (num1 - num2); 
      setMultiply (num1 * num2); 
      setDivision(num1 / num2);     
        
    }
     
   function handleNum1Change(event){
      setNum1(parseInt(event.target.value));
   }
    function handleNum2Change(event){
     setNum2(parseInt(event.target.value));
   }
    
    return (

        <div>
            <input name="number1" value={num1} onChange={handleNum1Change }  />
            <input name="number2" value={num2} onChange={handleNum2Change }  />
            <button onClick={handleCalculator}>Submit</button>


            <div>{sum}</div>
            <div>{substract}</div>
            <div>{multiply}</div>
            <div>{division}</div>
        </div>
    )

}
export default App;
