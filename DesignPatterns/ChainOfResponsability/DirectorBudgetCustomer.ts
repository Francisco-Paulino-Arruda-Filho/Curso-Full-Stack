import { BaseBudgetCustomer } from "./BaseBudgetCustomer";
import { CustomerBudget } from "./CustomerBudget";

export class DirectorBudgetCustomer extends BaseBudgetCustomer {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('O CEO trata qualquer orçamento');
    budget.approve();
    return budget
  }
}
