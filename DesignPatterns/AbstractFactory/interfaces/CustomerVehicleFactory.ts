import { Customer } from "./Customer";
import { Vehicle } from "./Vehicle";

export interface CustomerVehicleFactory {
    createVehicle(name: string, year: number, customer: Customer): Vehicle;
    createCustomer(name: string, age: number, address: string): Customer;
}
