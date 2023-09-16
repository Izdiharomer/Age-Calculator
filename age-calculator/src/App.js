
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";

function App() {
  const currentYear = 2023;
  const [birthYear, setbirthYear] = useState(0);
  const [age, setAge] = useState(0);

  function clickHandler() {
    const theAge = currentYear - birthYear;
    setAge(theAge);
  }

  function inputChangeHandler(e) {
    setbirthYear(e);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1></h1>
      <h2></h2>
      <input onChange={(e) => inputChangeHandler(e.target.value)} />
      <div>
        {" "}
        <button onClick={clickHandler}>Submit</button>
      </div>

      <div>The age is: {age}</div>
        
      </header>
    </div>
  );
}

export default App;
