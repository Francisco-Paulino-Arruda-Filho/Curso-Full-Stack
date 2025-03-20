import { AbstractMeal } from "./AbstractMeal";

export class Rice extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Rice\n'
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
      return 2
    }
}

export class Meal extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Rice\n'
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
      return 10
    }
}

export class Beans extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Beans\n'
    }
    public addSide(): void {
        this.meal += 'Rice\n'
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

export class Water extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Water\n'
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
      return 1
    }
}

export class Orange extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Orange\n'
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
      return 3
    }
}

export class Meat extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Meat\n'
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
      return 8
    }
}

export class Chicken extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Chicken\n'
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

    getPrice(): number {
        return 10
    }
}

export class Beverage extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Beverage\n'
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

    getPrice(): number {
        return 5
    }
}

export class Dessert extends AbstractMeal {
    private meal: string = ''
    public addMainCourse(): void {
        this.meal += 'Dessert\n'
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
        return 3
    }
}
