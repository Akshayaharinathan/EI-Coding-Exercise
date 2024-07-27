// src/index.ts

import { Circle } from "./components/Circle";
import { Rectangle } from "./components/Rectangle";
import { CompositeGraphic } from "./components/CompositeGraphic";

// Create simple graphics
const circle1 = new Circle(0, 0, 5);
const circle2 = new Circle(10, 10, 7);
const rectangle = new Rectangle(5, 5, 10, 15);

// Create composite graphic
const composite = new CompositeGraphic();
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
