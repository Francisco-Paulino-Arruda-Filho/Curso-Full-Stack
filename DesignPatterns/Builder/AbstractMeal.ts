import { MealCompositeProtocol } from "./MealCompositeProtocol"

export abstract class AbstractMeal implements MealCompositeProtocol {
    public abstract addMainCourse(): void
    public abstract addSide(): void
    public abstract addDrink(): void
    public abstract addDessert(): void
    public abstract getPrice(): number
    public abstract getMeal(): string
}
