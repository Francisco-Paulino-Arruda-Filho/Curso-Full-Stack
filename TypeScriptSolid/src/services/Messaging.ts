import { MessagingProtocol } from '../classes/protocol/MessagingProtocol';

export class Messaging implements MessagingProtocol {
  sendMessage(): void {
    console.log('Mensagem enviada');
  }
}
