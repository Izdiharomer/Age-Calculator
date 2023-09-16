import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";

function App() {
  const currentYear = 2023;
  const [birthYear, setBirthYear] = useState(0);
  const [age, setAge] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function clickHandler() {
    if (birthYear >= 2023 || birthYear <= 1900) {
      setErrorMessage("Please enter a valid birth year.");
      setAge(0);
    } else {
      const theAge = currentYear - birthYear;
      setAge(theAge);
      setErrorMessage("");
    }
  }

  function inputChangeHandler(e) {
    setBirthYear(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Age Calculator</h1>
        <h2></h2>
        <input
          className="form-control-md"
          id="inputPassword2"
          onChange={(e) => inputChangeHandler(parseInt(e.target.value))}
        />
        <div>
          <button
            className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"
            onClick={clickHandler}
          >
            Submit
          </button>
        </div>

        {errorMessage && <span>{errorMessage}</span>}
        {!errorMessage && age > 0 && (
          <span>You are {age} years old</span>
        )}
      </header>
    </div>
  );
}

export default App;
