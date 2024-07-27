import { Notification } from './Notification';

// Concrete Product
export class SMSNotification extends Notification {
  send(message: string) {
    console.log(`Sending SMS to ${this.recipient}: ${message}`);
  }
}
