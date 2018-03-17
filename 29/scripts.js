let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');

function timer(seconds) {

    // clea exist timer
    clearInterval(countdown);

    const now = Date.now();
    const then = now + (seconds * 1000);
    displayTimeLeft(seconds);
    displayEndTime(then)

    countdown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);
        if (secondLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const displayMin = `${minutes < 10 ? '0' : ''}${minutes}`;
    const displaySec = `${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = `${displayMin}:${displaySec}`;
    document.title = `${displayMin}:${displaySec}`;
    // console.log({ minutes, remainderSeconds });
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = `${end.getHours() < 0 ? '0' : ''}${end.getHours()}`;
    const minutes = `${end.getMinutes() < 0 ? '0' : ''}${end.getMinutes()}`;
    endTime.textContent = `Go back at ${hours}:${minutes}`;
}

function startTimer() {
    const seconds = +(this.dataset.time);
    timer(seconds);
    // console.log(seconds);
}

function handleSubmit(e) {
    e.preventDefault();
    const minutes = (this.minutes.value * 60);
    // console.log(minutes);
    timer(minutes);
    this.reset();
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', handleSubmit);