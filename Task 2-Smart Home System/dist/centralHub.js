"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CentralHub = void 0;
const deviceProxy_1 = require("./deviceProxy");
class CentralHub {
    constructor() {
        this.devices = [];
        this.scheduledTasks = [];
        this.triggers = [];
        this.observers = [];
    }
    addDevice(device) {
        const existingDevice = this.devices.find(d => d.getId() === device.id && d.getName() === device.name);
        if (existingDevice) {
            console.log(`Device with ID ${device.id} already exists for type ${device.name}.`);
        }
        else {
            const deviceProxy = new deviceProxy_1.DeviceProxy(device);
            deviceProxy.turnOff(); // Set the device to "off" by default
            this.devices.push(deviceProxy);
            console.log(`${device.name} with ID ${device.id} has been added and is currently off.`);
            this.notifyObservers();
        }
    }
    removeDevice(name, id) {
        const deviceIndex = this.devices.findIndex(d => d.getId() === id && d.getName() === name);
        if (deviceIndex !== -1) {
            this.devices.splice(deviceIndex, 1);
            console.log(`${name} with ID ${id} has been removed.`);
            this.notifyObservers();
        }
        else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }
    turnDeviceOn(name, id) {
        const device = this.devices.find(d => d.getId() === id && d.getName() === name);
        if (device) {
            if (device.getStatus()) {
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} with ID ${id} is already on.`);
            }
            else {
                device.turnOn();
                const action = name === 'door' ? 'opened' : 'turned on';
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} with ID ${id} has been ${action}.`);
                this.notifyObservers();
            }
        }
        else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }
    turnDeviceOff(name, id) {
        const device = this.devices.find(d => d.getId() === id && d.getName() === name);
        if (device) {
            if (!device.getStatus()) {
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} with ID ${id} is already off.`);
            }
            else {
                device.turnOff();
                const action = name === 'door' ? 'closed' : 'turned off';
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} with ID ${id} has been ${action}.`);
                this.notifyObservers();
            }
        }
        else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }
    scheduleDevice(name, id, time) {
        const device = this.devices.find(d => d.getId() === id && d.getName() === name);
        if (device) {
            const existingTask = this.scheduledTasks.find(t => t.id === id && t.name === name);
            if (existingTask) {
                console.log(`Device ${name} with ID ${id} is already scheduled at ${existingTask.time}.`);
            }
            else if (!this.isValidTime(time)) {
                console.log("Invalid time format. Please enter time in HH:MM (24-hour) format.");
            }
            else {
                this.scheduledTasks.push({ name, id, time });
                console.log(`Task scheduled for ${name} with ID ${id} at ${time}.`);
                this.notifyObservers();
            }
        }
        else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }
    removeScheduledTask(name, id) {
        const taskIndex = this.scheduledTasks.findIndex(t => t.id === id && t.name === name);
        if (taskIndex !== -1) {
            this.scheduledTasks.splice(taskIndex, 1);
            console.log(`Scheduled task for ${name} with ID ${id} has been removed.`);
            this.notifyObservers();
        }
        else {
            console.log(`Scheduled task for ${name} with ID ${id} not found.`);
        }
    }
    addTrigger(name, id, condition) {
        const device = this.devices.find(d => d.getId() === id && d.getName() === name);
        if (device) {
            const existingTrigger = this.triggers.find(t => t.id === id && t.name === name);
            if (existingTrigger) {
                console.log(`Trigger already exists for ${name} with ID ${id}.`);
            }
            else {
                this.triggers.push({ id, name, condition });
                console.log(`Trigger added for ${name} with ID ${id}. Condition: ${condition}`);
                this.notifyObservers();
            }
        }
        else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }
    removeTrigger(name, id) {
        const triggerIndex = this.triggers.findIndex(t => t.id === id && t.name === name);
        if (triggerIndex !== -1) {
            this.triggers.splice(triggerIndex, 1);
            console.log(`Trigger for ${name} with ID ${id} has been removed.`);
            this.notifyObservers();
        }
        else {
            console.log(`Trigger for ${name} with ID ${id} not found.`);
        }
    }
    getScheduledTasks() {
        return this.scheduledTasks;
    }
    getTriggers() {
        return this.triggers;
    }
    showStatus() {
        if (this.devices.length === 0) {
            console.log("No devices added.");
        }
        else {
            console.log("Devices:");
            this.devices.forEach(device => {
                const status = device.getStatus() ? (device.getName() === 'door' ? "Opened" : "ON") : (device.getName() === 'door' ? "Locked" : "OFF");
                console.log(`- ${device.getName().charAt(0).toUpperCase() + device.getName().slice(1)}, ID: ${device.getId()}, Status: ${status}`);
            });
        }
        if (this.getScheduledTasks().length === 0) {
            console.log("No scheduled tasks.");
        }
        else {
            console.log("Scheduled Tasks:");
            this.getScheduledTasks().forEach(task => {
                console.log(`- Device: ${task.name}, ID: ${task.id}, Time: ${task.time}`);
            });
        }
        if (this.getTriggers().length === 0) {
            console.log("No triggers set.");
        }
        else {
            console.log("Triggers:");
            this.getTriggers().forEach(trigger => {
                console.log(`- Device: ${trigger.name}, ID: ${trigger.id}, Condition: ${trigger.condition}`);
            });
        }
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update("Devices or tasks have been updated."));
    }
    isValidTime(time) {
        const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        return regex.test(time);
    }
}
exports.CentralHub = CentralHub;
