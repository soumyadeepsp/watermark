var email = window.prompt("Enter your email");

var videoWrapper = document.querySelector('.video-wrapper');

var watermark_email = document.getElementById('watermark_email');
watermark_email.innerText = email;

var video = document.getElementById('myVideo');

randomCoordinates = () => {
    var x = video.getBoundingClientRect().x;
    var y = video.getBoundingClientRect().y;
    var width = video.getBoundingClientRect().width;
    var height = video.getBoundingClientRect().height;
    var xnew = Math.floor(Math.random()*height) + x;
    var ynew = Math.floor((Math.random()*width) + y);
    return [xnew, ynew];
}
var watermark = document.getElementsByClassName('watermark')[0];
var xnew = randomCoordinates()[0];
var ynew = randomCoordinates()[1];
watermark.style.top = xnew+'px';
watermark.style.left = ynew+'px';

video.onloadedmetadata = () => {
    var duration = parseInt(video.duration);
    var time = 0;
    video.onplay = () => {
        var interval = setInterval(() => {
            if (time > duration) {
                clearInterval(interval);
            }
            time = time+5;
            console.log(video.currentTime);
            var xnew = randomCoordinates()[0];
            var ynew = randomCoordinates()[1];
            watermark.style.top = xnew+'px';
            watermark.style.left = ynew+'px';
            if (watermark.style.display == 'none') {
                watermark.style.display = 'block';
            } else {
                watermark.style.display = 'none';
            }
        }, 5000);
    }
}