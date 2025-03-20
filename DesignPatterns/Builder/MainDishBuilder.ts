import { MealBox } from "./MealBox";
import { Rice, Beans, Meat, Beverage, Dessert } from "./Meals";
import { MealBuilderProtocol } from "./MealBuilderProtocol";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();
  makeMeal(): this {
    const rice = new Rice();
    const beans = new Beans();
    const meat = new Meat();
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeMealBox(): this {
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert();
    this._meal.add(dessert);
    return this
  }

  makeBeverage(): this {
    const beverage = new Beverage();
    this._meal.add(beverage);
    return this;
  }
}
