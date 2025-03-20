import { AbstractMeal } from "./AbstractMeal"

export class Salad extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Salad\n'
    }
    public addSide(): void {
        this.meal += 'Beans\n'
    }
    public addDrink(): void {
        this.meal += 'Water\n'
    }
    public addDessert(): void {
        this.meal += 'Orange\n'
    }
    public getMeal(): string {
        return this.meal
    }
    public getPrice(): number {
      return 5
    }
}
