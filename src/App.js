

import './App.css';
import React, { useState } from 'react';

function App() {
  const [student, setStudent] = useState([
    { no: 1, name: "Anamika", age: 22, gaon: "Pimpari pendhar" },
    { no: 2, name: "Nikita", age: 23, gaon: "Rajuri" },
    { no: 3, name: "Apeksha", age: 24, gaon: "Ale" },
    { no: 4, name: "Trusha", age: 67, gaon: "Alephata" },
    { no: 5, name: "Sharvani", age: 56, gaon: "Belhe" },
  ]);

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gaon</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr 
              key={student.no} 
              style={ student.age > 50 ? { backgroundColor: "black", color: "white" } : {} }
            >
              <td>{student.no}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gaon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
