# MongoDB on Mac

::: warning
Much of the information in this e-book is deprecated or no longer applicable.

Nowadays I recommend using MongoDB Atlas for local development, as it's much easier than installing MongoDB in your computer.

Our Complete Python Course has also been updated so that the information in this e-book is no longer necessary.
:::

## Installation

If you are wanting to work with MongoDB for local development (e.g. to follow our Complete Python Web Course), I recommend you download the MongoDB Community Server.

You can find it here: [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)

Select the latest version, your operating system, and what type of package you want (the default is fine if you're not sure which one to go for!).

## Usage

Once MongoDB has been installed, it gives you two main things:

* `mongo`; and
* `mongod`.

These are programs you can run in your console (`Terminal.app`). Running `mongod` will start up the MongoDB server. Running `mongo` will launch a MongoDB console that connects to that server and lets you run queries.

::: warning
Remember to run the `mongod` program first, otherwise `mongo` has nothing to connect to!
:::
