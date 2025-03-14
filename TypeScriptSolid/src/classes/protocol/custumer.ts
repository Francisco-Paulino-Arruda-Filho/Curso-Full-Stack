import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './custumeProtocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  name: string;
  lastName: string;
  cpf: string;

  constructor(name: string, lastName: string, cpf: string) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.name + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  lastName: string;
  cnpj: string;

  constructor(name: string, lastName: string, cnpj: string) {
    this.name = name;
    this.lastName = lastName;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
// Compare this snippet from TypeScriptSolid/src/classes/interfaces/CardItem.ts:
