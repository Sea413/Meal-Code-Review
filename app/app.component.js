System.register(['angular2/core', './food-list.component', './food.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, food_list_component_1, food_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_list_component_1_1) {
                food_list_component_1 = food_list_component_1_1;
            },
            function (food_model_1_1) {
                food_model_1 = food_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.foods = [
                        new food_model_1.Food("California Roll", "Its a dangerous roll", 100, 0),
                        new food_model_1.Food("Bacon Waffle Muffin", "Still healthier than energy drinks", 250, 1),
                        new food_model_1.Food("Scone", "We do not actually know if this is a scone", 1000, 2),
                        new food_model_1.Food("Cheesecake", "Vegan", 2500, 3)
                    ];
                    console.log(this.foods);
                }
                AppComponent.prototype.foodWasSelected = function (clickedFood) {
                    console.log('parent', clickedFood);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [food_list_component_1.FoodListComponent],
                        template: "\n    <div class=\"container\">\n      <h1>Food List</h1>\n      <food-list\n        [foodList]=\"foods\"\n        (onFoodSelect)=\"foodWasSelected($event)\">\n      </food-list>\n    <div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map