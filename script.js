const button = document.querySelector('.btn')
const message = document.querySelector('#name')
const feedback = document.querySelector('.feedback')
const messageContent = document.querySelector('.message-content')

button.addEventListener('click',submitmessage)
function submitmessage() {
    if(message.value === ''){
        feedback.classList.add('show')
        }

    else{
        feedback.classList.remove('show')
        messageContent.textContent = message.value
        
        
    }

}