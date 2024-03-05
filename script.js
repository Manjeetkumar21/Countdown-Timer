const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

const heading = document.querySelector('.heading h4')
const items = document.querySelectorAll('.timer h2')

let futurDay = new Date(2024, 11, 31, 11, 59, 59);

let year = futurDay.getFullYear();
let hours = futurDay.getHours();
let minutes = futurDay.getMinutes();
let date = futurDay.getDate();

let month = futurDay.getMonth();
month = months[month]

let weekday = futurDay.getDay()
weekday = weekdays[weekday]

heading.textContent = `This Year Ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}PM`

const futureTime = futurDay.getTime();


function getRemainingTime(){

    let today = new Date().getTime()
    let timeRemain = futureTime - today

    let oneDay = 24*60*60*1000
    let oneHour = 60*60*1000
    let oneMin = 60*1000

    let days = timeRemain/oneDay
    days = Math.floor(days)

    let hours = (timeRemain % oneDay)/oneHour
    hours = Math.floor(hours)

    let minutes = (timeRemain % oneHour)/oneMin
    minutes = Math.floor(minutes)

    let seconds = Math.floor((timeRemain%oneMin)/1000)

    const values = [days, hours, minutes, seconds]

    function format(item){
        if(item<10){
            return `0${item}`
        }
        return item
    }
    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    })
}

const counter = setInterval(getRemainingTime, 1000)