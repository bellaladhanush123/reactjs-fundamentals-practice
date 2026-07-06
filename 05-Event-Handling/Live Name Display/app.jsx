import {useState} from 'react';

function App(){
  const[name,setName]=useState('');

  function onNameChange(event){
    setName(event.target.value);
  }

  return(
    <div>
    <input type="text" placeholder="Enter name" onChange={onNameChange}/> 
    <h1> Welcome, {name} </h1>
    </div>
  );
}
export default App;