#ISO Compliant Blood Glucose Calculator

####By Alec Hannaford - International Product Surveillance Specialist
----
##Background
ISO [XXXX] is the table of blood glucose (BG) conversions between mmol/L and mg/dL. This table is frequently referenced by our International Post-market Surveillance team while processing complaints, due to the fact that different regulatory bodies require different units of BG measurements. A simple browser-based calculator to handle the conversions will yield progress on our goal of reducing the turnover-time necessary to process a complaint. 

##The App
This blood glucose calculator is a single-page React App. Blood glucose values are entered by the user, who clicks a checkbox to indicate which unit of measurement is being entered. 

##Problems
If the user enters a whole number (no decimal) as a mmol/dL input value, it will return undefined due to the fact that the lookup table has float key values.  
If the isWhole condition is met, than this means that whole floats (ending in .0) will get converted to 32.0.0, and return undefined from the table. 
So, we need to make sure the user can enter both 32 and 32.0 and get the same result. This can be done by ensuring that isWhole evaluates to true if no dots are contained in the input.