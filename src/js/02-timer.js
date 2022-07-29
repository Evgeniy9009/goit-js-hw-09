import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]')
const datetimePicker = document.querySelector('#datetime-picker')

let dataNow = new Date()
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
      console.log(selectedDates[0].getTime());
        console.log(dataNow.getTime())
        if (selectedDates[0].getTime() < dataNow.getTime()) {
            btnStart.setAttribute('disabled', true)
            window.alert("Please choose a date in the future")            
        } else { btnStart.removeAttribute('disabled') }
        },
    };

flatpickr(datetimePicker, options);
btnStart.setAttribute('disabled', true)

