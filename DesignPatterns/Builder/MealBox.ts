import { MealCompositeProtocol } from "./MealCompositeProtocol"

export class MealBox {
    private readonly _meals: MealCompositeProtocol[] = []

    public add(...meal: MealCompositeProtocol[]): void {
        meal.forEach(item => this._meals.push(item))
    }

    public getPrice(): number {
        return this._meals.reduce((sum, meal) => sum + meal.getPrice(), 0)
    }
}
