import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div>
    <label>Food Name: {{food.name}}, </label>
    <label> Food Description: {{food.description}}, </label>
    <label>Calory Count: {{food.calories}} </label>
  </div>
  `
})
export class FoodComponent {
  public food: Food;
}
