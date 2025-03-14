import { PersistencyProtocol } from './protocol/PersistencyProtocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Order saved');
  }
}
