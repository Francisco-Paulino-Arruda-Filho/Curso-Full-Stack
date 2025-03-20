import { Mediator } from "./Mediator"

export class Buyer {
    private mediator: Mediator

    constructor(mediator: Mediator) {
        this.mediator = mediator
    }

    buyProduct(productId: string) {
        this.mediator.buyProduct(productId)
    }
}
