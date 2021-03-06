from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from pymongo import MongoClient
from bson import ObjectId
from datetime import date, timedelta
import time

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
    d1_form = date.today() - timedelta(days=1)
    d2_form = date.today() - timedelta(days=2)
    d3_form = date.today() - timedelta(days=3)
    d4_form = date.today() - timedelta(days=4)
    d5_form = date.today() - timedelta(days=5)
    d6_form = date.today() - timedelta(days=6)
    d7_form = date.today() - timedelta(days=7)

    now = time.localtime()

    if now.tm_hour < 9:
        d1_form = date.today() - timedelta(days=2)
        d2_form = date.today() - timedelta(days=3)
        d3_form = date.today() - timedelta(days=4)
        d4_form = date.today() - timedelta(days=5)
        d5_form = date.today() - timedelta(days=6)
        d6_form = date.today() - timedelta(days=7)
        d7_form = date.today() - timedelta(days=8)

    d1 = d1_form.strftime('%Y%m%d')
    d2 = d2_form.strftime('%Y%m%d')
    d3 = d3_form.strftime('%Y%m%d')
    d4 = d4_form.strftime('%Y%m%d')
    d5 = d5_form.strftime('%Y%m%d')
    d6 = d6_form.strftime('%Y%m%d')
    d7 = d7_form.strftime('%Y%m%d')

    local_realtime_close = db['local_realtime_close']
    local_realtime_open = db['local_realtime_open']

    d1_close_cnt = 0
    d2_close_cnt = 0
    d3_close_cnt = 0
    d4_close_cnt = 0
    d5_close_cnt = 0
    d6_close_cnt = 0
    d7_close_cnt = 0

    d1_open_cnt = 0
    d2_open_cnt = 0
    d3_open_cnt = 0
    d4_open_cnt = 0
    d5_open_cnt = 0
    d6_open_cnt = 0
    d7_open_cnt = 0

    d1_animal_close_cnt = 0
    d1_culture_close_cnt = 0
    d1_environment_close_cnt = 0
    d1_food_close_cnt = 0
    d1_health_close_cnt = 0
    d1_life_close_cnt = 0
    d1_other_close_cnt = 0

    d2_animal_close_cnt = 0
    d2_culture_close_cnt = 0
    d2_environment_close_cnt = 0
    d2_food_close_cnt = 0
    d2_health_close_cnt = 0
    d2_life_close_cnt = 0
    d2_other_close_cnt = 0

    d3_animal_close_cnt = 0
    d3_culture_close_cnt = 0
    d3_environment_close_cnt = 0
    d3_food_close_cnt = 0
    d3_health_close_cnt = 0
    d3_life_close_cnt = 0
    d3_other_close_cnt = 0

    d4_animal_close_cnt = 0
    d4_culture_close_cnt = 0
    d4_environment_close_cnt = 0
    d4_food_close_cnt = 0
    d4_health_close_cnt = 0
    d4_life_close_cnt = 0
    d4_other_close_cnt = 0

    d5_animal_close_cnt = 0
    d5_culture_close_cnt = 0
    d5_environment_close_cnt = 0
    d5_food_close_cnt = 0
    d5_health_close_cnt = 0
    d5_life_close_cnt = 0
    d5_other_close_cnt = 0

    d6_animal_close_cnt = 0
    d6_culture_close_cnt = 0
    d6_environment_close_cnt = 0
    d6_food_close_cnt = 0
    d6_health_close_cnt = 0
    d6_life_close_cnt = 0
    d6_other_close_cnt = 0

    d7_animal_close_cnt = 0
    d7_culture_close_cnt = 0
    d7_environment_close_cnt = 0
    d7_food_close_cnt = 0
    d7_health_close_cnt = 0
    d7_life_close_cnt = 0
    d7_other_close_cnt = 0

    d1_animal_open_cnt = 0
    d1_culture_open_cnt = 0
    d1_environment_open_cnt = 0
    d1_food_open_cnt = 0
    d1_health_open_cnt = 0
    d1_life_open_cnt = 0
    d1_other_open_cnt = 0

    d2_animal_open_cnt = 0
    d2_culture_open_cnt = 0
    d2_environment_open_cnt = 0
    d2_food_open_cnt = 0
    d2_health_open_cnt = 0
    d2_life_open_cnt = 0
    d2_other_open_cnt = 0

    d3_animal_open_cnt = 0
    d3_culture_open_cnt = 0
    d3_environment_open_cnt = 0
    d3_food_open_cnt = 0
    d3_health_open_cnt = 0
    d3_life_open_cnt = 0
    d3_other_open_cnt = 0

    d4_animal_open_cnt = 0
    d4_culture_open_cnt = 0
    d4_environment_open_cnt = 0
    d4_food_open_cnt = 0
    d4_health_open_cnt = 0
    d4_life_open_cnt = 0
    d4_other_open_cnt = 0

    d5_animal_open_cnt = 0
    d5_culture_open_cnt = 0
    d5_environment_open_cnt = 0
    d5_food_open_cnt = 0
    d5_health_open_cnt = 0
    d5_life_open_cnt = 0
    d5_other_open_cnt = 0

    d6_animal_open_cnt = 0
    d6_culture_open_cnt = 0
    d6_environment_open_cnt = 0
    d6_food_open_cnt = 0
    d6_health_open_cnt = 0
    d6_life_open_cnt = 0
    d6_other_open_cnt = 0

    d7_animal_open_cnt = 0
    d7_culture_open_cnt = 0
    d7_environment_open_cnt = 0
    d7_food_open_cnt = 0
    d7_health_open_cnt = 0
    d7_life_open_cnt = 0
    d7_other_open_cnt = 0

    d1_close_find_dict = {"closed_date": d1}
    d2_close_find_dict = {"closed_date": d2}
    d3_close_find_dict = {"closed_date": d3}
    d4_close_find_dict = {"closed_date": d4}
    d5_close_find_dict = {"closed_date": d5}
    d6_close_find_dict = {"closed_date": d6}
    d7_close_find_dict = {"closed_date": d7}

    d1_open_find_dict = {"authorization_date": d1}
    d2_open_find_dict = {"authorization_date": d2}
    d3_open_find_dict = {"authorization_date": d3}
    d4_open_find_dict = {"authorization_date": d4}
    d5_open_find_dict = {"authorization_date": d5}
    d6_open_find_dict = {"authorization_date": d6}
    d7_open_find_dict = {"authorization_date": d7}

    if pk != "nationwide":
        d1_close_find_dict = {"closed_date": d1, "city_name": pk}
        d2_close_find_dict = {"closed_date": d2, "city_name": pk}
        d3_close_find_dict = {"closed_date": d3, "city_name": pk}
        d4_close_find_dict = {"closed_date": d4, "city_name": pk}
        d5_close_find_dict = {"closed_date": d5, "city_name": pk}
        d6_close_find_dict = {"closed_date": d6, "city_name": pk}
        d7_close_find_dict = {"closed_date": d7, "city_name": pk}

        d1_open_find_dict = {"authorization_date": d1, "city_name": pk}
        d2_open_find_dict = {"authorization_date": d2, "city_name": pk}
        d3_open_find_dict = {"authorization_date": d3, "city_name": pk}
        d4_open_find_dict = {"authorization_date": d4, "city_name": pk}
        d5_open_find_dict = {"authorization_date": d5, "city_name": pk}
        d6_open_find_dict = {"authorization_date": d6, "city_name": pk}
        d7_open_find_dict = {"authorization_date": d7, "city_name": pk}

    d1_close_list = []
    d2_close_list = []
    d3_close_list = []
    d4_close_list = []
    d5_close_list = []
    d6_close_list = []
    d7_close_list = []

    d1_open_list = []
    d2_open_list = []
    d3_open_list = []
    d4_open_list = []
    d5_open_list = []
    d6_open_list = []
    d7_open_list = []

    for info in local_realtime_close.find(d1_close_find_dict):
        d1_close_cnt += 1
        d1_close_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d1_animal_close_cnt += 1
        elif my_category == "culture":
            d1_culture_close_cnt += 1
        elif my_category == "environment":
            d1_environment_close_cnt += 1
        elif my_category == "food":
            d1_food_close_cnt += 1
        elif my_category == "health":
            d1_health_close_cnt += 1
        elif my_category == "life":
            d1_life_close_cnt += 1
        elif my_category == "other":
            d1_other_close_cnt += 1

    for info in local_realtime_close.find(d2_close_find_dict):
        d2_close_cnt += 1
        d2_close_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d2_animal_close_cnt += 1
        elif my_category == "culture":
            d2_culture_close_cnt += 1
        elif my_category == "environment":
            d2_environment_close_cnt += 1
        elif my_category == "food":
            d2_food_close_cnt += 1
        elif my_category == "health":
            d2_health_close_cnt += 1
        elif my_category == "life":
            d2_life_close_cnt += 1
        elif my_category == "other":
            d2_other_close_cnt += 1

    for info in local_realtime_close.find(d3_close_find_dict):
        d3_close_cnt += 1
        d3_close_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d3_animal_close_cnt += 1
        elif my_category == "culture":
            d3_culture_close_cnt += 1
        elif my_category == "environment":
            d3_environment_close_cnt += 1
        elif my_category == "food":
            d3_food_close_cnt += 1
        elif my_category == "health":
            d3_health_close_cnt += 1
        elif my_category == "life":
            d3_life_close_cnt += 1
        elif my_category == "other":
            d3_other_close_cnt += 1

    for info in local_realtime_close.find(d4_close_find_dict):
        d4_close_cnt += 1
        d4_close_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d4_animal_close_cnt += 1
        elif my_category == "culture":
            d4_culture_close_cnt += 1
        elif my_category == "environment":
            d4_environment_close_cnt += 1
        elif my_category == "food":
            d4_food_close_cnt += 1
        elif my_category == "health":
            d4_health_close_cnt += 1
        elif my_category == "life":
            d4_life_close_cnt += 1
        elif my_category == "other":
            d4_other_close_cnt += 1

    for info in local_realtime_close.find(d5_close_find_dict):
        d5_close_cnt += 1
        d5_close_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d5_animal_close_cnt += 1
        elif my_category == "culture":
            d5_culture_close_cnt += 1
        elif my_category == "environment":
            d5_environment_close_cnt += 1
        elif my_category == "food":
            d5_food_close_cnt += 1
        elif my_category == "health":
            d5_health_close_cnt += 1
        elif my_category == "life":
            d5_life_close_cnt += 1
        elif my_category == "other":
            d5_other_close_cnt += 1

    for info in local_realtime_close.find(d6_close_find_dict):
        d6_close_cnt += 1
        d6_close_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d6_animal_close_cnt += 1
        elif my_category == "culture":
            d6_culture_close_cnt += 1
        elif my_category == "environment":
            d6_environment_close_cnt += 1
        elif my_category == "food":
            d6_food_close_cnt += 1
        elif my_category == "health":
            d6_health_close_cnt += 1
        elif my_category == "life":
            d6_life_close_cnt += 1
        elif my_category == "other":
            d6_other_close_cnt += 1

    for info in local_realtime_close.find(d7_close_find_dict):
        d7_close_cnt += 1
        d7_close_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d7_animal_close_cnt += 1
        elif my_category == "culture":
            d7_culture_close_cnt += 1
        elif my_category == "environment":
            d7_environment_close_cnt += 1
        elif my_category == "food":
            d7_food_close_cnt += 1
        elif my_category == "health":
            d7_health_close_cnt += 1
        elif my_category == "life":
            d7_life_close_cnt += 1
        elif my_category == "other":
            d7_other_close_cnt += 1

    for info in local_realtime_open.find(d1_open_find_dict):
        d1_open_cnt += 1
        d1_open_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d1_animal_open_cnt += 1
        elif my_category == "culture":
            d1_culture_open_cnt += 1
        elif my_category == "environment":
            d1_environment_open_cnt += 1
        elif my_category == "food":
            d1_food_open_cnt += 1
        elif my_category == "health":
            d1_health_open_cnt += 1
        elif my_category == "life":
            d1_life_open_cnt += 1
        elif my_category == "other":
            d1_other_open_cnt += 1

    for info in local_realtime_open.find(d2_open_find_dict):
        d2_open_cnt += 1
        d2_open_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d2_animal_open_cnt += 1
        elif my_category == "culture":
            d2_culture_open_cnt += 1
        elif my_category == "environment":
            d2_environment_open_cnt += 1
        elif my_category == "food":
            d2_food_open_cnt += 1
        elif my_category == "health":
            d2_health_open_cnt += 1
        elif my_category == "life":
            d2_life_open_cnt += 1
        elif my_category == "other":
            d2_other_open_cnt += 1

    for info in local_realtime_open.find(d3_open_find_dict):
        d3_open_cnt += 1
        d3_open_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d3_animal_open_cnt += 1
        elif my_category == "culture":
            d3_culture_open_cnt += 1
        elif my_category == "environment":
            d3_environment_open_cnt += 1
        elif my_category == "food":
            d3_food_open_cnt += 1
        elif my_category == "health":
            d3_health_open_cnt += 1
        elif my_category == "life":
            d3_life_open_cnt += 1
        elif my_category == "other":
            d3_other_open_cnt += 1

    for info in local_realtime_open.find(d4_open_find_dict):
        d4_open_cnt += 1
        d4_open_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d4_animal_open_cnt += 1
        elif my_category == "culture":
            d4_culture_open_cnt += 1
        elif my_category == "environment":
            d4_environment_open_cnt += 1
        elif my_category == "food":
            d4_food_open_cnt += 1
        elif my_category == "health":
            d4_health_open_cnt += 1
        elif my_category == "life":
            d4_life_open_cnt += 1
        elif my_category == "other":
            d4_other_open_cnt += 1

    for info in local_realtime_open.find(d5_open_find_dict):
        d5_open_cnt += 1
        d5_open_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d5_animal_open_cnt += 1
        elif my_category == "culture":
            d5_culture_open_cnt += 1
        elif my_category == "environment":
            d5_environment_open_cnt += 1
        elif my_category == "food":
            d5_food_open_cnt += 1
        elif my_category == "health":
            d5_health_open_cnt += 1
        elif my_category == "life":
            d5_life_open_cnt += 1
        elif my_category == "other":
            d5_other_open_cnt += 1

    for info in local_realtime_open.find(d6_open_find_dict):
        d6_open_cnt += 1
        d6_open_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d6_animal_open_cnt += 1
        elif my_category == "culture":
            d6_culture_open_cnt += 1
        elif my_category == "environment":
            d6_environment_open_cnt += 1
        elif my_category == "food":
            d6_food_open_cnt += 1
        elif my_category == "health":
            d6_health_open_cnt += 1
        elif my_category == "life":
            d6_life_open_cnt += 1
        elif my_category == "other":
            d6_other_open_cnt += 1

    for info in local_realtime_open.find(d7_open_find_dict):
        d7_open_cnt += 1
        d7_open_list.append({
            "authorization_date": info['authorization_date'],
            "closed_date": info['closed_date'],
            "store_name": info['store_name'],
            "address": info['address'],
            "state": info['state'],
            "open_service": info['open_service'],
            "detailed_classification": info['detailed_classification'],
            "category_kor": info['category_kor'],
        })
        my_category = info['category_name']
        if my_category == "animal":
            d7_animal_open_cnt += 1
        elif my_category == "culture":
            d7_culture_open_cnt += 1
        elif my_category == "environment":
            d7_environment_open_cnt += 1
        elif my_category == "food":
            d7_food_open_cnt += 1
        elif my_category == "health":
            d7_health_open_cnt += 1
        elif my_category == "life":
            d7_life_open_cnt += 1
        elif my_category == "other":
            d7_other_open_cnt += 1

    api_json = {
    "title": "Real Time View",
    "description": pk + " 실시간 데이터",
        "one_days_ago": {
            "date": d1,
            "close": {
                "total": d1_close_cnt,
                "data_list": d1_close_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d1_animal_close_cnt
                    },
                    {
                        "type": "문화",
                        "count": d1_culture_close_cnt
                    },
                    {
                        "type": "환경",
                        "count": d1_environment_close_cnt
                    },
                    {
                        "type": "식품",
                        "count": d1_food_close_cnt
                    },
                    {
                        "type": "건강",
                        "count": d1_health_close_cnt
                    },
                    {
                        "type": "생활",
                        "count": d1_life_close_cnt
                    },
                    {
                        "type": "기타",
                        "count": d1_other_close_cnt
                    }
                ]
            },
            "open": {
                "total": d1_open_cnt,
                "data_list": d1_open_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d1_animal_open_cnt
                    },
                    {
                        "type": "문화",
                        "count": d1_culture_open_cnt
                    },
                    {
                        "type": "환경",
                        "count": d1_environment_open_cnt
                    },
                    {
                        "type": "식품",
                        "count": d1_food_open_cnt
                    },
                    {
                        "type": "건강",
                        "count": d1_health_open_cnt
                    },
                    {
                        "type": "생활",
                        "count": d1_life_open_cnt
                    },
                    {
                        "type": "기타",
                        "count": d1_other_open_cnt
                    }
                ]
            }
        },
        "two_days_ago": {
            "date": d2,
            "close": {
                "total": d2_close_cnt,
                "data_list": d2_close_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d2_animal_close_cnt
                    },
                    {
                        "type": "문화",
                        "count": d2_culture_close_cnt
                    },
                    {
                        "type": "환경",
                        "count": d2_environment_close_cnt
                    },
                    {
                        "type": "식품",
                        "count": d2_food_close_cnt
                    },
                    {
                        "type": "건강",
                        "count": d2_health_close_cnt
                    },
                    {
                        "type": "생활",
                        "count": d2_life_close_cnt
                    },
                    {
                        "type": "기타",
                        "count": d2_other_close_cnt
                    }
                ]
            },
            "open": {
                "total": d2_open_cnt,
                "data_list": d2_open_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d2_animal_open_cnt
                    },
                    {
                        "type": "문화",
                        "count": d2_culture_open_cnt
                    },
                    {
                        "type": "환경",
                        "count": d2_environment_open_cnt
                    },
                    {
                        "type": "식품",
                        "count": d2_food_open_cnt
                    },
                    {
                        "type": "건강",
                        "count": d2_health_open_cnt
                    },
                    {
                        "type": "생활",
                        "count": d2_life_open_cnt
                    },
                    {
                        "type": "기타",
                        "count": d2_other_open_cnt
                    }
                ]
            }
        },
        "three_days_ago": {
            "date": d3,
            "close": {
                "total": d3_close_cnt,
                "data_list": d3_close_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d3_animal_close_cnt
                    },
                    {
                        "type": "문화",
                        "count": d3_culture_close_cnt
                    },
                    {
                        "type": "환경",
                        "count": d3_environment_close_cnt
                    },
                    {
                        "type": "식품",
                        "count": d3_food_close_cnt
                    },
                    {
                        "type": "건강",
                        "count": d3_health_close_cnt
                    },
                    {
                        "type": "생활",
                        "count": d3_life_close_cnt
                    },
                    {
                        "type": "기타",
                        "count": d3_other_close_cnt
                    }
                ]
            },
            "open": {
                "total": d3_open_cnt,
                "data_list": d3_open_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d3_animal_open_cnt
                    },
                    {
                        "type": "문화",
                        "count": d3_culture_open_cnt
                    },
                    {
                        "type": "환경",
                        "count": d3_environment_open_cnt
                    },
                    {
                        "type": "식품",
                        "count": d3_food_open_cnt
                    },
                    {
                        "type": "건강",
                        "count": d3_health_open_cnt
                    },
                    {
                        "type": "생활",
                        "count": d3_life_open_cnt
                    },
                    {
                        "type": "기타",
                        "count": d3_other_open_cnt
                    }
                ]
            }
        },
        "four_days_ago": {
            "date": d4,
            "close": {
                "total": d4_close_cnt,
                "data_list": d4_close_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d4_animal_close_cnt
                    },
                    {
                        "type": "문화",
                        "count": d4_culture_close_cnt
                    },
                    {
                        "type": "환경",
                        "count": d4_environment_close_cnt
                    },
                    {
                        "type": "식품",
                        "count": d4_food_close_cnt
                    },
                    {
                        "type": "건강",
                        "count": d4_health_close_cnt
                    },
                    {
                        "type": "생활",
                        "count": d4_life_close_cnt
                    },
                    {
                        "type": "기타",
                        "count": d4_other_close_cnt
                    }
                ]
            },
            "open": {
                "total": d4_open_cnt,
                "data_list": d4_open_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d4_animal_open_cnt
                    },
                    {
                        "type": "문화",
                        "count": d4_culture_open_cnt
                    },
                    {
                        "type": "환경",
                        "count": d4_environment_open_cnt
                    },
                    {
                        "type": "식품",
                        "count": d4_food_open_cnt
                    },
                    {
                        "type": "건강",
                        "count": d4_health_open_cnt
                    },
                    {
                        "type": "생활",
                        "count": d4_life_open_cnt
                    },
                    {
                        "type": "기타",
                        "count": d4_other_open_cnt
                    }
                ]
            }
        },
        "five_days_ago": {
            "date": d5,
            "close": {
                "total": d5_close_cnt,
                "data_list": d5_close_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d5_animal_close_cnt
                    },
                    {
                        "type": "문화",
                        "count": d5_culture_close_cnt
                    },
                    {
                        "type": "환경",
                        "count": d5_environment_close_cnt
                    },
                    {
                        "type": "식품",
                        "count": d5_food_close_cnt
                    },
                    {
                        "type": "건강",
                        "count": d5_health_close_cnt
                    },
                    {
                        "type": "생활",
                        "count": d5_life_close_cnt
                    },
                    {
                        "type": "기타",
                        "count": d5_other_close_cnt
                    }
                ]
            },
            "open": {
                "total": d5_open_cnt,
                "data_list": d5_open_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d5_animal_open_cnt
                    },
                    {
                        "type": "문화",
                        "count": d5_culture_open_cnt
                    },
                    {
                        "type": "환경",
                        "count": d5_environment_open_cnt
                    },
                    {
                        "type": "식품",
                        "count": d5_food_open_cnt
                    },
                    {
                        "type": "건강",
                        "count": d5_health_open_cnt
                    },
                    {
                        "type": "생활",
                        "count": d5_life_open_cnt
                    },
                    {
                        "type": "기타",
                        "count": d5_other_open_cnt
                    }
                ]
            }
        },
        "six_days_ago": {
            "date": d6,
            "close": {
                "total": d6_close_cnt,
                "data_list": d6_close_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d6_animal_close_cnt
                    },
                    {
                        "type": "문화",
                        "count": d6_culture_close_cnt
                    },
                    {
                        "type": "환경",
                        "count": d6_environment_close_cnt
                    },
                    {
                        "type": "식품",
                        "count": d6_food_close_cnt
                    },
                    {
                        "type": "건강",
                        "count": d6_health_close_cnt
                    },
                    {
                        "type": "생활",
                        "count": d6_life_close_cnt
                    },
                    {
                        "type": "기타",
                        "count": d6_other_close_cnt
                    }
                ]
            },
            "open": {
                "total": d6_open_cnt,
                "data_list": d6_open_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d6_animal_open_cnt
                    },
                    {
                        "type": "문화",
                        "count": d6_culture_open_cnt
                    },
                    {
                        "type": "환경",
                        "count": d6_environment_open_cnt
                    },
                    {
                        "type": "식품",
                        "count": d6_food_open_cnt
                    },
                    {
                        "type": "건강",
                        "count": d6_health_open_cnt
                    },
                    {
                        "type": "생활",
                        "count": d6_life_open_cnt
                    },
                    {
                        "type": "기타",
                        "count": d6_other_open_cnt
                    }
                ]
            }
        },
        "seven_days_ago": {
            "date": d7,
            "close": {
                "total": d7_close_cnt,
                "data_list": d7_close_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d7_animal_close_cnt
                    },
                    {
                        "type": "문화",
                        "count": d7_culture_close_cnt
                    },
                    {
                        "type": "환경",
                        "count": d7_environment_close_cnt
                    },
                    {
                        "type": "식품",
                        "count": d7_food_close_cnt
                    },
                    {
                        "type": "건강",
                        "count": d7_health_close_cnt
                    },
                    {
                        "type": "생활",
                        "count": d7_life_close_cnt
                    },
                    {
                        "type": "기타",
                        "count": d7_other_close_cnt
                    }
                ]
            },
            "open": {
                "total": d7_open_cnt,
                "data_list": d7_open_list,
                "category": [
                    {
                        "type": "동물",
                        "count": d7_animal_open_cnt
                    },
                    {
                        "type": "문화",
                        "count": d7_culture_open_cnt
                    },
                    {
                        "type": "환경",
                        "count": d7_environment_open_cnt
                    },
                    {
                        "type": "식품",
                        "count": d7_food_open_cnt
                    },
                    {
                        "type": "건강",
                        "count": d7_health_open_cnt
                    },
                    {
                        "type": "생활",
                        "count": d7_life_open_cnt
                    },
                    {
                        "type": "기타",
                        "count": d7_other_open_cnt
                    }
                ]
            }
        }
    }
    
    return Response(api_json)
