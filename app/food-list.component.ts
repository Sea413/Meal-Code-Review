import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodComponent } from './edit.component';
import { HeavyPipe } from './heavy.pipe';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [HeavyPipe],
  directives: [FoodComponent, EditFoodComponent, NewFoodComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="notHeavy">Show Lite Food</option>
    <option value="heavy">Show Heavy Food</option>
    <option value="all">Show All</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | heavy:filterHeavy"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  <edit *ngIf="selectedFood" [food]="selectedFood" [foodList]="foodList">
  </edit>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  <img src="../img/funny-food1.jpg" alt="Amusing Picture">
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect:EventEmitter<Food>;
  public selectedFood: Food;
  public filterHeavy: string = "notHeavy";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(tempFood: Food): void {
    this.foodList.push(tempFood);
  }
  onChange(filterOption) {
    this.filterHeavy = filterOption;
  }
}
