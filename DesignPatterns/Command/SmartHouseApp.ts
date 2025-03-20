import { SmartHouseCommand } from "./SmartHouseCommand";

export class SmartHouseApp {
    private commands: { [k: string]: SmartHouseCommand } = {};

    addCommand(key: string, command: SmartHouseCommand): void {
        this.commands[key] = command;
    }

    executeCommand(key: string): void {
        this.commands[key].execute();
    }
}
