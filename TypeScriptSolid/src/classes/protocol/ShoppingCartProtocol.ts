import { CardItem } from '../interfaces/CardItem';

interface ShoppingCartProtocol {
  addProduct(product: CardItem): void;
  removeProduct(product: CardItem): void;
  checkout(): void;
  total(): number;
  isEmpty(): boolean;
  clearCart(): void;
  getProductCount(): number;
  getProducts(): CardItem[];
  getStatus(): string;
}

export { ShoppingCartProtocol };
