const second = document.getElementById('second')
const minute = document.getElementById('minute')
const hour = document.getElementById('hour')

function getTime() {
    const now = new Date()
    const ss = now.getSeconds()
    const mm = now.getMinutes()
    const hh = now.getHours()
    const interval = 6

    second.style.transform = 'rotate(' + (ss * interval) +'deg)';
    minute.style.transform = 'rotate(' + (mm * interval + ss /10) +'deg)';
    hour.style.transform = 'rotate(' + (hh * 30 + mm/2) +'deg)';

}
setInterval(getTime, 100);