import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]')
const datetimePicker = document.querySelector('#datetime-picker')
const days = 

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
        } else { btnStart.removeAttribute('disabled') }
        },
    };

flatpickr(datetimePicker, options);
btnStart.setAttribute('disabled', true)

btnStart.addEventListener("click", timer)

function getDeltaTime() {
  const currentTime = Date.now();
  delta = deadline - currentTime
  console.log(delta)

    convertMs(delta)

  console.log(convertMs(delta))
}

function timer() {

  timerId = setInterval(getDeltaTime, 1000)
  
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

  return { days, hours, minutes, seconds };
}

