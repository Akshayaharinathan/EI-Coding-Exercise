"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotificationFactory = void 0;
const NotificationFactory_1 = require("./NotificationFactory");
const EmailNotification_1 = require("./EmailNotification");
// Concrete Creator
class EmailNotificationFactory extends NotificationFactory_1.NotificationFactory {
    createNotification(recipient) {
        return new EmailNotification_1.EmailNotification(recipient);
    }
}
exports.EmailNotificationFactory = EmailNotificationFactory;
