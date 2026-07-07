import {useState} from 'react';
function App(){

const students = [
  { id: 1, name: "Dhanush", marks: 92 },
  { id: 2, name: "Rahul", marks: 88 },
  { id: 3, name: "Sneha", marks: 95 }
];

return (
  <div>
    <h1>Students</h1>

    {students.map(function(student) {
      return (
        <div key={student.id
        }>
          <p>{language}</p>
        </div>
      );
    })}
  </div>
);


}
export default App;