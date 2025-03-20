import { MainDishBuilder } from "./MainDishBuilder";
import { MealBox } from "./MealBox";
import { Meat } from "./Meals";
import { Water } from "./Meals";
import { Orange } from "./Meals";

const meat = new Meat();
const water = new Water();
const orange = new Orange();
const meal = new MealBox();
meal.add(meat, water, orange);
console.log(meal.getPrice());

const mealDishBuilder = new MainDishBuilder();
const mealBox = mealDishBuilder.makeMeal().getMeal();
console.log(mealBox.getPrice());
