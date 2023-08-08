const buttons = document.querySelectorAll('#buttons')
const timer = document.querySelector('.timer')
const counter = document.querySelector('.counter')
const startBtn = document.querySelector('.start-button')
const modal = document.querySelector('.modal-wrapper')
const xmark = document.querySelector('.xmark')


function modalremove() {
    modal.style.display = 'none'
}
xmark.addEventListener('click', modalremove)

let time = 0
let index = 0
let timerID


startBtn.addEventListener('click', increment)

buttons.forEach(button => {
    button.addEventListener('click', () => {
    
        const setTime = Number(button.textContent)
        time = setTime
        
        timerID = setInterval(() => {
            time--
            timer.textContent = `Time: ${time}s`

            if (time == 0) {
             clearInterval(timerID);
             endclick()
            }
        }, 1000)
       
     
    })
})


function increment() {
    index++
    counter.innerHTML = Number(index)

    if (time == 0) {
        alert('Please select your time first.')
        index = 0
        counter.innerHTML = Number(index)
    }
}

function endclick () {
    alert(`Hooray!! You're score is ${index}`)
    timer.textContent = 'Time: 0s'
    counter.innerHTML = 0
}
