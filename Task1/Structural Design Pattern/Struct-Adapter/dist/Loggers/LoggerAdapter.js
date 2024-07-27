"use strict";
// src/loggers/LoggerAdapter.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerAdapter = void 0;
const JSONLogger_1 = require("./JSONLogger");
class LoggerAdapter {
    constructor() {
        this.jsonLogger = new JSONLogger_1.JSONLogger();
    }
    log(message) {
        this.jsonLogger.logJSON({ message });
    }
}
exports.LoggerAdapter = LoggerAdapter;
