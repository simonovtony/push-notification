/* eslint-disable no-undef */

importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

(async () => {
    const firebaseConfigResponse = await fetch(
        'http://localhost:8080/api/notification/get-firebase-config'
    );

    const firebaseConfig = await firebaseConfigResponse.json();
    
    const app = firebase.initializeApp(firebaseConfig);
    
    const messaging = app.messaging();
    
    const token = await messaging.getToken();
    
    await fetch(
        'http://localhost:8080/api/notification/add-token'
    , { 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token
        })
    });
    
    messaging.onBackgroundMessage(payload => {
        console.log('--- onBackgroundMessage ---');
        console.log(payload);
    });
})();