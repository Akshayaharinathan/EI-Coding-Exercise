"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBuilder = void 0;
const House_1 = require("./House");
class HouseBuilder {
    constructor() {
        this.house = new House_1.House();
    }
    buildWalls(walls) {
        this.house.walls = walls;
        return this;
    }
    buildDoors(doors) {
        this.house.doors = doors;
        return this;
    }
    buildWindows(windows) {
        this.house.windows = windows;
        return this;
    }
    buildRoof(roof) {
        this.house.roof = roof;
        return this;
    }
    buildGarage(garage) {
        this.house.garage = garage;
        return this;
    }
    getResult() {
        return this.house;
    }
}
exports.HouseBuilder = HouseBuilder;
