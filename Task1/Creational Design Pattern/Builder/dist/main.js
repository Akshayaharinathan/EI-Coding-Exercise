"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HouseBuilder_1 = require("./HouseBuilder");
// Usage
const builder = new HouseBuilder_1.HouseBuilder();
const house = builder
    .buildWalls(4)
    .buildDoors(2)
    .buildWindows(4)
    .buildRoof('shingle')
    .buildGarage(true)
    .getResult();
console.log(house.description()); // Output: House with 4 walls, 2 doors, 4 windows, a shingle roof, and a garage.
