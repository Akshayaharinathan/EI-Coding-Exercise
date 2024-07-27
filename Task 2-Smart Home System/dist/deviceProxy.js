"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceProxy = void 0;
class DeviceProxy {
    constructor(realDevice) {
        this.realDevice = realDevice;
    }
    turnOn() {
        // Access control logic can be added here
        this.realDevice.turnOn();
    }
    turnOff() {
        // Access control logic can be added here
        this.realDevice.turnOff();
    }
    getStatus() {
        return this.realDevice.status;
    }
    getId() {
        return this.realDevice.id;
    }
    getName() {
        return this.realDevice.name;
    }
}
exports.DeviceProxy = DeviceProxy;
