"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoorLock = exports.Thermostat = exports.Light = exports.Device = void 0;
class Device {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = false;
    }
}
exports.Device = Device;
class Light extends Device {
    constructor(id) {
        super(id, 'light');
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}
exports.Light = Light;
class Thermostat extends Device {
    constructor(id) {
        super(id, 'thermostat');
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}
exports.Thermostat = Thermostat;
class DoorLock extends Device {
    constructor(id) {
        super(id, 'door');
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}
exports.DoorLock = DoorLock;
