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
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("California Roll","Its a dangerous roll", 100,0),
      new Food("Bacon Waffle Muffin","Still healthier than energy drinks", 250,1),
      new Food("Scone","We do not actually know if this is a scone", 1000,2),
      new Food("Cheesecake","Vegan",2500,3)
    ];
    console.log(this.foods);
  }
  foodWasSelected(clickedFood: Food): void {
    console.log('parent', clickedFood);
  }
}
