from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import TeacherSerializer
from . import models
from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response
# Create your views here.
class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes=[permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
# class TeacherList(APIView):
#    def get(self,request):
#       teacher=models.Teacher.objects.all()
#       serializer=TeacherSerializer(teacher,many=True)
#       return Response(serializer.data)
