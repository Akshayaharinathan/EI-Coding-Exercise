"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberExpression = void 0;
class NumberExpression {
    constructor(number) {
        this.number = number;
    }
    interpret() {
        return this.number;
    }
}
exports.NumberExpression = NumberExpression;
