export class House {
    public walls: number;
    public doors: number;
    public windows: number;
    public roof: string;
    public garage: boolean;
  
    constructor() {
      this.walls = 0;
      this.doors = 0;
      this.windows = 0;
      this.roof = '';
      this.garage = false;
    }
  
    public description(): string {
      return `House with ${this.walls} walls, ${this.doors} doors, ${this.windows} windows, a ${this.roof} roof${this.garage ? ', and a garage' : ''}.`;
    }
  }
  