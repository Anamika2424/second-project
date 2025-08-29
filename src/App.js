import './App.css';
import React, { useState } from 'react'


function App() {
  
  const [student,setStudent]= useState([
    { id :1,name:"Anamika",age:22,gaon:"Pimpari pendhar"},
    {id :2,name:"Nikita",age:23,gaon:"Rajuri"},
    {id:3,  name :"Apeksha" ,age:24,gaon:"Ale"}

  ]);
  return (
    <div>
    {student.map((student)=>(
      <div key={student.id}>
        <span>{student.id}</span>
        <span>{student.name}</span>
        <span >{student.age}</span>
        <span>{student.gaon}</span>

      </div>

    )
  )}
    </div>
  );
}

export default App;