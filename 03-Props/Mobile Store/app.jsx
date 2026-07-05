import { useState } from "react";

function Mobile(props) {
  return (
    <div>
      <h2>Mobile : {props.name}</h2>
      <p>Price : {props.price}</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <Mobile name="iPhone 16" price="80000" />
      <Mobile name="Samsung S25" price="75000" />
      <Mobile name="OnePlus 14" price="60000" />
    </div>
  );
}

export default App;