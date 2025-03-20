import { Customer } from "../interfaces/Customer";
import { Vehicle } from "../interfaces/Vehicle";

export class EnterpriseVehicle implements Vehicle {
  name: string;
  year: number;
  customer: Customer;

  constructor(name: string, year: number, customer: Customer) {
    this.name = name;
    this.year = year;
    this.customer = customer
  }

  drive(): void {
    console.log('Driving an enterprise car');
  }
}
