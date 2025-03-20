import { Seller } from "./Seller"

export class Mediator {
    private sellers: Seller[] = []

    addSeller(seller: Seller) {
        this.sellers.push(seller)
    }

    removeSeller(seller: Seller) {
        this.sellers = this.sellers.filter(s => s !== seller)
    }

    buyProduct(productId: string) {
        this.sellers.forEach(seller => {
            seller.removeProduct(productId)
        })
    }

    sellProduct(productId: string) {
        this.sellers.forEach(seller => {
            seller.sellProduct(productId)
        })
    }
}
