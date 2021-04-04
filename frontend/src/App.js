import { useCallback, useEffect } from "react";
import firebase from 'firebase';

const App = () => {

    useEffect(() => {
        const initialize = async () => {
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
            
            messaging.onMessage(payload => {
                console.log('--- onMessage ---');
                console.log(payload);
            });
        };

        initialize();
    }, []);

    const handleClick = useCallback(async () => {
        await fetch('http://localhost:8080/api/notification/send-notification', { 
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }, []);

    return (
        <>
            <h1>Push Notification</h1>
            <div>
                <button type="button" onClick={handleClick}>
                    <span>Send</span>
                </button>
            </div>
        </>
    )
};

export default App;