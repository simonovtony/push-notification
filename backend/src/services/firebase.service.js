const admin = require("firebase-admin");
const config = require('../../config');

class FirebaseService {
    /**
     * @type {admin.app.App}
     */
    firebase;

    constructor() {
        const serviceAccount = config.serviceAccount;
        
        this.firebase = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    }

    /**
     * @param {string[]} tokens
     * @returns {Promise<admin.messaging.BatchResponse>}
     */
    async pushNotificationByTokens(
        tokens, 
        title = '',
        body = '',
        data = { },
    ) {
        const response = await this.firebase.messaging().sendMulticast({
            tokens: tokens,
            data,
            notification: {
                title,
                body,
            },
            webpush: {
                notification: {
                    title,
                    body,
                }
            }
        });

        return response;
    }
}

module.exports = FirebaseService;