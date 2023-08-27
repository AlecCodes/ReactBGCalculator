import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {getMGPerdL, getMMOLPerLiter} from './conversions'

//Only after changing buttons does the submit button use the proper calcualtion. Maybe we don't use a form?


function App() {

  const [mmButtonState, setMMButtonState] = useState(true)
  const [mgButtonState, setMGButtonState] = useState(false)

  ///////////////////////////////////
  //EVENT HANDLERS
  ///////////////////////////////////

  function mmClickHandler(){
    setMMButtonState(true)
    setMGButtonState(false)
  }

  function mgClickHandler(){
    setMGButtonState(true)
    setMMButtonState(false)

  }

  return (
    <div className="App">
      <h1>BG Calculator</h1>
      <div className="formContainer">
        <form>
          MM<input type="checkbox" 
          onChange={mmClickHandler}
          checked = {mmButtonState}
          />
          MG<input type="checkbox"
          onChange={mgClickHandler}
          checked = {mgButtonState}
          />
          <input type="number"
          />
          <input type="Submit"/>
        </form>
      </div>
      <div className="resultsContainer">
        <div>
          <h2>Converted Value:</h2>
          <h3></h3>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
}

export default App;
