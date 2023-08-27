import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {getMGPerdL, getMMOLPerLiter} from './conversions'

function App() {

  const [mmButtonState, setMMButtonState] = useState(false)
  const [mgButtonState, setMGButtonState] = useState(false)
  const [resultsState, setResultsState] = useState('')
  const [conversionState, setConversionState] = useState(null)


  ///////////////////////////////////
  //EVENT HANDLERS
  ///////////////////////////////////

  function mmClickHandler(){
    setMMButtonState(true)
    setMGButtonState(false)
    setConversionState(() => mmolToMG)
  }

  function mgClickHandler(){
    setMGButtonState(true)
    setMMButtonState(false)
    setConversionState(() => mgToMM)
  }

  function mmolToMG(event){
    event.preventDefault();
    console.log("THIS BUT CONVERTED TO MG")
  }

  function mgToMM(event){
    event.preventDefault();
    console.log( "THIS BUT CONVERTED TO MM")
  }


  return (
    <div className="App">
      <h1>BG Calculator</h1>
      <div className="formContainer">
        <form onSubmit={conversionState}>
          MM<input type="checkbox" 
          onChange={mmClickHandler}
          checked = {mmButtonState}
          />
          MG<input type="checkbox"
          onChange={mgClickHandler}
          checked = {mgButtonState}
          />
          <input type="number"/>
          <input type="Submit"/>
        </form>
      </div>

      <div className="resultsContainer">
        <div>
          <h2>Converted Value:</h2>
          <h3></h3>
          <input type="text" 
          value={resultsState}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
