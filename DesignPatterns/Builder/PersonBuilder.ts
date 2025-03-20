import { Person } from "./Person"

export class PersonBuilder {
    private name: string = ''
    private age: number = 0
    private weight: number = 0
    private height: number = 0

    public withName(name: string): PersonBuilder {
        this.name = name
        return this
    }

    public withAge(age: number): PersonBuilder {
        this.age = age
        return this
    }

    public withWeight(weight: number): PersonBuilder {
        this.weight = weight
        return this
    }

    public withHeight(height: number): PersonBuilder {
        this.height = height
        return this
    }

    public build(): Person {
        return new Person(this)
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public getWeight(): number {
        return this.weight
    }

    public getHeight(): number {
        return this.height
    }
}
