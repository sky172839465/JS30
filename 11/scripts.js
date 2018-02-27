// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('.fullscreen__button');

video.controls = false;

// build function
function togglePlay() {
    const method = (video.paused) ? 'play' : 'pause';
    video[method]();
}

function updatePlayButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    // console.log('update');
}

function skip() {
    video.currentTime += +(this.dataset.skip);
    // console.log(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

function handleFullscreen() {
    console.log(video.requestFullscreen, video.mozRequestFullScreen, video.webkitRequestFullscreen);
    if (!document.webkitIsFullScreen) {
        video.webkitRequestFullscreen();
    } else {
        video.webkitExitFullScreen();
    }         
    console.dir(video);
}

// hook listener
video.addEventListener('click', togglePlay);
video.addEventListener('dblclick', handleFullscreen);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousedown', () => mousedown = true);
fullscreenButton.addEventListener('click', handleFullscreen);