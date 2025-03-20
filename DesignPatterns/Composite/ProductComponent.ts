abstract class ProductComponent {
  abstract getProductPrice(): number;
  add(product: ProductComponent): void { }
  remove(product: ProductComponent): void { }
}

export class ProductLeaf extends ProductComponent {
  private name: string
  private price: number;
  constructor(name: string, price: number) {
    super();
    this.name = name
    this.price = price
  }
  getProductPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private products: ProductComponent[] = [];
  constructor() {
    super()
  }
  getProductPrice(): number {
    return this.products.reduce((acc, product) => acc + product.getProductPrice(), 0);
  }
  add(product: ProductComponent): void {
    this.products.push(product);
  }
  remove(product: ProductComponent): void {
    this.products = this.products.filter(p => p !== product);
  }
}

const tShirt = new ProductLeaf('t-shirt', 20)
const pen = new ProductLeaf('pen', 10)
const productBox = new ProductComposite()
const smartphone = new ProductLeaf('smartphone', 400)
productBox.add(tShirt)
productBox.add(pen)
productBox.add(smartphone)

console.log(productBox)

