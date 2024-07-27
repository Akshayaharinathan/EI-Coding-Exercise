// src/loggers/DefaultLogger.ts

import { Logger } from "../interfaces/Logger";

export class DefaultLogger implements Logger {
  log(message: string): void {
    console.log(`Default Logger: ${message}`);
  }
}
