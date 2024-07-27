import { NotificationFactory } from './NotificationFactory';
import { Notification } from './Notification';
import { PushNotification } from './PushNotification';

// Concrete Creator
export class PushNotificationFactory extends NotificationFactory {
  createNotification(recipient: string): Notification {
    return new PushNotification(recipient);
  }
}
