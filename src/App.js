import './App.css';

import React, { useState } from 'react'

function App() {
    const [  num1 ,setNum1] =useState();
    const [num2 ,setNum2] =useState();
    const [sum ,setSum] =useState();

    function handleAddition(){
      setSum (num1 +num2);
    }
   function handleNum1Change(event){
      setNum1  (parseInt(event.target.value));
   }
    function handleNum2Change(event){
     setNum2   (parseInt(event.target.value));
   }
    
    return (

        <div>
            <input name="number1" value={num1} onChange={handleNum1Change }  />
            <input name="number2" value={num2} onChange={handleNum2Change }  />
            <button onClick={handleAddition}>Submit</button>
            <div>{sum}</div>
        </div>
    )

}
export default App;
