import { DeliveryFlyweight } from "./DeliveryFlyweight";
import { DeliveryLocation } from "./DeliveryLocations";
import { DeliveryLocationData, DeliveryLocationDictionary } from "./DeliveryTypes";

export class DeliveryFactory {
  private readonly locations: DeliveryLocationDictionary = {};

  makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
    const key = this.createId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }


  createId(data: DeliveryLocationData): string {
    return Object.keys(data).map((key) => data[key as keyof DeliveryLocationData].replace(/\s+/g, '')).join('')
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
