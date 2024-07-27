"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtractionExpression = void 0;
class SubtractionExpression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}
exports.SubtractionExpression = SubtractionExpression;
