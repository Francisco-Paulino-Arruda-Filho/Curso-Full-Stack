import {
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from '../classes/Discount';
import { ShoppingCart } from '../classes/ShoppingCart';
import { CardItem } from '../classes/interfaces/CardItem';

describe('ShoppingCart', () => {
  let cart: ShoppingCart;
  const product1: CardItem = { name: 'T-shirt', price: 50 };
  const product2: CardItem = { name: 'Mug', price: 20 };
  const product3: CardItem = { name: 'Pen', price: 5 };

  beforeEach(() => {
    cart = new ShoppingCart([]);
  });

  test('Deve iniciar vazio', () => {
    expect(cart.getProductCount()).toBe(0);
    expect(cart.isEmpty()).toBe(true);
  });

  test('Deve adicionar produtos corretamente', () => {
    cart.addProduct(product1, product2);
    expect(cart.getProductCount()).toBe(2);
    expect(cart.isEmpty()).toBe(false);
  });

  test('Deve calcular o total corretamente', () => {
    cart.addProduct(product1, product2, product3);
    expect(cart.total()).toBe(75);
  });

  test('Deve remover um produto corretamente', () => {
    cart.addProduct(product1, product2);
    cart.removeProduct(product1);
    expect(cart.getProductCount()).toBe(1);
    expect(cart.total()).toBe(20);
  });

  test('Deve esvaziar o carrinho ao limpar', () => {
    cart.addProduct(product1, product2);
    cart.clearCart();
    expect(cart.getProductCount()).toBe(0);
    expect(cart.isEmpty()).toBe(true);
  });

  test('Deve marcar o carrinho como vazio ao finalizar compra', () => {
    cart.addProduct(product1, product2);
    cart.checkout();
    expect(cart.getProductCount()).toBe(0);
    expect(cart.isEmpty()).toBe(true);
  });

  test('Não deve permitir checkout com carrinho vazio', () => {
    console.log = jest.fn();
    cart.checkout();
    expect(console.log).toHaveBeenCalledWith('Your shopping cart is empty');
  });
});

describe('ShoppingCart com Discount', () => {
  const products: CardItem[] = [
    { name: 'Produto 1', price: 100 },
    { name: 'Produto 2', price: 200 },
  ];

  test('Deve aplicar 50% de desconto corretamente', () => {
    const discount = new FiftyPercentDiscount();

    const totalComDesconto = products.reduce(
      (sum, product) => sum + discount.calculate(product.price),
      0,
    );

    expect(totalComDesconto).toBe(150);
  });

  test('Deve aplicar 10% de desconto corretamente', () => {
    const discount = new TenPercentDiscount();

    const totalComDesconto = products.reduce(
      (sum, product) => sum + discount.calculate(product.price),
      0,
    );

    expect(totalComDesconto).toBe(270);
  });

  test('Não deve aplicar desconto quando NoDiscount for usado', () => {
    const discount = new NoDiscount();

    const totalSemDesconto = products.reduce(
      (sum, product) => sum + discount.calculate(product.price),
      0,
    );

    expect(totalSemDesconto).toBe(300);
  });
});

/*describe('ShoppingCart com Status', () => {
  let cart: ShoppingCart;
  const product1: CardItem = { name: 'Produto 1', price: 100 };
  const product2: CardItem = { name: 'Produto 2', price: 200 };

  beforeEach(() => {
    cart = new ShoppingCart([]);
  });

  test('Deve iniciar com status "open"', () => {
    expect(cart.getStatus()).toBe('open');
  });

  test('Deve permitir adicionar produtos enquanto o carrinho estiver "open"', () => {
    cart.addProduct(product1, product2);
    expect(cart.getProductCount()).toBe(2);
  });

  test('Deve calcular o total corretamente', () => {
    cart.addProduct(product1, product2);
    expect(cart.total()).toBe(300);
  });

  test('Deve remover um produto corretamente', () => {
    cart.addProduct(product1, product2);
    cart.removeProduct(product1);
    expect(cart.getProductCount()).toBe(1);
    expect(cart.getProducts()).not.toContain(product1);
  });

  test('Deve limpar o carrinho corretamente', () => {
    cart.addProduct(product1, product2);
    cart.clearCart();
    expect(cart.isEmpty()).toBe(true);
  });

  test('Checkout deve fechar o carrinho se houver produtos', () => {
    cart.addProduct(product1);
    cart.checkout();
    expect(cart.getStatus()).toBe('closed');
  });

  test('Checkout não deve fechar o carrinho se estiver vazio', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    cart.checkout();
    expect(cart.getStatus()).toBe('open');
    expect(consoleSpy).toHaveBeenCalledWith('Your shopping cart is empty');
    consoleSpy.mockRestore();
  });

  test('Finalizar pedido só pode ser feito quando o status for "closed"', () => {
    cart.addProduct(product1);
    cart.checkout();
    cart.finalizeOrder(); // Adicionar essa linha para mudar o status para "finalized"
    expect(cart.getStatus()).toBe('finalized');
  });

  test('Deve lançar erro ao tentar adicionar produto com carrinho fechado', () => {
    cart.addProduct(product1);
    cart.checkout();
    expect(() => cart.addProduct(product2)).toThrow(
      'Cannot add products when cart is closed or finalized.',
    );
  });

  test('Deve lançar erro ao tentar remover produto com carrinho fechado', () => {
    cart.addProduct(product1);
    cart.checkout();
    expect(() => cart.removeProduct(product1)).toThrow(
      'Cannot remove products when cart is closed or finalized.',
    );
  });

  test('Deve lançar erro ao tentar limpar carrinho fechado', () => {
    cart.addProduct(product1);
    cart.checkout();
    expect(() => cart.clearCart()).toThrow(
      'Cannot clear cart when it is closed or finalized.',
    );
  });
});*/
