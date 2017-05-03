import pysolr

SERVER = "http://localhost:8983/solr/booksearch"

connection = pysolr.Solr(SERVER)

#cleanup
print ("Deleting all records in Solr")
connection.delete(q="*:*")

print ("Indexing demo documents in Solr")
connection.add([
    {"pk": 1,
     "type": "book",
     "title_s": "The book"},
    {"pk": 2,
     "type": "book",
     "title_s": "The notebook"}

])

connection.commit()