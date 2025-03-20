import { Mediator } from "./Mediator"

export type SellerProduct = { id: string, name: string, price: number }

export class Seller {
    private products: SellerProduct[] = []
    private mediator: Mediator

    constructor(products: SellerProduct[], mediator: Mediator) {
      this.products = products
      this.mediator = mediator
    }

    showProducts() {
      this.products.forEach(product => {
        console.log(product.id, product.name, product.price)
      })
    }

    setMediator(mediator: Mediator) {
      this.mediator = mediator
    }

    getMediator() {
      return this.mediator
    }

    addProduct(product: SellerProduct) {
      this.products.push(product)
    }

    removeProduct(productId: string) {
      this.products = this.products.filter(product => product.id !== productId)
    }

    sellProduct(productId: string) {
      const product = this.products.find(product => product.id === productId)
      if (product) {
        console.log('Product sold:', product.name)
        this.removeProduct(productId)
      }
    }
}
