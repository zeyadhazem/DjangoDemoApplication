from django.db import models


class Author (models.Model):    #Class Author extends models.Model
    class Meta:
        app_label = "books"
        # verbose_name_plural = "7agat"

    last_name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)

    def __str__(self):  #underscore underscore is a powerful thing in python. Here when you call a print on an object it will transform it to a string
        return "{0}, {1}".format(self.last_name, self.first_name)