const consoleLog = document.querySelector('#consoleLog');


consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
})

const Alert = document.querySelector('#alert');


Alert.addEventListener('click', () => {
    alert('Служит для отображения информации пользователям')
})

const Prompt = document.querySelector('#prompt');


Prompt.addEventListener('click', () => {
    prompt('Служит для ввода информации')
})