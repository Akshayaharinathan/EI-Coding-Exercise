"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationFactory = void 0;
const NotificationFactory_1 = require("./NotificationFactory");
const PushNotification_1 = require("./PushNotification");
// Concrete Creator
class PushNotificationFactory extends NotificationFactory_1.NotificationFactory {
    createNotification(recipient) {
        return new PushNotification_1.PushNotification(recipient);
    }
}
exports.PushNotificationFactory = PushNotificationFactory;
