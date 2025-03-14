import {
  IndividualCustomer,
  EnterpriseCustomer,
} from '../classes/protocol/custumer';

describe('IndividualCustomer', () => {
  test('Deve criar um cliente individual corretamente', () => {
    const customer = new IndividualCustomer('Luiz', 'Otávio', '111.111.111-11');

    expect(customer.name).toBe('Luiz');
    expect(customer.lastName).toBe('Otávio');
    expect(customer.cpf).toBe('111.111.111-11');
    expect(customer.getName()).toBe('Luiz Otávio');
    expect(customer.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  test('Deve criar um cliente empresarial corretamente', () => {
    const enterprise = new EnterpriseCustomer(
      'Empresa',
      'XYZ',
      '11.111.111/0001-11',
    );

    expect(enterprise.name).toBe('Empresa');
    expect(enterprise.lastName).toBe('XYZ');
    expect(enterprise.cnpj).toBe('11.111.111/0001-11');
    expect(enterprise.getName()).toBe('Empresa XYZ');
    expect(enterprise.getIDN()).toBe('11.111.111/0001-11');
  });
});
