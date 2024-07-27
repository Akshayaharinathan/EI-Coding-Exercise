"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tea = void 0;
const CaffeineBeverage_1 = require("./CaffeineBeverage");
class Tea extends CaffeineBeverage_1.CaffeineBeverage {
    brew() {
        console.log("Steeping the tea");
    }
    addCondiments() {
        console.log("Adding lemon");
    }
}
exports.Tea = Tea;
