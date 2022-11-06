import {Modal} from './modal.js'
import {alertError} from './alert-error.js'
import {calculateIMC, notNumber} from './utils.js'

//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHight = document.querySelector('#height')



// funcao que previne comportamento padroes,
// pega os valores dos campos 
// abre o modal ao submeter
form.onsubmit = function(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber){
        alertError.open()
        return;
    }
    
    alertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

//faz o envio assim que começa a digitar
inputWeight.oninput = () => {
    alertError.close()
}

inputHight.oninput = () => {
    alertError.close()
}
