import './App.css';

import React, { useState } from 'react'

function App() {
    const [age, setAge] = useState();
    const [showBlock, setShowBlock] = useState(false);

    function handleAgeChange(event) {
        setAge(event.target.value);
    }

    function onDisplay() {
        setShowBlock(true);
    }

    return (
        <div>
            <input
                name="age"
                value={age}
                onChange={handleAgeChange}
            />

            <button onClick={onDisplay} >Display Value</button>

            <div> {showBlock ?
                <div>{age}</div>:
                <div>please press the button</div>
            }</div>
        </div>
    )
}

export default App;
