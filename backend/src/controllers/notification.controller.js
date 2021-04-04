const services = require("../services");
const config = require('../../config');

class NotificationController {
    static router = {
        sendNotificationAction: { 
            method: 'post',
            path: '/api/notification/send-notification',
        },
        addTokenAction: { 
            method: 'post',
            path: '/api/notification/add-token',
        },
        getFirebaseConfigAction: {
            method: 'get',
            path: '/api/notification/get-firebase-config',
        }
    };

    async getFirebaseConfigAction(req, res) {
        const firebaseConfig = config.firebaseConfig;

        res.send(firebaseConfig);
    }

    async sendNotificationAction(req, res) {
        const {
            firebaseService,
            userService,
        } = services();

        const users = await userService.getUsers();

        const tokens = users.map(user => user.token);

        if (tokens.length === 0) {
            res.json({
                success: true,
                message: "the tokens array is empty"
            });
            return;
        }

        await firebaseService.pushNotificationByTokens(tokens,
            'notification title',
            'notification body',
            {
                success: 'true'
            }
        );

        res.json({
            success: true
        });
    }

    async addTokenAction(req, res) {
        const {
            userService,
        } = services();

        const { token } = req.body;

        if (!token) {
            res.status(400).json({
                error: new Error('the token field is required')
            });
            return;
        }

        const user = await userService.getUserByToken(token);

        if (!user) {
            await userService.createUser(token);
        }
        
        res.json({
            success: true
        })
    }
}

module.exports = NotificationController;