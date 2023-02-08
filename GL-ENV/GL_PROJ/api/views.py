from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework.serializers import Serializer
# from .models import Annonce
# from .serializers import AnnonceSerializer
# from api import serializers
from .utils import updateAnnounce, getAnnounceDetail, deleteAnnounce, getAnnouncesList, createAnnounce
# Create your views here.


@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/announces/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of announces'
        },
        {
            'Endpoint': '/announces/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single announce object'
        },
        {
            'Endpoint': '/announces/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new announce with data sent in post request'
        },
        {
            'Endpoint': '/announces/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing announce with data sent in post request'
        },
        {
            'Endpoint': '/announces/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting announce'
        },
    ]
    return Response(routes)


# /announces GET
# /announces POST
# /announces/<id> GET
# /announces/<id> PUT
# /announces/<id> DELETE

@api_view(['GET', 'POST'])
def getAnnounces(request):

    if request.method == 'GET':
        return getAnnouncesList(request)

    if request.method == 'POST':
        return createAnnounce(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getAnnounce(request, pk):

    if request.method == 'GET':
        return getAnnounceDetail(request, pk)

    if request.method == 'PUT':
        return updateAnnounce(request, pk)

    if request.method == 'DELETE':
        return deleteAnnounce(request, pk)
