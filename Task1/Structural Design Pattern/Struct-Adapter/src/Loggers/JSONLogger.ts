// src/loggers/JSONLogger.ts

export class JSONLogger {
    logJSON(jsonMessage: { message: string }): void {
      console.log(`JSON Logger: ${JSON.stringify(jsonMessage)}`);
    }
  }
  