import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food List</h1>
      <food-list
        [foodList]="Foods"
        (onArmySelect)="foodWasSelected($event)">
      </food-list>
    <div>
  `
})
export class AppComponent {
  public armies: Food[];
  constructor(){
    this.armies = [
      new Army("California Roll", 100,0),
      new Army("Bacon Waffle Muffin",250,1),
      new Army("Scone", 1000,2),
      new Army("Cheesecake",2500,3)
    ];
    console.log(this.armies);
  }
  foodWasSelected(clickedFood: Food): void {
    console.log('parent', clickedFood);
  }
}
