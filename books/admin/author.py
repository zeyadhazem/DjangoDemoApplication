from django.contrib import admin
from books.models.author import Author


@admin.register(Author)     # This syntax is called the decorator: Wraps the thing it is decorating into an external fn
class AuthorAdmin(admin.ModelAdmin):
    pass    # Pass is a special continue syntax (This is like empty braces, forget I even exist)