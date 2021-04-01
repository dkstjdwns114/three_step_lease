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
    local_data_api = db['local_data_api']

    main_data = local_data_api.find_one({"_id": ObjectId("605df841edbe1c94c43aa8c2")})
    month_data = local_data_api.find_one({"_id": ObjectId("605dfbcf892151899bd2569d")})
    most_same_address_data = local_data_api.find_one({"_id": ObjectId("605e031ec45a68634c5dab17")})
    type_detail_data = local_data_api.find_one({"_id": ObjectId("605dfb4bb1e716ecc4e2cb52")})

    api_json = {
        'title' : "Main View",
        'type_close_19' : main_data['type_close_19'],
        'type_open_19' : main_data['type_open_19'],
        'type_close_20' : main_data['type_close_20'],
        'type_open_20' : main_data['type_open_20'],
        'type_detail_close_19' : type_detail_data['type_detail_close_19'],
        'type_detail_open_19' : type_detail_data['type_detail_open_19'],
        'type_detail_close_20' : type_detail_data['type_detail_close_20'],
        'type_detail_open_20' : type_detail_data['type_detail_open_20'],
        'city_close_19' : main_data['city_close_19'],
        'city_open_19' : main_data['city_open_19'],
        'city_close_20' : main_data['city_close_20'],
        'city_open_20' : main_data['city_open_20'],
        'month_close_19' : month_data['month_close_19'],
        'month_open_19' : month_data['month_open_19'],
        'month_close_20' : month_data['month_close_20'],
        'month_open_20' : month_data['month_open_20'],
        'nationwide_most_close_20' : most_same_address_data['nationwide']
    }
    return Response(api_json)


@api_view(['GET'])
def cityView(request, pk):
    local_data_api = db['local_data_api']
    same_address = db['same_address']

    city_month_data = local_data_api.find_one({"_id": ObjectId("605dfc0d7fb553970c67a7cc")})
    city_type_data = local_data_api.find_one({"_id": ObjectId("605f217642042fcf807328c1")})
    city_type_detail_data = local_data_api.find_one({"_id": ObjectId("605f00e95a0006ee67ba21c3")})
    most_close_20 = local_data_api.find_one({"_id": ObjectId("605e031ec45a68634c5dab17")})

    city_same_address_info = same_address.find({"city": pk})

    month_data = city_month_data[pk]
    type_data = city_type_data[pk]
    type_detail_data = city_type_detail_data[pk]
    most_close_20 = most_close_20[pk]

    same_address_list = []

    for info in city_same_address_info:
        same_address_list.append({"address": info['address'], "stores_info": info['stores_info']})

    api_json = {
        "title" : pk + " Data",
        "month_data": month_data,
        "type_data": type_data,
        "type_detail_data": type_detail_data,
        "most_close_20": most_close_20,
        "same_address": same_address_list
    }
    return Response(api_json)


@api_view(['GET'])
def sameAddressView(request, pk):
    same_address = db['same_address']
    same_address_info_data = []

    if pk == "nationwide":
        same_address_info_data = same_address.find({})
    else:
        same_address_info_data = same_address.find({"city": pk})

    same_address_list = []

    for info in same_address_info_data:
        stores_info_list = []
        for store in info['stores_info']:
            stores_info_list.append({"store_name": store['store_name'], "open_service": store['open_service'], "detailed_classification": store['detailed_classification'], "closed_store_date": store['closed_store_date']})
        same_address_list.append({"address": info['address'], "lat": info['lat'], "lon": info['lon'], "stores_info": stores_info_list})

    api_json = {
        'title' : "Same address View",
        'same_address_list' : same_address_list
    }
    return Response(api_json)

@api_view(['GET'])
def realTimeView(request, pk):
    local_realtime_close = db['local_realtime_close']
    local_realtime_open = db['local_realtime_open']
