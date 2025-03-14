import { CardItem } from './classes/interfaces/CardItem';
import { ShoppingCart } from './classes/ShoppingCart';
import { Order } from './Order';
import { Messaging } from './services/Messaging';
import { Discount, FiftyPercentDiscount } from './classes/Discount';
import { Persistency } from './classes/Persistency';
import { NoDiscount } from './classes/Discount';
import { TenPercentDiscount } from './classes/Discount';
import { IndividualCustomer } from './classes/protocol/custumer';
/*
Interface Segregation Principle
- Os clientes não devem ser forçados a depender de interfaces que não utilizam.
- Uma classe não deve ser forçada a implementar interfaces e métodos que não serão utilizados.
*/
/**
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 */

const persistency = new Persistency();
const shoppingCart = new ShoppingCart([]);
const messaging = new Messaging();
const customer = new IndividualCustomer('Luiz', 'Otávio', '111.111.111-11');
const order = new Order(shoppingCart, messaging, persistency, customer);
let discount: Discount = new FiftyPercentDiscount();

const product1: CardItem = { name: 'T-shirt', price: 49.9 };
const product2: CardItem = { name: 'Mug', price: 1.9 };
const product3: CardItem = { name: 'Pen', price: 0.5 };

shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2, product3);
console.log(shoppingCart.total());
console.log(shoppingCart.getProductCount());
shoppingCart.removeProduct(product2);
console.log(shoppingCart.total());
console.log(shoppingCart.getProductCount());
console.log(discount.calculate(shoppingCart.total()));

// Substituição de Liskov
discount = new TenPercentDiscount();
console.log(discount.calculate(shoppingCart.total()));
discount = new NoDiscount();
console.log(discount.calculate(shoppingCart.total()));

order.checkout();

/**
 * Vantagens:
 * - Código mais limpo, organizado e coeso.
 * - Facilita a manutenção e evolução do código.
 * - Evita a duplicação de código.
 * - Facilita a implementação de testes automatizados.
 * - Facilita a implementação de novas funcionalidades.
 * - Facilita a implementação de novos serviços.
 * - Facilita a implementação de novas regras de negócio.
 * - Facilita a implementação de novas formas de pagamento.
 * - Facilita a implementação de novos tipos de desconto.
 * - Facilita a implementação de novos tipos de mensagens.
 * - Facilita a implementação de novos tipos de persistência.
 *Desvantagens:
 * - Código mais complexo.
 * - Curva de aprendizado.
 * - Dificuldade de implementação.
 * - Dificuldade de manutenção.
 * - Dificuldade de evolução.
 * - Dificuldade de escalabilidade.
 * - Dificuldade de testes.
 * - Dificuldade de depuração.
 * DRY - Don't Repeat Yourself
 * KISS - Keep It Simple, Stupid
 * YAGNI - You Aren't Gonna Need It
 * SOLID - Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, Dependency Inversion Principle
 * GRASP - General Responsibility Assignment Software Patterns
 * DIP - Dependency Inversion Principle
 * ISP - Interface Segregation Principle
 * LSP - Liskov Substitution Principle
 * OCP - Open/Closed Principle
 * SRP - Single Responsibility Principle
 */
