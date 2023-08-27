
function roundUpIfFirstDecNine(num){
    const decimalPart = num - Math.floor(num)
    return (Math.floor(decimalPart * 10) === 9) ? Math.ceil(num) : num - decimalPart
}

function oneDecRound(num){
    return Math.round(num * 10) / 10
}


function getMMOLPerLiter(mg){
    return oneDecRound(mg/18.018)
}

function getMGPerdL(mm){
    return roundUpIfFirstDecNine(mm * 18.018)
}

module.exports = {getMGPerdL, getMMOLPerLiter}