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
    main_info = db['main_info']

    busan = db['busan20']
    chungbuk = db['chungbuk20']
    chungnam = db['chungnam20']
    daegu = db['daegu20']
    daejeon = db['daejeon20']
    gangwon = db['gangwon20']
    gwangju = db['gwangju20']
    gyeonggi = db['gyeonggi20']
    gyeongbuk = db['gyeongbuk20']
    gyeongnam = db['gyeongnam20']
    incheon = db['incheon20']
    jeju = db['jeju20']
    jeonbuk = db['jeonbuk20']
    jeonnam = db['jeonnam20']
    sejong = db['sejong20']
    seoul = db['seoul20']
    ulsan = db['ulsan20']

    indsLclsCd19 = main_info.find_one({"_id": ObjectId("6043b10285cc1c695f9a9f2b")})

    indsLclsCd20 = main_info.find_one({"_id": ObjectId("6043b140a999fb16609e2869")})

    busan_cnt = busan.count_documents({})
    chungbuk_cnt = chungbuk.count_documents({})
    chungnam_cnt = chungnam.count_documents({})
    daegu_cnt = daegu.count_documents({})
    daejeon_cnt = daejeon.count_documents({})
    gangwon_cnt = gangwon.count_documents({})
    gwangju_cnt = gwangju.count_documents({})
    gyeonggi_cnt = gyeonggi.count_documents({})
    gyeongbuk_cnt = gyeongbuk.count_documents({})
    gyeongnam_cnt = gyeongnam.count_documents({})
    incheon_cnt = incheon.count_documents({})
    jeju_cnt = jeju.count_documents({})
    jeonbuk_cnt = jeonbuk.count_documents({})
    jeonnam_cnt = jeonnam.count_documents({})
    sejong_cnt = sejong.count_documents({})
    seoul_cnt = seoul.count_documents({})
    ulsan_cnt = ulsan.count_documents({})

    api_json = {
        'title' : "Main View",
        'indsLcls19' : [
            {"type": "소매", "count": len(indsLclsCd19['D'])},
            {"type": "생활서비스", "count": len(indsLclsCd19['F'])},
            {"type": "부동산", "count": len(indsLclsCd19['L'])},
            {"type": "관광/여가/오락", "count": len(indsLclsCd19['N'])},
            {"type": "숙박", "count": len(indsLclsCd19['O'])},
            {"type": "스포츠", "count": len(indsLclsCd19['P'])},
            {"type": "음식", "count": len(indsLclsCd19['Q'])},
            {"type": "학문/교육", "count": len(indsLclsCd19['R'])},
            {"type": "의료", "count": len(indsLclsCd19['S'])},
        ],
        'indsLcls20' : [
            {"type": "소매", "count": len(indsLclsCd20['D'])},
            {"type": "생활서비스", "count": len(indsLclsCd20['F'])},
            {"type": "부동산", "count": len(indsLclsCd20['L'])},
            {"type": "관광/여가/오락", "count": len(indsLclsCd20['N'])},
            {"type": "숙박", "count": len(indsLclsCd20['O'])},
            {"type": "스포츠", "count": len(indsLclsCd20['P'])},
            {"type": "음식", "count": len(indsLclsCd20['Q'])},
            {"type": "학문/교육", "count": len(indsLclsCd20['R'])},
            {"type": "의료", "count": len(indsLclsCd20['S'])},
        ],
        'ctprvnNm20' : [
            {"city": "busan", "count": busan_cnt},
            {"city": "chungbuk", "count": chungbuk_cnt},
            {"city": "chungnam", "count": chungnam_cnt},
            {"city": "daegu", "count": daegu_cnt},
            {"city": "daejeon", "count": daejeon_cnt},
            {"city": "gangwon", "count": gangwon_cnt},
            {"city": "gwangju", "count": gwangju_cnt},
            {"city": "gyeonggi", "count": gyeonggi_cnt},
            {"city": "gyeongbuk", "count": gyeongbuk_cnt},
            {"city": "gyeongnam", "count": gyeongnam_cnt},
            {"city": "incheon", "count": incheon_cnt},
            {"city": "jeju", "count": jeju_cnt},
            {"city": "jeonbuk", "count": jeonbuk_cnt},
            {"city": "jeonnam", "count": jeonnam_cnt},
            {"city": "sejong", "count": sejong_cnt},
            {"city": "seoul", "count": seoul_cnt},
            {"city": "ulsan", "count": ulsan_cnt},
        ],
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
            {'rate': 1, 'info': most_area['top1']},
            {'rate': 2, 'info': most_area['top2']},
            {'rate': 3, 'info': most_area['top3']},
            {'rate': 4, 'info': most_area['top4']},
            {'rate': 5, 'info': most_area['top5']},
        ],
        'most_coordinates': [
            {'rate': 1, 'info': most_coordinates['top1']},
            {'rate': 2, 'info': most_coordinates['top2']},
            {'rate': 3, 'info': most_coordinates['top3']},
            {'rate': 4, 'info': most_coordinates['top4']},
            {'rate': 5, 'info': most_coordinates['top5']},
        ],
        'same_coordinates': coordinates_list
    }

    return Response(api_json)