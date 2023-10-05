# ISO Compliant Blood Glucose Calculator

#### By Alec Hannaford - International Product Surveillance Specialist
----
[Live Site](https://bgcalculator.onrender.com/)
----
## Background
ISO-15197 (2003) contains the table of blood glucose (BG) conversions between mmol/L and mg/dL. This table is frequently referenced by our International Post-market Surveillance team while processing complaints, due to the fact that different regulatory bodies require different units of BG measurements. A simple browser-based calculator to handle the conversions will yield progress on our goal of reducing the turnover-time necessary to process a complaint. 

## The App
This blood glucose calculator is a single-page React App. Blood glucose values are entered by the user, who clicks a checkbox to indicate which unit of measurement is being entered. A tertiary statement in the submission handler executes the relevant conversion on the value entered, and renders the converted result to the results box. Two functions are used to lookup the conversions - getMGPerdL and getMMOLPerLiter. 

## ISO Complaince & Validation
The ISO_Values file contains both ISO conversion tables as JavaScript objects. Rather than computing the conversion, the getMGPerdL and getMMOLPerLiter functions accept a Number input and returns the corresponding value from the table. The Jest testing suite App.test.js uses 2 loops to test getMMOLPerLiter and getMGPerdL for every input value with a range of 0-600mg/dL and 0-33.3mmol/dL, respectively.
