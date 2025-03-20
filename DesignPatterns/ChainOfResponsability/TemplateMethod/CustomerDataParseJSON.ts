import { promises } from "fs";
import { CustomerData } from "./CustomerData";
import { CustomerDataParse } from "./CustomerDataParse";

export class CustomerDataParserJSON extends CustomerDataParse {
  protected async parseDate(): Promise<CustomerData[]> {
    const rawData = await promises.readFile(this.filePath);

    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({ name, age, cpf });
    }

    return customerData;
  }

  hook(): void {
    console.log('O hook foi executado.');
  }
}
