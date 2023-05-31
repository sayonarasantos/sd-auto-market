from django.db import models
from django.contrib.auth.models import AbstractUser


# class Address(models.Model):
#     state = models.CharField(max_length=150, blank=True)
#     city = models.CharField(max_length=150, blank=True)
#     neighborhood = models.CharField(max_length=150, blank=True)
#     street = models.CharField(max_length=150, blank=True)


class CustomUser(AbstractUser):
    address_state = models.CharField(max_length=150, blank=True)
    address_city = models.CharField(max_length=150, blank=True)
    address_neighborhood = models.CharField(max_length=150, blank=True)
    address_street = models.CharField(max_length=150, blank=True)
    address_number = models.PositiveIntegerField(blank=True)
    address_complement = models.CharField(max_length=150, blank=True)

    def __str__(self):
        return self.username


class Vehicle(models.Model):
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    vendor = models.CharField(max_length=150)
    model = models.CharField(max_length=150)
    year = models.PositiveIntegerField()
