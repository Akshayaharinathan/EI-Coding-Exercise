import { NotificationFactory } from './NotificationFactory';
import { Notification } from './Notification';
import { SMSNotification } from './SMSNotification';

// Concrete Creator
export class SMSNotificationFactory extends NotificationFactory {
  createNotification(recipient: string): Notification {
    return new SMSNotification(recipient);
  }
}
