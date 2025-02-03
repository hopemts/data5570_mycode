from django.db import models
from django.conf import settings

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=50)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)
    bacb_number = models.CharField(max_length=50)
    
    def __str__(self):
        return str(self.user)