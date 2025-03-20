import { IndividualCustomerVehicleFactory } from "./Class/IndividualCustomerVehicleFactory";

const factory = new IndividualCustomerVehicleFactory();
const customer = factory.createCustomer("John Doe", 30, "123 Elm St.");
const vehicle = factory.createVehicle("Ford", 2019, customer);

vehicle.drive();

