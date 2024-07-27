import { Device, Light, Thermostat, DoorLock } from './device';

export class DeviceFactory {
    static createDevice(type: string, id: string): Device | null {
        switch (type.toLowerCase()) {
            case 'light':
                return new Light(id);
            case 'thermostat':
                return new Thermostat(id);
            case 'door':
                return new DoorLock(id);
            default:
                console.log("Invalid device type.");
                return null;
        }
    }
}
