from books.views.author import AuthorListView
from books.views.author import AuthorDetailView
from books.views.book import BookListView
from books.views.book import BookDetailView



"""books URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^authors/$', AuthorListView.as_view(), name="author-list"),
    url(r'^authors/(?P<pk>[0-9]+)/$', AuthorDetailView.as_view(), name="author-detail"),
    url(r'^books/$', BookListView.as_view(), name="book-list"),
    url(r'^books/(?P<pk>[0-9]+)/$', BookDetailView.as_view(), name="book-detail"),
    url(r'^admin/', admin.site.urls)
]
