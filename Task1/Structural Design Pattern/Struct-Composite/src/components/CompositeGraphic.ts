// src/components/CompositeGraphic.ts

import { Graphic } from "../interfaces/Graphic";

export class CompositeGraphic implements Graphic {
  private graphics: Graphic[] = [];

  add(graphic: Graphic): void {
    this.graphics.push(graphic);
  }

  remove(graphic: Graphic): void {
    const index = this.graphics.indexOf(graphic);
    if (index !== -1) {
      this.graphics.splice(index, 1);
    }
  }

  render(): void {
    for (const graphic of this.graphics) {
      graphic.render();
    }
  }

  move(x: number, y: number): void {
    for (const graphic of this.graphics) {
      graphic.move(x, y);
    }
  }
}
