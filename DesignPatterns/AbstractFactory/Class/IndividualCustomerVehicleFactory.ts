import { Customer } from "../interfaces/Customer";
import { CustomerVehicleFactory } from "../interfaces/CustomerVehicleFactory";
import { IndividualCustomer } from "./IndividualCustomer";
import { IndividualVehicle } from "./IndividualVehicle";

export class IndividualCustomerVehicleFactory implements CustomerVehicleFactory {
    createVehicle(name: string, year: number, customer: Customer) {
        return new IndividualVehicle(name, year, customer);
    }
    createCustomer(name: string, age: number, address: string) {
        return new IndividualCustomer(name, age, address);
    }
}
