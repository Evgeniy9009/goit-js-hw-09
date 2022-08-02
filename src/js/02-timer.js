import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]')
const datetimePicker = document.querySelector('#datetime-picker')
const inputLocal = document.querySelector("input[datetime-local]")
const inputs = document.querySelectorAll('input')

console.log(inputs)

const daysEl = document.querySelector('span[data-days]')
const hoursEl = document.querySelector('span[data-hours]')
const minutesEl = document.querySelector('span[data-minutes]')
const secondsEl = document.querySelector('span[data-seconds]')


let delta = null
let timerId = null
let deadline = null


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);

      deadline = selectedDates[0]

      getDeltaTime()

        if (delta < 0) {
          btnStart.setAttribute('disabled', true)          
          window.alert("Please choose a date in the future") 
          return
        } else {
          
          btnStart.removeAttribute('disabled')
            
          }
  },
};

flatpickr(datetimePicker, options);

btnStart.addEventListener("click", timer)

function getDeltaTime() {
  const currentTime = Date.now();
  delta = deadline - currentTime
  // console.log(delta)

    convertMs(delta)
  console.log(convertMs(delta))

  if (delta < 1000) {
    clearInterval(timerId)
  }
}

function timer() {

  timerId = setInterval(getDeltaTime, 1000)
  btnStart.setAttribute("disabled", true)

  inputs.setAttribute("disabled", true)
  inputLocal.setAttribute("disabled", true)
  datetimePicker.setAttribute("disabled", true)
  
  console.log(delta)
}

function convertMs(ms) {
  
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

   addLeadingZero ({ days, hours, minutes, seconds })

  // daysEl.textContent = days < 10 ? `0${days}` : days
  // hoursEl.textContent = hours < 10 ? `0${hours}` : hours
  // minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes
  // secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  if (delta < 0) { return }
  daysEl.textContent = String(days).padStart(2, '0')
  hoursEl.textContent = String(hours).padStart(2, '0')
  minutesEl.textContent = String(minutes).padStart(2, '0')
  secondsEl.textContent = String(seconds).padStart(2, '0')
}





