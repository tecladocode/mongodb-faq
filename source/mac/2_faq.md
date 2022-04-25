# FAQ

::: warning
Much of the information in this e-book is deprecated or no longer applicable.

Nowadays I recommend using MongoDB Atlas for local development, as it's much easier than installing MongoDB in your computer.

Our Complete Python Course has also been updated so that the information in this e-book is no longer necessary.
:::

## Data directory not found

MongoDB puts all data inside a directory called `/data/db`. This directory must exist and the user that is running MongoDB must have permissions to write to this directory.

If this directory doesn't already exist, create it and give your user permission to access it with this command on your terminal:

```
sudo mkdir -p /data/db
sudo chown $USER
```

## SocketException: Address already in use

This means MongoDB is already running!

MongoDB can stay running even after you close your terminal in some cases. It's okay though, you can continue using it.

If you want to stop MongoDB so you re-run it manually, you can do so with this chain of commands:

```
mongod
> use admin
> db.shutdownServer()
```

Then you can restart it by running `mongod`.