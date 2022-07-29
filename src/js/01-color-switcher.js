const butttonStart = document.querySelector("button[data-start]")
const butttonStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
let timerId = null

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

butttonStart.addEventListener('click', startEvent) 

function startEvent() {
    timerId = setInterval(colorSwitcher, 1000)
    butttonStart.setAttribute("disabled", true)
    console.log(timerId)
    // return timerId
}
    console.log(timerId)

function colorSwitcher() {
    body.style.backgroundColor = getRandomHexColor()
    console.log('dfgdg')
}

butttonStop.addEventListener('click', () => {
    butttonStart.removeAttribute("disabled")
    clearInterval(timerId)
    console.log('stop')
    console.log(timerId)
})
