import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector:'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h3.Create Food:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addFood(newName, newDescription, newCalories)">Add</button>
  </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(name:HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement)
    var tempFood = new Food(name.value, description.value, parseInt(calories.value),0)
    this.onSubmitnewFood.emit(tempFood);
    name.value ="";
    description.value="";
    calories.value="";
  }
}
