from rest_framework import viewsets, permissions
from .serializers import QuestionSerializer, AnswerSerializer, PollSerializer
from .models import Poll, Question, Answer


class PollView(viewsets.ModelViewSet):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly


class QuestionView(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly


class AnswerView(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = permissions.IsAuthenticatedOrReadOnly
