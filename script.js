document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = [
        "Preoccupied with a single leaf... you won't see the tree. Preoccupied with a single tree... you'll miss the entire forest.",
        "All truly strong people are kind.",
        "A precipitous slope, a narrow river width, a fast and violent flow. Due to the terrain and the external influence, the state of the water is perfectly decided. And yet, water obeys only itself. Water is only water. Thoroughly water. Absolutely free.",
        "My sword is one with heaven and earth. That's why in a fight, I need no sword",
        "As the four seasons between Heaven and Earth flow in an endless cycle, so too, must man work his way through his own cycle of seasons continuous.",
        "If there is a point to having been born then just take it all in. Each part born is by heaven perfectly decided and at once perfectly free.",
        "Live on and endure the shadows! And brightness shall come your way.",
        "Nothing goes perfectly for us. But... being incomplete is what pushes us onward to the next something... If we were even perfectly satisfied, what meaning would the rest of our lives hold, right?",
        "Don't ever give up hope until the very last moment. If you give up, the game is already over."
        
    ];

    const images = [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
        "10.webp"
    ];

    const imagePath = "images/"; 

    const randomParagraphIndex = Math.floor(Math.random() * paragraphs.length);
    const randomImageIndex = Math.floor(Math.random() * images.length);

    const imageUrl = imagePath + images[randomImageIndex];

    const paragraphElement = document.getElementById("random-paragraph");
    const imageElement = document.getElementById("random-image");

    paragraphElement.textContent = paragraphs[randomParagraphIndex];
    imageElement.src = imageUrl;
});

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