const clock = document.querySelector(".clock");
const daily = document.querySelector(".daily span")

function realTimeClock() {
    const date = new Date;
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second}`
}

const dailyText = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

const monthText = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

function realTimeDaily() {
    const date = new Date;
    const month = monthText[date.getMonth()];
    const day = dailyText[date.getDay()];
    const dates = date.getDate()
    daily.innerText = `${month}. ${dates} (${day})`
}


realTimeClock();
setInterval(realTimeClock, 1000);
realTimeDaily();
setInterval(realTimeDaily, 1000);