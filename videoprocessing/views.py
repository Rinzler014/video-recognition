from django.shortcuts import render
from django.http import HttpResponse
import csv

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

def get_coordinates(request):
    
    file = open('videoprocessing/data/coordinates.csv', 'a+')  
    
    coordinatesX1 = request.GET.get('coorX1', None)
    coordinatesY1 = request.GET.get('coorY1', None)
    coordinatesX2 = request.GET.get('coorX2', None)
    coordinatesY2 = request.GET.get('coorY2', None)
    currentFrame = request.GET.get('frame', None)

    file.write(coordinatesX1 + "," + coordinatesY1 + "," + coordinatesX2 + "," + coordinatesY2 + "," +currentFrame + "\n")
    
    print(coordinatesX1 + " " + coordinatesY1 + " " + coordinatesX2 + " " + coordinatesY2 + " " + currentFrame)
    
    return HttpResponse(status = 200)