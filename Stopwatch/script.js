let [hours, minutes, seconds] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
let timer = null;


function workingWatch()
{
    seconds++;
    if(seconds == 60) {
        minutes++;
        seconds = 0;

        if(minutes == 60) {
            hours++;
            minutes = 0;
            seconds = 0;
        }
    }

    let h = hours < 10 ? "0"+hours : hours;
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = seconds < 10 ? "0"+seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function updateTime() {
    if(timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(workingWatch, 1000);
}

function reset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00"
}

function pause() {
    if(timer != null) {
        clearInterval(timer);
    }
}