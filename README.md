# Push Notification

It's an example how to push notification by the firebase cloud messaging.

To run the server you need to open the terminal/console to the project directory 
and use next commands.

```
cd ./backend
npm install
```

the firebase cloud messging has to be set up.
After the firebaseConfig and serviceAccount have to be taken from the project settings.
Copy config.example.js and rename it and change the name config.js
and copy the serviceAccount and firebaseConfig to from the firebase cloud messaging to config.js
Use the next command to run project.

```
npm start
```

Open the http://localhost:8080 (by default).
The button sends the push notification to onMessage.
The firebase cloud messaging dashboard has the testing page to send the push notification to http://localhost:8080.