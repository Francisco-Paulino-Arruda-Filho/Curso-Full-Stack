import { MealBox } from './MealBox';
import { Rice, Beans, Meat, Beverage, Dessert } from './Meals';

export class MealBuilder {
  public makeMeal1(): MealBox {
    const mealBox = new MealBox();
    mealBox.add(
      new Rice(),
      new Beans(),
      new Meat(),
      new Beverage(),
      new Dessert()
    );
    return mealBox;
  }

  public makeMeal2(): MealBox {
    const mealBox = new MealBox();
    mealBox.add(
      new Rice(),
      new Beans(),
      new Meat(),
      new Beverage(),
      new Dessert()
    );
    return mealBox;
  }
}
