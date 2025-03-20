import { Customer } from "../interfaces/Customer";
import { CustomerVehicleFactory } from "../interfaces/CustomerVehicleFactory";
import { EnterpriseCustomer } from "./EnterpriseCustomer";
import { EnterpriseVehicle } from "./EnterpriseVehicle";

export class EnterpriseCustomerVehicleFactory implements CustomerVehicleFactory {
    createVehicle(name: string, age: number, customer: Customer) {
      return new EnterpriseVehicle(name, age, customer);
    }
    createCustomer(name: string, age: number, address: string) {
      return new EnterpriseCustomer(name, age, address);
    }
}
