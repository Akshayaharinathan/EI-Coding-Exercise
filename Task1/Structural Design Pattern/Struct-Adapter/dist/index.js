"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultLogger_1 = require("./loggers/DefaultLogger");
const LoggerAdapter_1 = require("./loggers/LoggerAdapter");
// Using the Default Logger
const defaultLogger = new DefaultLogger_1.DefaultLogger();
defaultLogger.log("This is a default log message.");
// Using the JSON Logger through Adapter
const jsonLoggerAdapter = new LoggerAdapter_1.LoggerAdapter();
jsonLoggerAdapter.log("This is a JSON log message.");
