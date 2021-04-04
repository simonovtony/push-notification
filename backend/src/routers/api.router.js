const NotificationController = require('../controllers/notification.controller');

const router = require('express').Router();

router[NotificationController.router.sendNotificationAction.method](
    NotificationController.router.sendNotificationAction.path, 
    (req, res) => {
        const controller = new NotificationController();
        controller.sendNotificationAction(req, res);
    }
);

router[NotificationController.router.addTokenAction.method](
    NotificationController.router.addTokenAction.path, 
    (req, res) => {
        const controller = new NotificationController();
        controller.addTokenAction(req, res);
    }
);

router[NotificationController.router.getFirebaseConfigAction.method](
    NotificationController.router.getFirebaseConfigAction.path, 
    (req, res) => {
        const controller = new NotificationController();
        controller.getFirebaseConfigAction(req, res);
    }
);

module.exports = router;