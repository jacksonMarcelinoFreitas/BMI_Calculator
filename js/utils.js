function notNumber(value){
    return isNaN(value) || value == ""
}

//funcao que faz o calculo do IMC
function calculateIMC(weight, height){
    return (weight / ((height/100)**2)).toFixed(2)
}

export {calculateIMC, notNumber}