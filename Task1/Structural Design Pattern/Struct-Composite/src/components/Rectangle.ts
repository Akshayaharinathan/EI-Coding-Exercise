// src/components/Rectangle.ts

import { Graphic } from "../interfaces/Graphic";

export class Rectangle implements Graphic {
  constructor(private x: number, private y: number, private width: number, private height: number) {}

  render(): void {
    console.log(`Rendering Rectangle at (${this.x}, ${this.y}) with width ${this.width} and height ${this.height}`);
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
    console.log(`Moved Rectangle to (${this.x}, ${this.y})`);
  }
}
