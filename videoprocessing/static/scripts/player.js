
function clickPosition(event) {
    event = event || window.event;

    var x = event.clientX;
    var y = event.clientY;
    
    document.getElementById("coordinates").innerHTML = `X: ${x} , Y: ${y} `

    console.log(x, y)
    
    $.ajax({

        type: "GET",
        url: "/get_coordinates",
        async: false,
        data: {
            "coorX": x,
            "coorY": y 
        },
        success: function (data) {
            alert("Datos enviados");
        },
        failure: function (data) {
            alert("Error");
        }

    })

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