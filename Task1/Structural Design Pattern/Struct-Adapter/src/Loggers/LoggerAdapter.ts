// src/loggers/LoggerAdapter.ts

import { Logger } from "../interfaces/Logger";
import { JSONLogger } from "./JSONLogger";

export class LoggerAdapter implements Logger {
  private jsonLogger: JSONLogger;

  constructor() {
    this.jsonLogger = new JSONLogger();
  }

  log(message: string): void {
    this.jsonLogger.logJSON({ message });
  }
}
