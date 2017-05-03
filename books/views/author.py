from rest_framework import generics
from books.models.author import Author
from books.serializers.author import AuthorSerializer


class AuthorListView(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    template_name = "author_list.html"

class AuthorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    template_name = "author_detail.html"