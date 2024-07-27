"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const centralHub_1 = require("./centralHub");
const deviceFactory_1 = require("./deviceFactory");
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const centralHub = new centralHub_1.CentralHub();
function prompt(question) {
    return new Promise(resolve => rl.question(question, resolve));
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let running = true;
        while (running) {
            console.log(`
1. Add Device
2. Remove Device
3. Turn Device On
4. Turn Device Off
5. Schedule Device
6. Remove Scheduled Task
7. Show Status
8. Show Scheduled Tasks
9. Add Trigger
10. Remove Trigger
11. Exit
`);
            const choice = yield prompt("Choose an option: ");
            switch (choice) {
                case '1':
                    const deviceName = yield prompt("Enter device name (light, thermostat, door): ");
                    const deviceId = yield prompt("Enter device ID: ");
                    const device = deviceFactory_1.DeviceFactory.createDevice(deviceName, deviceId);
                    if (device) {
                        centralHub.addDevice(device);
                    }
                    break;
                case '2':
                    const removeDeviceName = yield prompt("Enter device name to remove: ");
                    const removeDeviceId = yield prompt("Enter device ID to remove: ");
                    centralHub.removeDevice(removeDeviceName, removeDeviceId);
                    break;
                case '3':
                    const turnOnDeviceName = yield prompt("Enter device name to turn on: ");
                    const turnOnDeviceId = yield prompt("Enter device ID to turn on: ");
                    centralHub.turnDeviceOn(turnOnDeviceName, turnOnDeviceId);
                    break;
                case '4':
                    const turnOffDeviceName = yield prompt("Enter device name to turn off: ");
                    const turnOffDeviceId = yield prompt("Enter device ID to turn off: ");
                    centralHub.turnDeviceOff(turnOffDeviceName, turnOffDeviceId);
                    break;
                case '5':
                    const scheduleDeviceName = yield prompt("Enter device name to schedule: ");
                    const scheduleDeviceId = yield prompt("Enter device ID to schedule: ");
                    const scheduleTime = yield prompt("Enter time in HH:MM format (24-hour): ");
                    centralHub.scheduleDevice(scheduleDeviceName, scheduleDeviceId, scheduleTime);
                    break;
                case '6':
                    const removeTaskDeviceName = yield prompt("Enter device name for scheduled task to remove: ");
                    const removeTaskDeviceId = yield prompt("Enter device ID for scheduled task to remove: ");
                    centralHub.removeScheduledTask(removeTaskDeviceName, removeTaskDeviceId);
                    break;
                case '7':
                    centralHub.showStatus();
                    break;
                case '8':
                    const scheduledTasks = centralHub.getScheduledTasks();
                    if (scheduledTasks.length === 0) {
                        console.log("No scheduled tasks.");
                    }
                    else {
                        console.log("Scheduled Tasks:");
                        scheduledTasks.forEach(task => {
                            console.log(`- Device: ${task.name}, ID: ${task.id}, Time: ${task.time}`);
                        });
                    }
                    break;
                case '9':
                    const triggerName = yield prompt("Enter device name to add trigger: ");
                    const triggerId = yield prompt("Enter device ID to add trigger: ");
                    const condition = yield prompt("Enter trigger condition: ");
                    centralHub.addTrigger(triggerName, triggerId, condition);
                    break;
                case '10':
                    const removeTriggerName = yield prompt("Enter device name for trigger to remove: ");
                    const removeTriggerId = yield prompt("Enter device ID for trigger to remove: ");
                    centralHub.removeTrigger(removeTriggerName, removeTriggerId);
                    break;
                case '11':
                    console.log("Exiting...");
                    running = false;
                    break;
                default:
                    console.log("Invalid option. Please try again.");
                    break;
            }
        }
        rl.close();
    });
}
main();
