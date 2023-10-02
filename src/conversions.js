import {ISO_mg_to_mmol, ISO_mmol_to_mg, ISO_mmol_to_mg_float, ISO_mg_to_mmol_float} from "./ISO_Values"

export function roundUpIfFirstDecNine(num){
    const decimalPart = num - Math.floor(num)
    return (Math.floor(decimalPart * 10) === 9) ? Math.ceil(num) : num - decimalPart
}

export function oneDecRound(num){    
    return Math.round(num * 10) / 10
}

export function getMMOLPerLiter(mg){
    if (mg == 0) {return 0}
    return (ISO_mg_to_mmol[mg]) ? ISO_mg_to_mmol[mg] : 'not found'
}

export function getMGPerdL(mm){
    if (mm == 0){return 0}
    return (ISO_mmol_to_mg[mm]) ? ISO_mmol_to_mg[mm] : 'not found'
}
