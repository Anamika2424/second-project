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
      < table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gaon</th>
          </tr>
        </thead>
        <tbody>
    {student.map((student)=>(
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td >{student.age}</td>
        <td>{student.gaon}</td>
      
      </tr>

    )
  )}
  </tbody>
  </table>
    </div>
  );
}

export default App;