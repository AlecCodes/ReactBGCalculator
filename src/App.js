import './App.css';
import {useState, useEffect} from 'react';
import {getMGPerdL, getMMOLPerLiter} from './conversions'

//Only after changing buttons does the submit button use the proper calcualtion. Maybe we don't use a form?


function App() {

  const [mmButtonState, setMMButtonState] = useState(true)
  const [mgButtonState, setMGButtonState] = useState(false)
  const [unitConversionState, setUnitConversionState] = useState('mmol/L')

  let converstionFunction = getMGPerdL;

  ///////////////////////////////////
  //EVENT HANDLERS
  ///////////////////////////////////

  function mmClickHandler(){
    setMMButtonState(true)
    setMGButtonState(false)
    setUnitConversionState('mmol/L')
    converstionFunction = getMGPerdL;
  }

  function mgClickHandler(){
    setMGButtonState(true)
    setMMButtonState(false)
    setUnitConversionState('mg/dL')
    converstionFunction = getMMOLPerLiter;
  }


  function submitHandler(e){
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);

    const formJSON = Object.fromEntries(formdata.entries())
    
    console.log(formJSON)
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