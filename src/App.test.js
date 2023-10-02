import { render, screen } from '@testing-library/react';
import App from './App';
import {getMGPerdL, getMMOLPerLiter, oneDecRound} from './conversions'
import {ISO_mg_to_mmol, ISO_mmol_to_mg, ISO_mg_to_mmol_float, ISO_mmol_to_mg_float} from './ISO_Values'


for (let i = 0; i <= 33.4; i += 0.1){
  const mmolValue = i.toFixed(1)  
  const ISOMgValue = ISO_mmol_to_mg[mmolValue]
  test (`${mmolValue}mmol/L is ${ISOMgValue}mg/dL`, () => {
    expect(getMGPerdL(mmolValue)).toBe(ISOMgValue)
  })
}


for (let i = 0; i <= 600; i++){
  const mgValue = i;
  const ISOMmolValue = ISO_mg_to_mmol[mgValue]
  test (`${mgValue}mg/dL is ${ISOMmolValue}mmol/L`, () => {
    expect(getMMOLPerLiter(mgValue)).toBe(ISOMmolValue)
  })
}

