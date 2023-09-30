import { render, screen } from '@testing-library/react';
import App from './App';
import {getMGPerdL, getMMOLPerLiter, oneDecRound} from './conversions'
import {ISO_mg_to_mmol, ISO_mmol_to_mg, ISO_mg_to_mmol_float, ISO_mmol_to_mg_float} from './ISO_Values'


for (let i = 0; i <= 33.4; i += 0.1){
  const mmolValue = i.toFixed(1)  
  const ISOMgValue = ISO_mmol_to_mg_float[mmolValue]
  test (`${mmolValue}mmol/L is ${ISOMgValue}mg/dL`, () => {
    expect(getMGPerdL(mmolValue)).toBe(ISOMgValue)
  })
}

//console.log(ISO_mmol_to_mg_float[30.0])


//This should contain the ISO complaint values from the document
const mmol_to_mg = {
  0 : 0,
  0.1 : 1,
  0.2 : 3,
  0.3 : 5,
  0.4 : 7,
  0.5 : 9,
  0.6 : 10,
  0.7 : 12,
  0.8 : 14,
  0.9 : 16,
  1.0 : 18,
  1.1 : 19
}


test('1.1mmol/L is 19mg/dL', () => {
    expect(getMGPerdL(1.1)).toBe(19);
})
