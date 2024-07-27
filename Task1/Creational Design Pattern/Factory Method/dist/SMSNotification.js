"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = void 0;
const Notification_1 = require("./Notification");
// Concrete Product
class SMSNotification extends Notification_1.Notification {
    send(message) {
        console.log(`Sending SMS to ${this.recipient}: ${message}`);
    }
}
exports.SMSNotification = SMSNotification;
