function Employee1() {
  return (
    <div>
      <h3>Name : Rahul</h3>
      <p>Role : Software Engineer</p>
      <p>Company : Google</p>
    </div>
  );
}

function Employee2() {
  return (
    <div>
      <h3>Name : Sneha</h3>
      <p>Role : UI Developer</p>
      <p>Company : Microsoft</p>
    </div>
  );
}

function Employee3() {
  return (
    <div>
      <h3>Name : Arjun</h3>
      <p>Role : Backend Developer</p>
      <p>Company : Amazon</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Employee1 />
      <Employee2 />
      <Employee3 />
    </div>
  );
}

export default App;