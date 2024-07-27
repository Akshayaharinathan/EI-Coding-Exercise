"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceFactory = void 0;
const device_1 = require("./device");
class DeviceFactory {
    static createDevice(type, id) {
        switch (type.toLowerCase()) {
            case 'light':
                return new device_1.Light(id);
            case 'thermostat':
                return new device_1.Thermostat(id);
            case 'door':
                return new device_1.DoorLock(id);
            default:
                console.log("Invalid device type.");
                return null;
        }
    }
}
exports.DeviceFactory = DeviceFactory;
