
const currentFrame = $('#currentFrame');
const video = VideoFrame({
    id : 'video-source',
    frameRate: 25.00,
    callback : function(frame) {
        currentFrame.html(frame);
    }
});
const video_name = document.getElementById("video-source");
video_name.addEventListener("click", clickPosition);
var coordArr = [];
var frameArr = []
function clickPosition(event) {
    
    var size = video_name.getBoundingClientRect();

    var scaleX = this.videoWidth / size.width; // Video Width divided by element width
    var scaleY = this.videoHeight / size.height; // Video Height divided by element height

    var rect = this.getBoundingClientRect();  // Dimensions of element
    var x = ((event.clientX - rect.left) * scaleX)|0; // Dimensions of click event * scale
    var y = ((event.clientY - rect.top ) * scaleY)|0; // Dimensions of click event * scale

    document.getElementById("coordinates").innerHTML = `X: ${x} , Y: ${y} `
    coordArr.push(x,y)
    frameArr.push(currentFrame.html())
    console.log(x, y, video_name)
    console.log(coordArr.length,coordArr)
    console.log(frameArr)
    
    
    if (coordArr.length == 4){
        if (frameArr[0] == frameArr[1]){
        $.ajax({

            type: "GET",
            url: "/get_coordinates",
            async: false,
            data: {
                "coorX1": coordArr[0],
                "coorY1": coordArr[1],
                "coorX2": coordArr[2],
                "coorY2": coordArr[3],
                "frame": currentFrame.html()
            },
            success: function (data) {
                console.log("Data send");
            },
            failure: function (data) {
                alert("Failed to send data to server");
            }

        })
        coordArr = []
        frameArr = []
        }
        else{
            console.log("Data not send, clicks in different frames");
        }
        
        coordArr = []
        frameArr = []
    }

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

