const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            // console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(error => {
            console.error('You denied the webcam!!', error);
            alert('你不允許使用相機！我要怎麼展示！！');
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    // console.log(width, height);

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        
        // mess with them
        // pixels = reaEffect(pixels);

        // pixels = rgbSplit(pixels);
        // ctx.globalAlpha = 0.1;

        pixels = greenScreen(pixels);

        // put them back
        ctx.putImageData(pixels, 0, 0);
        // console.log(pixels);
    }, 60);
}

function takePhoto() {
    // play the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of canvas
    const data = canvas.toDataURL('image/jpeg');
    // console.log(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'screenshotByWebcan');
    // link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="Screenshot By Webcam" />`;
    strip.insertBefore(link, strip.firstChild);

}

function reaEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] += 100; //red
        pixels.data[i + 1] -= 50; //green
        pixels.data[i + 2] *= 0.5; //blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; //red
        pixels.data[i + 100] = pixels.data[i + 1]; //green
        pixels.data[i - 150] = pixels.data[i + 2]; //blue
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });

    console.log(levels);
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
  }

getVideo();

video.addEventListener('canplay', paintToCanvas);