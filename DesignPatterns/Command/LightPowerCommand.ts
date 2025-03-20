import { SmartHouseCommand } from "./SmartHouseCommand";
import { SmartHouseLight } from "./SmartHouseLight";

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute(): void {
    this.light.turnOn()
  }

  undo(): void {
    this.light.turnOff()
  }

}
