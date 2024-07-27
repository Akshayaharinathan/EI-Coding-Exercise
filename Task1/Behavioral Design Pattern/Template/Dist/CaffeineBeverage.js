"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaffeineBeverage = void 0;
class CaffeineBeverage {
    prepareRecipe() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
    boilWater() {
        console.log("Boiling water");
    }
    pourInCup() {
        console.log("Pouring into cup");
    }
}
exports.CaffeineBeverage = CaffeineBeverage;
