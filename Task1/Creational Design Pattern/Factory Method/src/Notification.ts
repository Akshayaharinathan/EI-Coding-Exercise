// Abstract Product
export abstract class Notification {
    constructor(public recipient: string) {}
    abstract send(message: string): void;
  }
  