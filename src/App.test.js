import { render, screen } from '@testing-library/react';
import App from './App';
import {getMGPerdL, getMMOLPerLiter, oneDecRound} from './conversions'
import {ISO_mg_to_mmol, ISO_mmol_to_mg} from './ISO_Values'

//console.log(ISO_mg_to_mmol, ISO_mmol_to_mg)



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

for (let i = 0; i < 1.2; i += 0.1){
  const mmolValue = oneDecRound(i)
  //reference the ISO values here
  const mgISOConversion = mmol_to_mg[mmolValue]
  test(`${mmolValue}mmol/L is ${mgISOConversion} mg/dL`, () => {
    expect(getMGPerdL(mmolValue)).toBe(mgISOConversion)
  })

}


test('1.1mmol/L is 19mg/dL', () => {
    expect(getMGPerdL(1.1)).toBe(19);
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
