from django.db import models


class Question(models.Model):
    title = models.CharField(max_length=256)


class Answer(models.Model):
    user = models.ForeignKey('authentication.UserProfile', blank=True, on_delete=models.CASCADE)
    answer = models.CharField(max_length=256)


class Poll(models.Model):
    FAMILY = 'Family'
    HEALTH = 'Health'
    SPORT = 'Sport'
    POLL_TYPES = (
        (FAMILY, FAMILY),
        (HEALTH, HEALTH),
        (SPORT, SPORT),
    )
    title = models.CharField(max_length=30, choices=POLL_TYPES)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
