# FAQ

### Q: **Why do I not need to run mongod, as shown in the course videos?**  
 A: Windows runs MongoDB as a service.  A service is a program that executed the moment a user logs into Windows and never quits.  All operating systems do this, and Windows does this using services.

### Q: **Can I manually control this?**
 A: Yes.  Click on the Windows start button, and search for **Services**.  Then scroll down to mongod, and right-click on it, and select properties.  There you can stop the service and change the start up to manual. 

::: danger
Be very careful you do not shut off any other Services. If you are unsure about what you are doing, don't change anything. MongoDB doesn't use a lot of resources, so it will not hurt your system just to leave it running. 
:::

