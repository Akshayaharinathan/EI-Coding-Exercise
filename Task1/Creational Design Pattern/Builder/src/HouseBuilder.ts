import { House } from './House';

export class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  public buildWalls(walls: number): this {
    this.house.walls = walls;
    return this;
  }

  public buildDoors(doors: number): this {
    this.house.doors = doors;
    return this;
  }

  public buildWindows(windows: number): this {
    this.house.windows = windows;
    return this;
  }

  public buildRoof(roof: string): this {
    this.house.roof = roof;
    return this;
  }

  public buildGarage(garage: boolean): this {
    this.house.garage = garage;
    return this;
  }

  public getResult(): House {
    return this.house;
  }
}
