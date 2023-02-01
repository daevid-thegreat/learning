from django.db import models

# Create your models here.

class Country(models.Model):
    name = models.CharField(max_length=50)
    capital = models.CharField(max_length=50)
    population = models.IntegerField()
    area = models.IntegerField()
    currency = models.CharField(max_length=50)
    language = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'countries'
        ordering = ['id']