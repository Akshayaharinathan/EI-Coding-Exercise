"use strict";
// src/loggers/JSONLogger.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONLogger = void 0;
class JSONLogger {
    logJSON(jsonMessage) {
        console.log(`JSON Logger: ${JSON.stringify(jsonMessage)}`);
    }
}
exports.JSONLogger = JSONLogger;
