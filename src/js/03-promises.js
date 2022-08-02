
// const positionEl = document.querySelector('#position')
// const step = document.querySelector('#step')
// const amount = document.querySelector('#amount')
// const button = document.querySelector('button')

import Notiflix from 'notiflix';
const form = document.querySelector('form')
let delayStart = null
let position = null


form.addEventListener('submit', handleSubmit )

function createPromise(position, delayStart) {
  
  return new Promise((resolve, reject) => {
    
    const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
        
//           Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayStart}ms`);

// Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delayStart}ms`);

        resolve(`✅ Fulfilled promise ${position} in ${delayStart}ms`)
      }
      reject (`❌ Rejected promise ${position} in ${delayStart}ms`)
    }, delayStart)

  })
}

function handleSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget
  // console.log(position.value, step.value, amount.value)


  delayStart = Number(delay.value)

  for ( let i = 0; i < amount.value; i += 1) {
    // console.log(i)
    // console.log(delay)
    position = i + 1
    delayStart = Number(delay.value) + Number(step.value)*i
    createPromise(position, delayStart).then(value => Notiflix.Notify.success(value)).catch(error => Notiflix.Notify.failure(error))
  }
  event.currentTarget.reset()
}
