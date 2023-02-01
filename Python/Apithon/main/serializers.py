from rest_framework import serializers
from .models import *


class countrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name', 'capital', 'population', 'area', 'currency', 'language')