import './App.css';
import React, { useState } from 'react'


function App() {
   const [count ,setCount]=useState(0)
    function handleIncrease (){
      setCount(count+1)
    }   
  return (
    <div>
      <div>{count}</div>
     <button onClick={handleIncrease}>Increment</button>
     
    </div>
  );
}

export default App;