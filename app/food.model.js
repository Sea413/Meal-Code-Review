System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Food;
    return {
        setters:[],
        execute: function() {
            Food = (function () {
                function Food(name, description, calories, id) {
                    this.name = name;
                    this.description = description;
                    this.calories = calories;
                    this.id = id;
                    this.heavy = false;
                    if (calories > 300) {
                        this.heavy = true;
                    }
                }
                return Food;
            }());
            exports_1("Food", Food);
        }
    }
});
//# sourceMappingURL=food.model.js.map