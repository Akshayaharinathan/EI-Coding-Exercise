import { Notification } from './Notification';

// Creator
export abstract class NotificationFactory {
  abstract createNotification(recipient: string): Notification;
}
