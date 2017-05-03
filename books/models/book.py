from django.db import models


class Book(models.Model):  # Class Book extends models.Model
    class Meta:
        app_label = "books"

    title = models.CharField(max_length=255)
    author = models.ForeignKey("books.Author", related_name='books')   # We have to have a foreign key to link the content of book to a value in author (whose the app label is books)

    def __str__(self):  # underscore underscore is a powerful thing in python. Here when you call a print on an object it will transform it to a string
        return self.title


