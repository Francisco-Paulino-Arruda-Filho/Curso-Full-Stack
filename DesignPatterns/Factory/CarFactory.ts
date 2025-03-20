import { BMW, Audi, Ferrari, Pegout, Tesla } from "./Cars";

export class CarFactory {
  static createCar(type: string) {
    switch (type) {
      case "BMW":
        return new BMW();
      case "Audi":
        return new Audi();
      case "Ferrari":
        return new Ferrari();
      case "Pegout":
        return new Pegout();
      case "Tesla":
        return new Tesla();
      default:
        throw new Error("Unknown car type");
    }
  }
}
