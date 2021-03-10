from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from pymongo import MongoClient
from bson import ObjectId

cluster = MongoClient("mongodb://test1:KQ2DmS5BaPpKIBxL@cluster0-shard-00-00.6v20o.mongodb.net:27017,cluster0-shard-00-01.6v20o.mongodb.net:27017,cluster0-shard-00-02.6v20o.mongodb.net:27017/three-step?ssl=true&replicaSet=atlas-1s13em-shard-0&authSource=admin&retryWrites=true&w=majority")

db = cluster["three-step"]


# Create your views here.
class mainView(APIView):
    def get(self,request):
        return JsonResponse(self.get_data(), json_dumps_params={'ensure_ascii': True})

    def get_data(self):
        print("testView에 들어옴")
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

        return{
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


