import './App.css';
import {useState, useEffect} from 'react';
import {getMGPerdL, getMMOLPerLiter} from './conversions'

//Only after changing buttons does the submit button use the proper calcualtion. Maybe we don't use a form?


function App() {

  const [mmButtonState, setMMButtonState] = useState(true)
  const [mgButtonState, setMGButtonState] = useState(false)
  const [unitConversionState, setUnitConversionState] = useState('mg/dL')
  const [stepState, setStepState] = useState('0.1')

  let converstionFunction = getMGPerdL;

  ///////////////////////////////////
  //EVENT HANDLERS
  ///////////////////////////////////

  function mmClickHandler(){
    setMMButtonState(true)
    setMGButtonState(false)
    setUnitConversionState('mg/dL')
    setStepState('0.1')
    converstionFunction = getMGPerdL;
  }

  function mgClickHandler(){
    setMGButtonState(true)
    setMMButtonState(false)
    setUnitConversionState('mmol/L')
    setStepState('1')
    converstionFunction = getMMOLPerLiter;
  }


  function submitHandler(e){
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);

    const formJSON = Object.fromEntries(formdata.entries())
    
    console.log(formJSON)

    formJSON.mgInputCheckBox ? console.log(formJSON.bgInputValue, "mg/dL converts to " ,getMMOLPerLiter(formJSON.bgInputValue),"mmol/L") : console.log(formJSON.bgInputValue, "mmol/L converts to " , getMGPerdL(formJSON.bgInputValue), "mg/dL")
  }


  return (

    //use label html tag!

    <div className="App">
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
          <h3>{unitConversionState}</h3>
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
}

export default App;