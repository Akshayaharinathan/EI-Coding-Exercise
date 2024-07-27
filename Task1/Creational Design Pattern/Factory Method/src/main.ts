import { EmailNotificationFactory } from './EmailNotificationFactory';
import { SMSNotificationFactory } from './SMSNotificationFactory';
import { PushNotificationFactory } from './PushNotificationFactory';

// Usage
const emailFactory = new EmailNotificationFactory();
const smsFactory = new SMSNotificationFactory();
const pushFactory = new PushNotificationFactory();

const emailNotification = emailFactory.createNotification("john@example.com");
const smsNotification = smsFactory.createNotification("123-456-7890");
const pushNotification = pushFactory.createNotification("johnsDevice");

emailNotification.send("Hello via Email!");    // Sending Email to john@example.com: Hello via Email!
smsNotification.send("Hello via SMS!");        // Sending SMS to 123-456-7890: Hello via SMS!
pushNotification.send("Hello via Push!");      // Sending Push Notification to johnsDevice: Hello via Push!
