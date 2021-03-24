from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from pymongo import MongoClient
from bson import ObjectId

cluster = MongoClient("mongodb://test1:KQ2DmS5BaPpKIBxL@cluster0-shard-00-00.6v20o.mongodb.net:27017,cluster0-shard-00-01.6v20o.mongodb.net:27017,cluster0-shard-00-02.6v20o.mongodb.net:27017/three-step?ssl=true&replicaSet=atlas-1s13em-shard-0&authSource=admin&retryWrites=true&w=majority")

db = cluster["three-step"]

@api_view(['GET'])
def mainView(request):
    main_api = db['local_data_api']

    main_data = main_api.find_one({"_id": ObjectId("60586c8dd8133683b6873f03")})
    month_data = main_api.find_one({"_id": ObjectId("60593e8b4496e774152d0135")})
    same_address_data = main_api.find_one({"_id": ObjectId("605950dbaa32a27df572863e")})

    api_json = {
        'title' : "Main View",
        'type_close_19' : main_data['type_close_19'],
        'type_open_19' : main_data['type_open_19'],
        'type_close_20' : main_data['type_close_20'],
        'type_open_20' : main_data['type_open_20'],
        'city_close_20' : main_data['city_close_20'],
        'city_close_20' : main_data['city_close_20'],
        'month_close_19' : month_data['month_close_19'],
        'month_open_19' : month_data['month_open_19'],
        'month_close_20' : month_data['month_close_20'],
        'month_open_20' : month_data['month_open_20'],
        'nationwide_most_close_20' : same_address_data['nationwide']
    }

    return Response(api_json)


@api_view(['GET'])
def cityView(request, pk):
    cities_info = db['city_info']

    city_info = cities_info.find_one({"ctprvnCd": pk })

    api_json = {
        "title" : city_info['ctprvnNm'],
        "indsLclsCds": city_info['indsLclsCds'],
        "signgus": city_info['signgus'],
        "most_coordinates": city_info['most_coordinates']
    }
    return Response(api_json)


@api_view(['GET'])
def sameCoordinatesView(request):
    main_api = db['main_api']
    same_coordinates = db['same_coordinates']

    page_info = main_api.find_one({"_id": ObjectId("604b2995d7d574b83dc7ca48")})

    same_coordinates_info = same_coordinates.find({})

    coordinates_list = []

    for location in same_coordinates_info:
        coordinates_list.append({'rdmAdr': location['rdmAdr'], 'lon': location['lon'], 'lat': location['lat']})

    api_json = {
        'title' : "Same coordinates View",
        'most_area': page_info['most_area'],
        'most_coordinates': page_info['most_coordinates'],
        'same_coordinates': coordinates_list
    }

    return Response(api_json)