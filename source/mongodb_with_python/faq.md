# FAQ

::: warning
Much of the information in this e-book is deprecated or no longer applicable.

Nowadays I recommend using MongoDB Atlas for local development, as it's much easier than installing MongoDB in your computer.

Our Complete Python Course has also been updated so that the information in this e-book is no longer necessary.
:::

## `NoneType` has no attribute...

I see this frequently when we forget to add a `return` statement to `Database.find` and `Database.find_one`.

Make sure that in your `database.py`, those methods have a `return`, like so:

```python
@staticmethod
def find(collection, query):
    return Database.DATABASE[collection].find(query)

@staticmethod
def find_one(collection, query):
    return Database.DATABASE[collection].find_one(query)
```

::: tip
This error happens when you try something like this:

```python {2}
blog = None
blog.get_posts()  # error!
```
:::

## `NoneType` object is not subscriptable

This happens when you try to access a subscript of an object, but that object is not a dictionary.

For context, this is a subscript (the square brackets!):

```python {2}
post = {"title": "Learning MongoDB"}
print(post["title"])  # That's the subscript!
```

So this error means `post` was `None`, because you cannot use a subscript on `None`.

If your `post` was coming from the database, the cause for this is usually because of the question above—your `find` methods not having a `return`.

## ServerSelectionTimeout

This happens when MongoDB isn't running, or the URI provided is incorrect.

First, double-check the `URI` in `database.py`. Make sure it matches exactly the URI of your cloud provider (e.g. if using MongoLab), or `mongodb://127.0.0.1:27017`. Every slash, colon, or number matters—copy-pasting is a good strategy if you're unsure!

If MongoDB isn't running, check these to make sure it is:

* Running MongoDB on Mac
* Running MongoDB on Windows
* Running MongoDB on Ubuntu

## `__init__()` got an unexpected argument

This happens when you pass data directly from MongoDB to your `__init__()` method (e.g. when doing something like `cls(**data)`), but the data in MongoDB does not match the `__init__()` method parameters.

For example, if one of your items in MongoDB has an `id` property, but your `__init__()` method expects only `_id` property, then you'll get this error.

What to do is double check your data in MongoDB and make sure no items have unexpected properties for your `__init__()` method.