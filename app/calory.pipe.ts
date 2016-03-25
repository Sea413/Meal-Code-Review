import {Pipe, PipeTransform} from 'angular2core';
import {Food} from './food.model';

@Pipe({
  name:"heavy"
  pure: false
})
export class HeavyPipe implements PipeTransform {
  transform(input Food[], args){
    var desriedHeavyState = args[0];
    if(desiredFoodState === "heavy") {
      return input.filter((food) => {
        return food.heavy;
      });
    } else if (desiredHeavyState === "notHeavy") {
        return input.filter ((food) => {
          return !food.heavy;
        });
      } else {
        return input;
      }
    }
  }
}
