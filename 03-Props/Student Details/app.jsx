import {useState} from 'react';
function Student(props){
  return (
  <div>
  <h1>Name : {props.name} </h1>
  <p> Branch : {props.branch} </p>
  </div>
  );
}

function App(){
  return(
    <div>
<Student name="Dhanush" branch="AIML" />

<Student name="Rahul" branch="CSE" />

<Student name="Sneha" branch="ECE" />
</div>
  );
}
export default App;