import { ECommerceShoppingCart } from "./ECommerceShoppingCart";

export class DefaultDiscount {
    static discount(cart: ECommerceShoppingCart): number {
        if (cart.getTotal() >= 100 && cart.getTotal() < 200) {
            return cart.getTotal() * 0.9;
        }
        else if (cart.getTotal() >= 200 && cart.getTotal() < 300) {
            return cart.getTotal() * 0.8;
        }
        else if (cart.getTotal() >= 300) {
            return cart.getTotal() * 0.7;
        }
        return cart.getTotal();
    }
}
