"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotificationFactory = void 0;
const NotificationFactory_1 = require("./NotificationFactory");
const SMSNotification_1 = require("./SMSNotification");
// Concrete Creator
class SMSNotificationFactory extends NotificationFactory_1.NotificationFactory {
    createNotification(recipient) {
        return new SMSNotification_1.SMSNotification(recipient);
    }
}
exports.SMSNotificationFactory = SMSNotificationFactory;
