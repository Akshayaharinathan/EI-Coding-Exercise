export abstract class Device {
    public id: string;
    public name: string;
    public status: boolean;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.status = false;
    }

    abstract turnOn(): void;
    abstract turnOff(): void;
}

export class Light extends Device {
    constructor(id: string) {
        super(id, 'light');
    }

    turnOn(): void {
        this.status = true;
    }

    turnOff(): void {
        this.status = false;
    }
}

export class Thermostat extends Device {
    constructor(id: string) {
        super(id, 'thermostat');
    }

    turnOn(): void {
        this.status = true;
    }

    turnOff(): void {
        this.status = false;
    }
}

export class DoorLock extends Device {
    constructor(id: string) {
        super(id, 'door');
    }

    turnOn(): void {
        this.status = true;
    }

    turnOff(): void {
        this.status = false;
    }
}
