let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = 1;

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startPause').innerText = 'Resume';
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startPause').innerText = 'Pause';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = 1;
    updateDisplay();
    document.getElementById('startPause').innerText = 'Start';
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    const lapTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${laps}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
    laps++;
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('display').innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

