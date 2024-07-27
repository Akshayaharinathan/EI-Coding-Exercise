import { Device } from './device';
import { Observer, Subject } from './observer';
import { DeviceFactory } from './deviceFactory';
import { DeviceProxy } from './deviceProxy';

interface ScheduledTask {
    id: string;
    name: string;
    time: string; // HH:MM format
}

export class CentralHub implements Subject {
    private devices: DeviceProxy[] = [];
    private scheduledTasks: ScheduledTask[] = [];
    private triggers: { id: string; name: string; condition: string }[] = [];
    private observers: Observer[] = [];

    addDevice(device: Device): void {
        const existingDevice = this.devices.find(d => d.getId() === device.id && d.getName() === device.name);
        if (existingDevice) {
            console.log(`Device with ID ${device.id} already exists for type ${device.name}.`);
        } else {
            const deviceProxy = new DeviceProxy(device);
            deviceProxy.turnOff(); // Set the device to "off" by default
            this.devices.push(deviceProxy);
            console.log(`${device.name} with ID ${device.id} has been added and is currently off.`);
            this.notifyObservers();
        }
    }

    removeDevice(name: string, id: string): void {
        const deviceIndex = this.devices.findIndex(d => d.getId() === id && d.getName() === name);
        if (deviceIndex !== -1) {
            this.devices.splice(deviceIndex, 1);
            console.log(`${name} with ID ${id} has been removed.`);
            this.notifyObservers();
        } else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }

    turnDeviceOn(name: string, id: string): void {
        const device = this.devices.find(d => d.getId() === id && d.getName() === name);
        if (device) {
            if (device.getStatus()) {
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} with ID ${id} is already on.`);
            } else {
                device.turnOn();
                const action = name === 'door' ? 'opened' : 'turned on';
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} with ID ${id} has been ${action}.`);
                this.notifyObservers();
            }
        } else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }

    turnDeviceOff(name: string, id: string): void {
        const device = this.devices.find(d => d.getId() === id && d.getName() === name);
        if (device) {
            if (!device.getStatus()) {
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} with ID ${id} is already off.`);
            } else {
                device.turnOff();
                const action = name === 'door' ? 'closed' : 'turned off';
                console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} with ID ${id} has been ${action}.`);
                this.notifyObservers();
            }
        } else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }

    scheduleDevice(name: string, id: string, time: string): void {
        const device = this.devices.find(d => d.getId() === id && d.getName() === name);
        if (device) {
            const existingTask = this.scheduledTasks.find(t => t.id === id && t.name === name);
            if (existingTask) {
                console.log(`Device ${name} with ID ${id} is already scheduled at ${existingTask.time}.`);
            } else if (!this.isValidTime(time)) {
                console.log("Invalid time format. Please enter time in HH:MM (24-hour) format.");
            } else {
                this.scheduledTasks.push({ name, id, time });
                console.log(`Task scheduled for ${name} with ID ${id} at ${time}.`);
                this.notifyObservers();
            }
        } else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }

    removeScheduledTask(name: string, id: string): void {
        const taskIndex = this.scheduledTasks.findIndex(t => t.id === id && t.name === name);
        if (taskIndex !== -1) {
            this.scheduledTasks.splice(taskIndex, 1);
            console.log(`Scheduled task for ${name} with ID ${id} has been removed.`);
            this.notifyObservers();
        } else {
            console.log(`Scheduled task for ${name} with ID ${id} not found.`);
        }
    }

    addTrigger(name: string, id: string, condition: string): void {
        const device = this.devices.find(d => d.getId() === id && d.getName() === name);
        if (device) {
            const existingTrigger = this.triggers.find(t => t.id === id && t.name === name);
            if (existingTrigger) {
                console.log(`Trigger already exists for ${name} with ID ${id}.`);
            } else {
                this.triggers.push({ id, name, condition });
                console.log(`Trigger added for ${name} with ID ${id}. Condition: ${condition}`);
                this.notifyObservers();
            }
        } else {
            console.log(`Device ${name} with ID ${id} not found.`);
        }
    }

    removeTrigger(name: string, id: string): void {
        const triggerIndex = this.triggers.findIndex(t => t.id === id && t.name === name);
        if (triggerIndex !== -1) {
            this.triggers.splice(triggerIndex, 1);
            console.log(`Trigger for ${name} with ID ${id} has been removed.`);
            this.notifyObservers();
        } else {
            console.log(`Trigger for ${name} with ID ${id} not found.`);
        }
    }

    getScheduledTasks(): ScheduledTask[] {
        return this.scheduledTasks;
    }

    getTriggers(): { id: string; name: string; condition: string }[] {
        return this.triggers;
    }

    showStatus(): void {
        if (this.devices.length === 0) {
            console.log("No devices added.");
        } else {
            console.log("Devices:");
            this.devices.forEach(device => {
                const status = device.getStatus() ? (device.getName() === 'door' ? "Opened" : "ON") : (device.getName() === 'door' ? "Locked" : "OFF");
                console.log(`- ${device.getName().charAt(0).toUpperCase() + device.getName().slice(1)}, ID: ${device.getId()}, Status: ${status}`);
            });
        }

        if (this.getScheduledTasks().length === 0) {
            console.log("No scheduled tasks.");
        } else {
            console.log("Scheduled Tasks:");
            this.getScheduledTasks().forEach(task => {
                console.log(`- Device: ${task.name}, ID: ${task.id}, Time: ${task.time}`);
            });
        }

        if (this.getTriggers().length === 0) {
            console.log("No triggers set.");
        } else {
            console.log("Triggers:");
            this.getTriggers().forEach(trigger => {
                console.log(`- Device: ${trigger.name}, ID: ${trigger.id}, Condition: ${trigger.condition}`);
            });
        }
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update("Devices or tasks have been updated."));
    }

    private isValidTime(time: string): boolean {
        const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
        return regex.test(time);
    }
}
