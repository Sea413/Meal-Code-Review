export class Food {
  public heavy boolean =false;
  constructor(public name: string, public description: string, public calories: number, public id: number) {
    if(calories >300) {
      this.heavy = true;
    }
  }
}
