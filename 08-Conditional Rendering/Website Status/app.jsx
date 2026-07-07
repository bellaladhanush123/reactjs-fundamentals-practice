import {useState} from 'react';
function App(){
  const[online,setOnline]=useState(false);

  function toggle(){
    setOnline(!online);
  }

  return(
    <div>
    <h1>
        Website Status : {online ? "Online" : "Offline"}
      </h1>
    <button onClick={toggle}> Change status </button>
    </div>
  )
}
export default App;