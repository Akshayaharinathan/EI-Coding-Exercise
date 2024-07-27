"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
const Notification_1 = require("./Notification");
// Concrete Product
class EmailNotification extends Notification_1.Notification {
    send(message) {
        console.log(`Sending Email to ${this.recipient}: ${message}`);
    }
}
exports.EmailNotification = EmailNotification;
