"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const CaffeineBeverage_1 = require("./CaffeineBeverage");
class Coffee extends CaffeineBeverage_1.CaffeineBeverage {
    brew() {
        console.log("Dripping coffee through filter");
    }
    addCondiments() {
        console.log("Adding sugar and milk");
    }
}
exports.Coffee = Coffee;
