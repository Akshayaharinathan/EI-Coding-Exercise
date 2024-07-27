"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = void 0;
const Notification_1 = require("./Notification");
// Concrete Product
class PushNotification extends Notification_1.Notification {
    send(message) {
        console.log(`Sending Push Notification to ${this.recipient}: ${message}`);
    }
}
exports.PushNotification = PushNotification;
