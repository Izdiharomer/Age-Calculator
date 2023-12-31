import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { useTheme } from './ThemeContext';
import Practice from './Practice';

function App() {
  const { theme, setTheme } = useTheme();
  const currentYear = 2024;
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  function clickHandler() {
    if (!/^\d+$/.test(birthYear) || birthYear >= 2024 || birthYear <= 1900) {
      setErrorMessage("Please enter a valid birth year.");
      setAge(0);
    } else {
      const theAge = currentYear - parseInt(birthYear);
      setAge(theAge);
      setErrorMessage("");
    }
  }

  function resetHandler() {
    setBirthYear("");
    setAge(0);
    setErrorMessage("");
  }

  function inputChangeHandler(e) {
    setBirthYear(e.target.value);
  }
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
    <div className={` ${theme === 'dark' ? 'dark-theme' : ''}`}> 
      <button className={"btn btn-secondary btn-lg mx-2 px-3 py-1 mt-2"} onClick={toggleTheme}>{theme ? `Light Mode` : `Dark Mode`}</button>
      <Practice/>
    </div>
      <header className={`app-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
        <div >
          <div>
            <h1 className='pb-4  text-white text-shadow'>Age Calculator</h1>
            <input
              className="form-control"
              id="input"
              value={birthYear}
              onChange={(e) => inputChangeHandler(e)}
              pattern="\d*"
              inputMode="numeric"
              placeholder=' 0'
            />
            {errorMessage && <span>{errorMessage}</span>}
            {!errorMessage && age > 0 && (
              <p className='p-2'>You are {age} years old</p>
            )}
            <div>
              <button
                className="btn-purple-moon btn btn-primary btn-lg mx-2 px-5 py-2 mt-2"
                onClick={clickHandler}
              >
                Submit
              </button>
              <button
                className="btn-purple-moon btn btn-primary btn-lg mx-2 px-5 py-2 mt-2"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}

export default App;
