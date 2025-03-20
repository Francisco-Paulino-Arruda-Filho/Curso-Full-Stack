import { PersonBuilder } from "./PersonBuilder";

export class Person {
    private name: string;
    private age: number;
    private weight: number;
    private height: number

    constructor(builder: PersonBuilder) {
        this.name = builder.getName()
        this.age = builder.getAge()
        this.weight = builder.getWeight()
        this.height = builder.getHeight()
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

    public toString(): string {
        return `Name: ${this.name}, Age: ${this.age}, Weight: ${this.weight}, Height: ${this.height}`
    }

    public static builder(): PersonBuilder {
        return new PersonBuilder()
    }

}
