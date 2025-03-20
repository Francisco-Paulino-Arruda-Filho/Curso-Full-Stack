export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(name: string) {
    console.log(`Light ${name} created`);
  }

  turnOn(): void {
    this.isOn = true;
    console.log("Light is on");
  }

  turnOff(): void {
    this.isOn = false;
    console.log("Light is off");
  }

  increaseIntensity(): void {
    if (this.intensity < 100) {
      this.intensity += 10;
      console.log(`Light intensity increased to ${this.intensity}`);
    }
  }

  getPower(): string {
    if(this.isOn) {
      return 'On';
    }
    return 'Off';
  }

  decreaseIntensity(): void {
    if (this.intensity > 0) {
      this.intensity -= 10;
      console.log(`Light intensity decreased to ${this.intensity}`);
    }
  }
}
