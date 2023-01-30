from rest_framework.response import Response
from .models import Annonce
from .serializers import AnnonceSerializer


def getAnnouncesList(request):
    announces = Annonce.objects.all().order_by('-updated')
    serializer = AnnonceSerializer(announces, many=True)
    return Response(serializer.data)


def getAnnounceDetail(request, pk):
    announces = Annonce.objects.get(id=pk)
    serializer = AnnonceSerializer(announces, many=False)
    return Response(serializer.data)


def createAnnounce(request):
    data = request.data
    announce = Annonce.objects.create(
        body=data['body']
    )
    serializer = AnnonceSerializer(announce, many=False)
    return Response(serializer.data)

def updateAnnounce(request, pk):
    data = request.data
    announce = Annonce.objects.get(id=pk)
    serializer = AnnonceSerializer(instance=announce, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


def deleteAnnounce(request, pk):
    announce = Annonce.objects.get(id=pk)
    announce.delete()
    return Response('Announce was deleted!')