"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./components/Circle");
const Rectangle_1 = require("./components/Rectangle");
const CompositeGraphic_1 = require("./components/CompositeGraphic");
// Create simple graphics
const circle1 = new Circle_1.Circle(0, 0, 5);
const circle2 = new Circle_1.Circle(10, 10, 7);
const rectangle = new Rectangle_1.Rectangle(5, 5, 10, 15);
// Create composite graphic
const composite = new CompositeGraphic_1.CompositeGraphic();
composite.add(circle1);
composite.add(circle2);
composite.add(rectangle);
// Render and move composite graphic
console.log("Rendering Composite Graphic:");
composite.render();
console.log("\nMoving Composite Graphic by (2, 3):");
composite.move(2, 3);
console.log("\nRendering Composite Graphic after moving:");
composite.render();
