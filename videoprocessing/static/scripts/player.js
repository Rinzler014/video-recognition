
const currentFrame = $('#currentFrame');
const video = VideoFrame({
    id : 'video-source',
    frameRate: 25.00,
    callback : function(frame) {
        currentFrame.html(frame);
    }
});


function clickPosition(event, video_name) {
    event = event || window.event;

    var x = event.clientX;
    var y = event.clientY;
    
    document.getElementById("coordinates").innerHTML = `X: ${x} , Y: ${y} `

    console.log(x, y, video_name)
    
    $.ajax({

        type: "GET",
        url: "/get_coordinates",
        async: false,
        data: {
            "coorX": x,
            "coorY": y,
            "frame": currentFrame.html()
        },
        success: function (data) {
            console.log("Datos enviados");
        },
        failure: function (data) {
            alert("Failed to send data to server");
        }

    })

}

function playPause() {
    
    if (video.video.paused) {
        video.video.play();
        video.listen('frame');
    } else {
        video.video.pause();
    }
}

function stop() {
    
    video.video.pause();
    video.stopListen();
    video.video.currentTime = 0;
    currentFrame.html(0);

}

