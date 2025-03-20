import { Customer } from "../interfaces/Customer";

export class IndividualCustomer implements Customer {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getCustomerName(): string {
        return this.name;
    }

    getCustomerAge(): number {
        return this.age;
    }

    getCustomerAddress(): string {
        return this.address;
    }
}
