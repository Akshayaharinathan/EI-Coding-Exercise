import { Notification } from './Notification';

// Concrete Product
export class EmailNotification extends Notification {
  send(message: string) {
    console.log(`Sending Email to ${this.recipient}: ${message}`);
  }
}
