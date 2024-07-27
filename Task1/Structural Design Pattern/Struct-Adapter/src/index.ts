// src/index.ts

import { DefaultLogger } from "./loggers/DefaultLogger";
import { LoggerAdapter } from "./loggers/LoggerAdapter";

// Using the Default Logger
const defaultLogger = new DefaultLogger();
defaultLogger.log("This is a default log message.");

// Using the JSON Logger through Adapter
const jsonLoggerAdapter = new LoggerAdapter();
jsonLoggerAdapter.log("This is a JSON log message.");
