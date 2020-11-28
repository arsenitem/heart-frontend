from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    MALE = 'Male'
    FEMALE = 'Female'
    Gender_TYPES = (
        (MALE, MALE),
        (FEMALE, FEMALE),
    )
    sex = models.CharField(verbose_name='Пол', max_length=256, choices=Gender_TYPES)
    age = models.CharField(verbose_name='Возраст', max_length=10)
    first_name = models.CharField(verbose_name='Имя', max_length=64)
    last_name = models.CharField(verbose_name='Фамилия', max_length=64)
    birth_date = models.DateTimeField(verbose_name='Дата рождения')

    def __str__(self):
        return self.user.username
