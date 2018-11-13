# Installing MongDB for Windows

(Note: These instructors are for Windows 10, however most things will look the same on Windows 8 and Windows 7)

## Download

First thing to do is to navigate to so the download page. ([link](https://www.mongodb.com/download-center/community "https://www.mongodb.com/download-center/community"))
![Mongo Download Center](./pics/mongoDownLoadCenter.PNG)

Your operating system and the lastest version of MongoDB should already be selected.

### In the Package dropdown box, select MSI and click download.

![Download Dropdown](./pics/downloadDropdown.PNG)

### Then click download.

## Installing Mongo

Once the download is completed, go into the folder that you directed the download to and **double-click the MongoDB installer**. 

![Download folder](./pics/downloadFolder.png)

First dialog box on the installer is the welcome screen. Click **Next**. 

![Welcome Dialog Box](./pics/mongoWelcome.png)

A second dialog box will ask which type of installation is desired, Custom or Complete.  If you are already an expert and want to do something different with this installation, click Custom, otherwise choose **Complete**.

![Complete Dialog Box](./pics/mongoComplete.png)

Next, Mongo needs an EULA to be accepted. 

![Mongo Licensing](./pics/mongoLicense.png)

The third dialog box will have a lot of details on where MongoDB will be installed, and where data will be held. For most students, it is best to leave the default. Click **next**.

![Mongo Defaults](./pics/defaultSetupMongo.png)

The fourth dialog box will ask if Mongo Compass should be installed. Feel free to choose what is best for your situation, however for the purposes of Teclado courses, this isn't needed.  Uncheck it, and click **next**. 

![Mongo Compass](./pics/uncheckCompas.png)

Finally, click **install**.

![Mongo Install](./pics/mongorIinstall.png)

And click **finish**.

![Mongo Finished](./pics/mongoFinish.png)

## Setting up Windows

If you open CMD in windows and type in mongo, you will see that mongo doesn't work yet.  This is because the installer doesn't tell Windows where mongo lives in Windows. 

![Mongo not a recognized](./pics/mongoNotWorking.png)

To fix this, using the Windows search look for **environment variables**.

![Searching for Environment Variables](./pics/searchForEnvironmental.PNG)

This will open up edit Environment Variable's properties box.  Click once on the **path** property, and then click **edit**.

![Environment Variable](./pics/environmentalvariablesEdit.png)

This will bring up the Edit Environment Variables dialog box.  Click **New**.

![Clicking New](./pics/CreateNewEnvironmentalVariable.png)

Once new is clicked, a cursor will show up in a new editable row. There you should paste the following:

```
C:\Program Files\MongoDB\Server\4.0\bin
```

![New Environment Variable](./pics/pasteMongoLocationIn.png)

Click Ok, and ok again until all dialog boxes are closed. Then run cmd.exe once more (closing and re-opening if necessary) and attempt to execute `mongo`. 

![Working Mongo](./pics/workingMongo.PNG)

::: tip
In the course videos you will see that I run `mongod` in the terminal.  This is not needed in Windows, as it is installed as a service. 
:::

