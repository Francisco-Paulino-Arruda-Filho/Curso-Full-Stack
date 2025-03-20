import { Customer } from "../interfaces/Customer";
import { Vehicle } from "../interfaces/Vehicle";

export class IndividualVehicle implements Vehicle {
  name: string;
  year: number;
  customer: Customer;

  constructor(name: string, year: number, customer: Customer) {
      this.name = name;
      this.year = year;
      this.customer = customer
  }

  drive() {
      console.log('Driving an individual vehicle');
  }
}
