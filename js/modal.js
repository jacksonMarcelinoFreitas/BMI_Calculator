// objeto que vai orquestrar o abrir e fechar do modal (OBJECT LITERALS)
export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}// objeto que vai orquestrar o abrir e fechar do modal (OBJECT LITERALS)


//funçao que faz o fechamento do modal
Modal.buttonClose.onclick = () => {
    Modal.close()
}
//Evento de clique
window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event){
    if(event.key === 'Escape')
    Modal.close()
}