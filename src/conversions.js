import {ISO_mg_to_mmol, ISO_mmol_to_mg} from "./ISO_Values"

export function roundUpIfFirstDecNine(num){
    const decimalPart = num - Math.floor(num)
    return (Math.floor(decimalPart * 10) === 9) ? Math.ceil(num) : num - decimalPart
}

export function oneDecRound(num){    
    return Math.round(num * 10) / 10
}

export function getMMOLPerLiter(mg){
    return oneDecRound(mg/18.018)
}

export function getMGPerdL(mm){
    return roundUpIfFirstDecNine(mm * 18.018)
}
