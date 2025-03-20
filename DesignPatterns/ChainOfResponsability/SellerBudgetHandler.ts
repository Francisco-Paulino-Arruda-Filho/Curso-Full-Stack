import { BaseBudgetCustomer } from "./BaseBudgetCustomer";
import { CustomerBudget } from "./CustomerBudget";

export class SellerBudgetHandler extends BaseBudgetCustomer {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.getValue() <= 500) {
      budget.approve();
    }
    return super.handle(budget);
  }
}
