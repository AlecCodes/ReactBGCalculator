import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {getMGPerdL, getMMOLPerLiter} from './conversions'

//Only after changing buttons does the submit button use the proper calcualtion. Maybe we don't use a form?


function App() {

  const [mmButtonState, setMMButtonState] = useState(true)
  const [mgButtonState, setMGButtonState] = useState(false)
  const [resultsState, setResultsState] = useState('')
  //This should default to one or the other
  const [conversionState, setConversionState] = useState()
  const [BGEntryState, setBGEntryState] = useState(0)


  ///////////////////////////////////
  //EVENT HANDLERS
  ///////////////////////////////////

  function mmClickHandler(){
    setMMButtonState(true)
    setMGButtonState(false)
    setBGEntryState(0)
    setConversionState(() => mmolToMG)
  }

  function mgClickHandler(){
    setMGButtonState(true)
    setMMButtonState(false)
    setBGEntryState(0)
    setConversionState(() => mgToMM)
  }

  function mmolToMG(event){
    event.preventDefault()
    console.log(getMGPerdL(BGEntryState), "SHOULD BE THE RESULT...")
    setResultsState(getMGPerdL(BGEntryState))
  }

  function mgToMM(event){
    event.preventDefault()
    console.log(getMMOLPerLiter(BGEntryState), "SHOULD BE THE RESULT...")
    setResultsState(getMMOLPerLiter(BGEntryState))
  }

  ///////////////////////////////////
  //CHANGE HANDLERS
  ///////////////////////////////////

  function BGInputHandler(event){
    event.preventDefault()
    console.log("BG INPUT CHANGED", event.target.value)
    setBGEntryState(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    conversionState()
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
          onChange={BGInputHandler}
          value={BGEntryState}
          />
          <input type="Submit"/>
        </form>
      </div>
      
      <button
      onClick={conversionState}
      >
        Try this
      </button>

      <div className="resultsContainer">
        <div>
          <h2>Converted Value:</h2>
          <h3></h3>
          <h3>{resultsState}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
