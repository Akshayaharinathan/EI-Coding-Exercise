"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailNotificationFactory_1 = require("./EmailNotificationFactory");
const SMSNotificationFactory_1 = require("./SMSNotificationFactory");
const PushNotificationFactory_1 = require("./PushNotificationFactory");
// Usage
const emailFactory = new EmailNotificationFactory_1.EmailNotificationFactory();
const smsFactory = new SMSNotificationFactory_1.SMSNotificationFactory();
const pushFactory = new PushNotificationFactory_1.PushNotificationFactory();
const emailNotification = emailFactory.createNotification("john@example.com");
const smsNotification = smsFactory.createNotification("123-456-7890");
const pushNotification = pushFactory.createNotification("johnsDevice");
emailNotification.send("Hello via Email!"); // Sending Email to john@example.com: Hello via Email!
smsNotification.send("Hello via SMS!"); // Sending SMS to 123-456-7890: Hello via SMS!
pushNotification.send("Hello via Push!"); // Sending Push Notification to johnsDevice: Hello via Push!
