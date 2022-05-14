const lineSeconds = document.querySelector('.line-seconds')
const lineMinutes = document.querySelector('.line-minutes')
const lineHours = document.querySelector('.line-hours')

let time = new Date()

lineSeconds.style.transform = `rotate(${time.getSeconds() * 6}deg)`
lineMinutes.style.transform = `rotate(${time.getMinutes() * 6}deg)`
lineHours.style.transform = `rotate(${(time.getHours() % 12) * 30}deg)`


let seconds = setInterval(() => {
  time = new Date 
  lineSeconds.style.transform = `rotate(${time.getSeconds() * 6}deg)`
  lineMinutes.style.transform = `rotate(${time.getMinutes() * 6}deg)`
  lineHours.style.transform = `rotate(${(time.getHours() % 12) * 30}deg)`
}, 100)
