import { MealBox } from "./MealBox";
import { Rice, Beans } from "./Meals";
import { Salad } from "./Salad";

export class VeganDishBuilder {
    private meal: MealBox;
    constructor() {
        this.meal = new MealBox();
    }
    makeMeal() {
        this.meal.add(new Rice(), new Beans(), new Salad());
        return this;
    }
    getMeal() {
        return this.meal;
    }
}
