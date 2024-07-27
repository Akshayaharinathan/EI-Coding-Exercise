"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionExpression = void 0;
class AdditionExpression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}
exports.AdditionExpression = AdditionExpression;
