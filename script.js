const time = document.querySelector('.current-time')
const day = document.querySelector('.current-day')
const dayofWeek =['sunday', 'monday','tuesday', 'wednessday', 'thursday', 'friday', 'saturday']

const current = new Date()
const currentTime = current.toUTCString()
const currentDay = current.getUTCDay()
time.textContent=`Time:${currentTime.slice(16, -3)} UTC`
day.textContent = `Day:${dayofWeek[currentDay].toString()}, ${currentTime.slice(5,16)}`





