const timer = document.querySelector('#timer')
let seconds = 0;
let minutes = 0;

count(); // out 00:00

function startTimer() {
    setInterval(count, 1000) // запуск таймера
}

function count() {
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);

    // if (seconds < 10) {
    //     sec = `${seconds}`;
    // }
    // if (minutes < 10) {
    //     min = `${minutes}`;
    // }

    if (hours == 0) {
        if ((seconds - (60 * minutes)) < 10 && minutes < 10) {
            timer.innerText = `0${minutes}:0${seconds - (60 * minutes)}`;
        }
        else if (minutes < 10) {
            timer.innerText = `0${minutes}:${seconds - (60 * minutes)}`;
        }
        else if ((seconds - (60 * minutes)) < 10 && minutes >= 10) {
            timer.innerText = `${minutes}:0${seconds - (60 * minutes)}`;
        } else {
            timer.innerText = `${minutes}:${seconds - (60 * minutes)}`;
        }
    }

    if (hours > 0) {
        if ((seconds - (60 * minutes)) < 10 && minutes - (60 * hours) < 10) {
            timer.innerText = `${hours}:0${minutes - (60 * hours)}:0${seconds - (60 * minutes)}`;
        }
        else if (minutes - (60 * hours) < 10) {
            timer.innerText = `${hours}:0${minutes - (60 * hours)}:${seconds - (60 * minutes)}`;
        }
        else if ((seconds - (60 * minutes)) < 10 && minutes - (60 * hours) >= 10) {
            timer.innerText = `${hours}:${minutes - (60 * hours)}:0${seconds - (60 * minutes)}`;
        } else {
            timer.innerText = `${hours}:${minutes - (60 * hours)}:${seconds - (60 * minutes)}`;
        }
    }
    seconds += 1;
}