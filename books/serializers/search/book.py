from rest_framework import serializers
from books.models.book import Book


class BookSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ("title_s", "author_s", "pk", "type")

    title_s = serializers.CharField(source="title")
    author_s = serializers.CharField(source="author")
    pk = serializers.IntegerField(source="id")
    type = serializers.SerializerMethodField()  # This method will allow solr to look for get_<whatever we are serializing>

    def get_type(self, obj):
        return obj.__class__.__name__.lower()       # Obj is Author, class = Author, name -> "Author", lower -> "author"
