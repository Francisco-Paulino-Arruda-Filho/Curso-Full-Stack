import { DeliveryFlyweight } from "./DeliveryFlyweight";
import { DeliveryLocationData } from "./DeliveryTypes";

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
    console.log('Número:', number);
    console.log('###');
  }
}
// Compare this snippet from DesignPatterns/Flyweight/ConcreteDeliveryFlyweight.ts:
