import { Status } from './classes/interfaces/status';
import { ShoppingCart } from './classes/ShoppingCart';
import { Messaging } from './services/Messaging';
import { Persistency } from './classes/Persistency';
import { CustumerOrder } from './classes/protocol/custumeProtocol';
import { ShoppingCartProtocol } from './classes/protocol/ShoppingCartProtocol';
import { MessagingProtocol } from './classes/protocol/MessagingProtocol';
import { PersistencyProtocol } from './classes/protocol/PersistencyProtocol';

export class Order {
  private readonly shoppingCart: ShoppingCartProtocol;
  private status: Status = 'open';
  private readonly messaging: MessagingProtocol;
  private readonly persistency: PersistencyProtocol;
  private readonly custumer: CustumerOrder;

  constructor(
    shoppingCart: ShoppingCart,
    messaging: Messaging,
    persistency: Persistency,
    custumer: CustumerOrder,
  ) {
    this.shoppingCart = shoppingCart;
    this.messaging = messaging;
    this.persistency = persistency;
    this.custumer = custumer;
  }

  checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this.persistency.saveOrder();
    this.messaging.sendMessage;
    this.status = 'finalized';
    this.shoppingCart.clearCart();
  }
}
