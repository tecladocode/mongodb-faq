# database.py

::: warning
Much of the information in this e-book is deprecated or no longer applicable.

Nowadays I recommend using MongoDB Atlas for local development, as it's much easier than installing MongoDB in your computer.

Our Complete Python Course has also been updated so that the information in this e-book is no longer necessary.
:::

In our Complete Python Web Course we define a file called `database.py`, where we encapsulate a few methods to interact with the database without needing to `import pymongo` everywhere.

This is an example of a **singleton** by the way, in case you get asked in an interview!

## Code for `database.py`

```python
import os

import pymongo


class Database(object):
    URI = os.environ.get("MONGOLAB_URI")
    DATABASE = None

    @staticmethod
    def initialize():
        client = pymongo.MongoClient(Database.URI)
        Database.DATABASE = client.get_default_database()

    @staticmethod
    def insert(collection, data):
        Database.DATABASE[collection].insert(data)

    @staticmethod
    def find(collection, query):
        return Database.DATABASE[collection].find(query)

    @staticmethod
    def find_one(collection, query):
        return Database.DATABASE[collection].find_one(query)

    @staticmethod
    def update(collection, query, data):
        Database.DATABASE[collection].update(query, data, upsert=True)

    @staticmethod
    def remove(collection, query):
        return Database.DATABASE[collection].remove(query)
```

### Initializing

At the top of the class we've got:

```python
class Database(object):
    URI = "mongodb://127.0.0.1:27017/learning"
    DATABASE = None

    @staticmethod
    def initialize():
        client = pymongo.MongoClient(Database.URI)
        Database.DATABASE = client.get_default_database()  # That's `learning`
```

This class has two properties and an `initialize()` method. This is similar to the `__init__()` method in that we will call it to initialize the data in the class.

However it's different because we will call `initialize()` to initialize the data in the class, and not in a specific object. We will not be creating objects of this class, so that the data is only ever present in one place.

Whenever we want to use the class and interact with the database, we just import this class. We do not need to import `pymongo`, and we don't need to create `Database` objects and pass them around our application.

In this `initialize()` method, we set a value of `Database.DATABASE` which will never change once set. The other methods in the class use `Database.DATABASE` interact with the chosen database.

### Other methods

We've got methods to:

* `find`, which returns the result of `pymongo`'s `find`;
* `find_one`, which returns the result of `pymongo`'s `find_one`;
* `insert`, which forwards to `pymongo`'s `insert`;
* `update`, which forwards to `pymongo`'s `update`;
* `remove`, which forwards to `pymongo`'s `remove`;

::: warning
Remember that the `find` and `find_one` methods must `return` the values that `pymongo` returns. Otherwise, they'll always `return None` by default.
:::