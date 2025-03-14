import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from '../classes/Discount';

describe('Discount', () => {
  test('FiftyPercentDiscount deve aplicar 50% de desconto', () => {
    const discount = new FiftyPercentDiscount();
    expect(discount.calculate(100)).toBe(50);
    expect(discount.calculate(200)).toBe(100);
  });

  test('TenPercentDiscount deve aplicar 10% de desconto', () => {
    const discount = new TenPercentDiscount();
    expect(discount.calculate(100)).toBe(90);
    expect(discount.calculate(50)).toBe(45);
  });

  test('NoDiscount não deve alterar o preço', () => {
    const discount = new NoDiscount();
    expect(discount.calculate(100)).toBe(100);
    expect(discount.calculate(50)).toBe(50);
  });
});
