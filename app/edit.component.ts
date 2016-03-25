import {Component} from 'angular2/core';
import {Food} from './food.model';

@omponent({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="food-form">
      <h3>Edit Name:</h3>
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"
      <h3>Edit Description: </h3>
      <input [(ngModel)]="food.description" class="col-sm-8 input-lg food-form"
      <h3>Edit Calories: </h3>
      <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
