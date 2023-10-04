import './App.css';
import {useState, useEffect} from 'react';
import {getMGPerdL, getMMOLPerLiter} from './conversions'

//IDEAS
//Highlight the results?
//SHOULD WE USE REDUX>?!? then add more features, such as entering a rnage
// mg (mmol) result!? format it this way
//Highlight

function App() {

  const [mmButtonState, setMMButtonState] = useState(true)
  const [mgButtonState, setMGButtonState] = useState(false)
  const [unitConversionState, setUnitConversionState] = useState('mg/dL')
  const [stepState, setStepState] = useState('0.1')
  const [resultsState, setResultsState] = useState('')

 
  ///////////////////////////////////
  //EVENT HANDLERS
  ///////////////////////////////////

  function mmClickHandler(){
    setMMButtonState(true)
    setMGButtonState(false)
    setUnitConversionState('mg/dL')
    setStepState('0.1')
    setResultsState(null)
  }

  function mgClickHandler(){
    setMGButtonState(true)
    setMMButtonState(false)
    setUnitConversionState('mmol/L')
    setStepState('1')
    setResultsState(null)
  }


  function submitHandler(e){
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    //Get the entered value as an object
    const formJSON = Object.fromEntries(formdata.entries())
    

    formJSON.mgInputCheckBox ? setResultsState(getMMOLPerLiter(formJSON.bgInputValue)) : setResultsState(getMGPerdL(formJSON.bgInputValue))

//    formJSON.mgInputCheckBox ? console.log(formJSON.bgInputValue, "mg/dL converts to " ,getMMOLPerLiter(formJSON.bgInputValue),"mmol/L") : console.log(formJSON.bgInputValue, "mmol/L converts to " , getMGPerdL(formJSON.bgInputValue), "mg/dL")
  }


  return (

    //use label html tag!

    <div className="App">
      <div className='parentContainer'>
        <h1>BG Calculator</h1>
        <div className="formContainer">
          <form onSubmit={submitHandler}>
            mmol/L<input type="checkbox"
            name = "mmolInputCheckBox" 
            onChange={mmClickHandler}
            checked = {mmButtonState}
            />
            mg/dL<input type="checkbox"
            name = "mgInputCheckBox"
            onChange={mgClickHandler}
            checked = {mgButtonState}
            />
            <input type="number"
            step = {stepState}
            name = "bgInputValue"
            />
            <input type="Submit"/>
          </form>
        </div>
        <div className="resultsContainer">
          <div>
            <h2>Converted Value:</h2>
            <h3><span id='results'>{resultsState}</span> {unitConversionState}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;