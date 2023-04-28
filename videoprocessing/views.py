from django.shortcuts import render

# Create your views here.


def index(request):
    
    context = {
        
        "title": "Video Processing",
        "video": "https://www.youtube.com/embed/43F_3V6MTd4?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com",
        "video_name" : "Video 1",
        "video_description" : "This is a video about a dog",
        "video_date" : "2021-10-10",
        
        
    }
    
    return render(request, "Player/player.html", context)