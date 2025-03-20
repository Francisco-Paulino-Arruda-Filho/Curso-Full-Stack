import { MainDishBuilder } from "../Builder/MainDishBuilder";
import { MealBox } from "../Builder/MealBox";
import { MealBuilderProtocol } from "../Builder/MealBuilderProtocol";
import { Meat, Water, Orange } from "../Builder/Meals";


export class BuilderFacade {
  private builder: MealBuilderProtocol

  constructor(builder: MealBuilderProtocol) {
    this.builder = builder;
  }

  build(): void {
    this.builder.makeBeverage();
    this.builder.makeDessert();
  }

  static execute(): void {
    const meat = new Meat();
    const water = new Water();
    const orange = new Orange();
    const meal = new MealBox();
    meal.add(meat, water, orange);
    console.log(meal.getPrice());

    const mealDishBuilder = new MainDishBuilder();
    const mealBox = mealDishBuilder.makeMeal().getMeal();
    console.log(mealBox.getPrice());
  }
}

// Para executar diretamente
BuilderFacade.execute();
