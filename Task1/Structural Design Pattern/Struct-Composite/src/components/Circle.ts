// src/components/Circle.ts

import { Graphic } from "../interfaces/Graphic";

export class Circle implements Graphic {
  constructor(private x: number, private y: number, private radius: number) {}

  render(): void {
    console.log(`Rendering Circle at (${this.x}, ${this.y}) with radius ${this.radius}`);
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
    console.log(`Moved Circle to (${this.x}, ${this.y})`);
  }
}
