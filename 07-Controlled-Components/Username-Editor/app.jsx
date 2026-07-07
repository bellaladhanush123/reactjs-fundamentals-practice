import {useState} from 'react';

function App(){
  const[name,setName]=useState('');

  function handleUsername(event){
  setName(event.target.value);
  }

  return(
    <div>

    <input type="text" 
          placeholder="Enter username"
          value = {name}
          onChange={handleUsername}/>
      
      <h1> Username : {name} </h1>
      
    </div>
  );
}
export default App;