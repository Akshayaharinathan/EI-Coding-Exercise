"use strict";
// src/components/Rectangle.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render() {
        console.log(`Rendering Rectangle at (${this.x}, ${this.y}) with width ${this.width} and height ${this.height}`);
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        console.log(`Moved Rectangle to (${this.x}, ${this.y})`);
    }
}
exports.Rectangle = Rectangle;
