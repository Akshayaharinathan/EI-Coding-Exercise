"use strict";
// src/components/CompositeGraphic.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeGraphic = void 0;
class CompositeGraphic {
    constructor() {
        this.graphics = [];
    }
    add(graphic) {
        this.graphics.push(graphic);
    }
    remove(graphic) {
        const index = this.graphics.indexOf(graphic);
        if (index !== -1) {
            this.graphics.splice(index, 1);
        }
    }
    render() {
        for (const graphic of this.graphics) {
            graphic.render();
        }
    }
    move(x, y) {
        for (const graphic of this.graphics) {
            graphic.move(x, y);
        }
    }
}
exports.CompositeGraphic = CompositeGraphic;
