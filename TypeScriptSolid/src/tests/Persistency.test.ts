import { Persistency } from '../classes/Persistency';

describe('Persistency', () => {
  test('Deve exibir "Order saved" ao chamar saveOrder', () => {
    console.log = jest.fn(); // Espionando o console.log

    const persistency = new Persistency();
    persistency.saveOrder();

    expect(console.log).toHaveBeenCalledWith('Order saved');
  });
  test('Deve exibir "Order saved" ao chamar saveOrder', () => {
    const consoleSpy = jest.spyOn(console, 'log'); // Espionando o console.log

    const persistency = new Persistency();
    persistency.saveOrder();

    expect(consoleSpy).toHaveBeenCalledWith('Order saved');

    consoleSpy.mockRestore(); // Restaurando o console.log original
  });
});
