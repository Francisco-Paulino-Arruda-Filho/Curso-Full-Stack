export abstract class Discount {
  protected discount = 0;

  abstract calculate(price: number): number;
}

export class FiftyPercentDiscount extends Discount {
  constructor() {
    super();
    this.discount = 0.5;
  }
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  constructor() {
    super();
    this.discount = 0.1;
  }
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
