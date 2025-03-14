import { CardItem } from './interfaces/CardItem';
import { Status } from './interfaces/status';
import { ShoppingCartProtocol } from './protocol/ShoppingCartProtocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly products: CardItem[] = [];
  private status: Status = 'open';

  constructor(products?: CardItem[]) {
    if (products) {
      this.products = products;
    }
  }

  addProduct(...products: CardItem[]): void {
    if (this.status !== 'open') {
      throw new Error('Cannot add products when cart is closed or finalized.');
    }
    this.products.push(...products);
  }

  getProductCount(): number {
    return this.products.length;
  }

  total(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getProducts(): CardItem[] {
    return this.products;
  }

  removeProduct(product: CardItem): void {
    if (this.status !== 'open') {
      throw new Error(
        'Cannot remove products when cart is closed or finalized.',
      );
    }
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getStatus(): Status {
    return this.status;
  }

  clearCart(): void {
    if (this.status !== 'open') {
      throw new Error('Cannot clear cart when it is closed or finalized.');
    }
    this.products.length = 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }
    this.status = 'closed'; // Alteração necessária
    console.log('Checkout complete. Cart is now closed.');
  }

  finalizeOrder(): void {
    if (this.status !== 'closed') {
      throw new Error('Cannot finalize order unless cart is closed.');
    }
    this.status = 'finalized';
    console.log('Order finalized.');
  }

  isEmpty(): boolean {
    return this.products.length === 0;
  }
}
