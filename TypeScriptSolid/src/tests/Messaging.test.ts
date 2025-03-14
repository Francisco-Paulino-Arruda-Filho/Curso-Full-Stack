import { Messaging } from '../services/Messaging';

describe('Messaging', () => {
  test('Deve exibir "Mensagem enviada" ao chamar sendMessage', () => {
    console.log = jest.fn(); // Espionando o console.log

    const messaging = new Messaging();
    messaging.sendMessage();

    expect(console.log).toHaveBeenCalledWith('Mensagem enviada');
  });
});
