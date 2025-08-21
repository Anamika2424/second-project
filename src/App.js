import './App.css';
import React, { useState } from 'react'

function App() {
    const [age,setAge] = useState();
function handleAgeChange(event){
    setAge(event.target.value)
}
    return  (
        <div>
             <input name="age" value={age} onChange={handleAgeChange}></input>
            <div>{age}</div>
        </div>

    )
}
export default App;
