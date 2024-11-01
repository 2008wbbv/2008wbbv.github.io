

let isRunning = false;
let isPaused = false;
let timer;
let timeLeft = 25 * 60;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateTimer() {
    timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            isRunning = false;
            startBtn.textContent = 'Start';
            pauseBtn.style.display = 'none';
            alert('Time\'s up!');
        }
    }, 1000);
}

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        if (isPaused) {
            isPaused = false;
            startTimer();
        } else {
            timeLeft = 25 * 60;
            updateTimer();
            startTimer();
        }
        isRunning = true;
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    }
});

pauseBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        isPaused = true;
        isRunning = false;
        startBtn.textContent = 'Resume';
        startBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    isPaused = false;
    timeLeft = 25 * 60;
    updateTimer();
    startBtn.textContent = 'Start';
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
});


updateTimer();