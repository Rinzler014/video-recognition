
function clickPosition(event) {
    event = event || window.event;
    document.getElementById("video").addEventListener("click", clickPosition);
    var x = event.clientX;
    var y = event.clientY;
    
    document.getElementById("coordinates").innerHTML = `X: ${x} , Y: ${y} `
}

function playPause() {
    var video = document.getElementById("video-source");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function stop() {
    var video = document.getElementById("video-source");
    video.pause();
    video.currentTime = 0;
}