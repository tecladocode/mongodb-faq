# Overview

Although the purpose of this short e-book is to help you with the setup and operations of MongoDB, we thought it would be interesting to include a short page on how to interact with MongoDB from within Python.

In our Complete Python Web Course, we use `pymongo` to interact with MongoDB. It is a library that essentially allows us to run any query that you can run using the `mongo` program, but with Python code.

For example, a MongoDB query might look like this in the shell:

```
> use learning
> db.blogs.find({"post_count": {"$gte": 5}})
[ ... ]
```

And you would run this query like this using `pymongo`:

```python {5}
import pymongo

client = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
database = client["learning"]
cursor = database.posts.find({"post_count": {"$gte": 5}})
```

As you can see, other than the import and connection to the database, the actual querying is very similar. However, it's important to remember that `pymongo` is _not the same_ as talking to MongoDB directly. In some cases, checking the [official documentation](https://api.mongodb.com/python/current/) may be helpful.

## Installing `pymongo`

To install `pymongo`, usually going via `pip` is enough:

```
pip install pymongo
```

For more installation methods, check the [installation guidelines](https://api.mongodb.com/python/current/installation.html).

## `pymongo` API

`pymongo` supports most if not all of MongoDB's queries:

* `find`, to find multiple items in the database (in the form of a cursor);
* `find_one`, to return a single item from the database as a Python dictionary;
* `insert`, to add a new item from a Python dictionary;
* `insert_many`, to add many items from a list of Python dictionaries;
* `update`, to update items with specific attributes;
* `count_documents`, to count how many documents match your query;
* `remove`, to delete items matching your query from the database; and
* Much more! The official documentation is filled with examples and source code that you can check out if interested.

::: tip
For all the methods in this API, you can call them on the collection itself, or you can call them on the database and pass the collection as an argument. Either of these is fine:

```python
database.posts.find({"author": "Bob"})
database.find("posts", {"author": "Bob"})
```

In the rest of this page we use the first approach, but they work in exactly the same way!
:::

### Finding items

As in the MongoDB shell (the `mongo` program), we can find items by giving MongoDB a query. All items matching the query will be returned as a cursor:

```python
import pymongo

client = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
database = client["learning"]
cursor = database.posts.find({"author": "Bob"})
```

This query would return all posts where the `author` field is `"Bob"`. You could then iterate over these posts like so:

```python
for post in cursor:
    print(post["title"])
```

### Inserting items

To insert an item you first need a dictionary with all the data you want to insert. This will be turned into a MongoDB object. For example, let's insert a post into our collection:

```python
import pymongo

client = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
database = client["learning"]

post = {
    "title": "Learning MongoDB",
    "description": "I'm still learning, but this is awesome!",
    "body": "Haven't written anything yet...",
    "author": "Rolf Smith"
}

cursor = database.posts.insert(post)
```

::: warning
MongoDB automatically adds an `_id` field on every object inserted, if we don't give it a value. If we find the post we just inserted, notice that it contains that extra field:

```
> db.posts.find({"title": "Learning MongoDB"})
{
    "_id": ObjectId(...),
    "title": "Learning MongoDB",
    "description": "I'm still learning, but this is awesome!",
    "body": "Haven't written anything yet...",
    "author": "Rolf Smith"
}
```

This is alright, but just remember that this `_id` is an object of type `ObjectId`—it's not just a string!
:::

### Updating items

Updating items works this way:

1. Provide MongoDB a query of items to find.
2. Provide MongoDB a dictionary of attributes to update.

All items found will end up with their attributes merged with the new dictionary.

For example, let's say you have a post in your database

```
> db.posts.find({"title": "Learning MongoDB"})
{
    "_id": ObjectId(...),
    "title": "Learning MongoDB",
    "description": "I'm still learning, but this is awesome!",
    "body": "Haven't written anything yet...",
    "author": "Rolf Smith"
}
```

Then you could update it like this:

```python {5-8}
import pymongo

client = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
database = client["learning"]
cursor = database.posts.update(
    {"title": "Learning MongoDB"},
    {"body": "I've written something now!"}
)
```

Now, the post with title `"Learning MongoDB"` has the a `body` property equal to `"I've written something now!"`.

This way you can add new attributes as well as change existing ones. **Remember all items matching the query will be updated!**

### Removing items

To remove multiple items, we need to give MongoDB a query that will find those items. However instead of called `.find`, we call `.remove`.

```python {5}
import pymongo

client = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
database = client["learning"]
cursor = database.posts.remove({"author": "Rolf Smith"})
```

::: danger
`.remove` deletes **all** the elements that match the query—so remember to make your query specific! Something like this would be much better:

```python
database.posts.remove({"author": "Rolf Smith", "title": "Learning MongoDB"})
```
:::

### Counting items

In some cases we may just want to retrieve a count of elements matching a query instead of the elements themselves. You can use `count_documents` for that:

```python {5}
import pymongo

client = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
database = client["learning"]
cursor = database.posts.count_documents({"author": "Rolf Smith"})
```

This would give you all the posts written by Rolf Smith.

## What is a `cursor`?

A `cursor` is something frequently used in databases. You can think of it as a hand pointing to the very first element in a collection. For example, the first row of a table. In the case of MongoDB, a cursor starts off pointing at the very first element of the list of elements returned.

If we find elements, we don't get back a list of elements. Try this:

```python
import pymongo

client = pymongo.MongoClient("mongodb://127.0.0.1:27017/")
database = client["learning"]
cursor = database.posts.find({"author": "Bob"})
print(cursor)
```

What you get back is something that looks like this:

```
<pymongo.cursor.Cursor object at 0x102403710>
```

This is because if you have a _lot_ of posts, giving you the entire list may take up a lot of memory and be very slow. You can still do this:

```python
print(cursor[0])
```

Or you can do this:

```python
for post in cursor:
    print(post)
```

Having the `Cursor` object instead of a list also gives `pymongo` a bit more flexbility, since it can make the object do things that a list wouldn't be able to do. For more information, check out the official documentation on the `Cursor` object [here](https://api.mongodb.com/python/current/api/pymongo/cursor.html).