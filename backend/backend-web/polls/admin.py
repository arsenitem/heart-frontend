from django.contrib import admin

from .models import Question, Answer, Poll

admin.site.register(Poll)
admin.site.register(Answer)
admin.site.register(Question)
