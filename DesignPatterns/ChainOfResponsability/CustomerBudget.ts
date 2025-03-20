export class CustomerBudget {
  private approved: boolean = false;

  constructor(private value: number) {}

  public getValue(): number {
    return this.value;
  }

  public approve(): void {
    this.approved = true;
  }
}
