/*export interface CustumeProtocol {
  name: string;
  lastName: string;
}*/

export interface CustumerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol extends CustumerOrder {
  name: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol extends CustumerOrder {
  name: string;
  lastName: string;
  cnpj: string;
}
