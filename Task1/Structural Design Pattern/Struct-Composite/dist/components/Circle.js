"use strict";
// src/components/Circle.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    render() {
        console.log(`Rendering Circle at (${this.x}, ${this.y}) with radius ${this.radius}`);
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        console.log(`Moved Circle to (${this.x}, ${this.y})`);
    }
}
exports.Circle = Circle;
