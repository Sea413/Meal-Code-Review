import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import {HeavyPipe} from './heavy.pipe';

@Component({
  selector: 'edit',
  inputs: ['food','foodList'],
  template: `
  <div class="food-form">
    <h4>Name: {{ food.name }},</h4>
    <h4>Description: {{ food.description }},</h4>
    <h4>Calories: {{ food.calories }}</h4>

    <h3>Edit Name:</h3>
    <input [(ngModel)]="food.name" class="col-sm-6 input-lg food-form" />

    <h3>Edit Description: </h3>
    <input [(ngModel)]="food.description" class="col-sm-6 input-lg food-form" />

    <h3>Edit Calories: </h3>
    <input [(ngModel)]="food.calories" class="col-sm-6 input-lg food-form" />
    <br>
    <button (click)="changeStatus(food.calories)"> Confirm Edit</button>
    </div>
  `
})
export class EditFoodComponent {
  public food: Food;
  public foodList: Food[];
changeStatus(setCalories: number): void{
  this.food.calories =setCalories;
    if(setCalories > 300){
      this.food.heavy = true;
    }
  }
}
