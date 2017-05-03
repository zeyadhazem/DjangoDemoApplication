from django.contrib import admin
from books.models.book import Book


@admin.register(Book)     # This syntax is called the decorator: Wraps the thing it is decorating into an external fn
class BookAdmin(admin.ModelAdmin):
    pass    # Pass is a special continue syntax (This is like empty braces, forget I even exist)