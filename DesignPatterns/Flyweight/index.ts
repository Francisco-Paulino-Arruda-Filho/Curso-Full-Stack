import { deliveryContext } from "./DeliveryContext";
import { DeliveryFactory } from "./DeliveryFactory";

const factory = new DeliveryFactory()

deliveryContext(factory, 'John Doe', '123-456-7890', '123 Elm St', 'Springfield');

console.log(factory.getLocations());
