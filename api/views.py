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
    main_api = db['main_api']

    main_api_data = main_api.find_one({"_id": ObjectId("604b258a82668c22d94e1d6d")})

    api_json = {
        'title' : "Main View",
        'indsLcls19' : main_api_data['indsLcls19'],
        'indsLcls20' : main_api_data['indsLcls20'],
        'ctprvnNm20' : main_api_data['ctprvnNm20'],
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
    main_info = db['main_info']
    same_coordinates = db['same_coordinates']

    most_area = main_info.find_one({"_id": ObjectId("6048e1f9fba67adf5ccb3855")})

    most_coordinates = main_info.find_one({"_id": ObjectId("6048e6f323a6210c89719201")})

    same_coordinates_info = same_coordinates.find({})

    coordinates_list = []

    for location in same_coordinates_info:
        coordinates_list.append({'rdmAdr': location['rdmAdr'], 'lon': location['lon'], 'lat': location['lat']})

    api_json = {
        'title' : "Same coordinates View",
        'most_area': [
            {'info': most_area['top1']},
            {'info': most_area['top2']},
            {'info': most_area['top3']},
            {'info': most_area['top4']},
            {'info': most_area['top5']},
        ],
        'most_coordinates': [
            {'info': most_coordinates['top1']},
            {'info': most_coordinates['top2']},
            {'info': most_coordinates['top3']},
            {'info': most_coordinates['top4']},
            {'info': most_coordinates['top5']},
        ],
        'same_coordinates': coordinates_list
    }

    return Response(api_json)