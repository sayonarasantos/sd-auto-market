from django.db import models
from django.contrib.auth.models import User


class Address(models.Model):
    state = models.CharField(max_length=150, blank=True)
    city = models.CharField(max_length=150, blank=True)
    neighborhood = models.CharField(max_length=150, blank=True)
    street = models.CharField(max_length=150, blank=True)

    def __str__(self):
        return f"{self.street}, {self.neighborhood}, {self.city}, {self.state}"


class ProfileUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    base_address = models.ForeignKey(Address, on_delete=models.CASCADE, related_name='profiles')
    address_number = models.PositiveIntegerField(blank=True)
    address_complement = models.CharField(max_length=150, blank=True)

    def __str__(self):
        return self.user.username


class Vehicle(models.Model):
    owner = models.ForeignKey(ProfileUser, on_delete=models.CASCADE)
    vendor = models.CharField(max_length=150)
    model = models.CharField(max_length=150)
    year = models.PositiveIntegerField()
