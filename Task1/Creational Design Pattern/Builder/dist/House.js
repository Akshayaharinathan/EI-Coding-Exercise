"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
class House {
    constructor() {
        this.walls = 0;
        this.doors = 0;
        this.windows = 0;
        this.roof = '';
        this.garage = false;
    }
    description() {
        return `House with ${this.walls} walls, ${this.doors} doors, ${this.windows} windows, a ${this.roof} roof${this.garage ? ', and a garage' : ''}.`;
    }
}
exports.House = House;
