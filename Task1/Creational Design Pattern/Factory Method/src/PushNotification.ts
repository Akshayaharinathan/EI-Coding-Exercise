import { Notification } from './Notification';

// Concrete Product
export class PushNotification extends Notification {
  send(message: string) {
    console.log(`Sending Push Notification to ${this.recipient}: ${message}`);
  }
}
