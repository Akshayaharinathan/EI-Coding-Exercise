import { NotificationFactory } from './NotificationFactory';
import { Notification } from './Notification';
import { EmailNotification } from './EmailNotification';

// Concrete Creator
export class EmailNotificationFactory extends NotificationFactory {
  createNotification(recipient: string): Notification {
    return new EmailNotification(recipient);
  }
}
