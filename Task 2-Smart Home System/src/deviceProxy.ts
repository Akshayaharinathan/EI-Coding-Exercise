import { Device } from './device';

export class DeviceProxy {
    private realDevice: Device;

    constructor(realDevice: Device) {
        this.realDevice = realDevice;
    }

    turnOn(): void {
        // Access control logic can be added here
        this.realDevice.turnOn();
    }

    turnOff(): void {
        // Access control logic can be added here
        this.realDevice.turnOff();
    }

    getStatus(): boolean {
        return this.realDevice.status;
    }

    getId(): string {
        return this.realDevice.id;
    }

    getName(): string {
        return this.realDevice.name;
    }
}
