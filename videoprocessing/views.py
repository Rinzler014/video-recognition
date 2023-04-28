from django.shortcuts import render

# Create your views here.


def index(request):
    
    context = {
        
        "title": "Video Processing",
        "video_v": "https://www.youtube.com/embed/43F_3V6MTd4",
        "video_name" : "Video 1",
        "video_description" : "This is a video about a dog",
        "video_date" : "2021-10-10",
        
        
    }
    
    return render(request, "Player/player.html", context)
