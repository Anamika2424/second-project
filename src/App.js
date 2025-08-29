import './App.css';
import React, { useState } from 'react'


function App() {
  
  const [student,setStudent]= useState({name:"Anamika" , age:22, gaon:"pimpari pendhar"})
  return (
    <div>
    <p>Name:{student.name}</p>
    <p>Age:{student.age}</p>
    <p>Gaon:{student.gaon}</p>


    </div>
  );
}

export default App;