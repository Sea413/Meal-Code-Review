import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <div>
      <label>Food Name: {{food.name}} </label>
    </div>
  `
})
export class FoodComponent {
  public food: Food;
}
