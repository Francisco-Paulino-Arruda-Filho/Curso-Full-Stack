import { CustomerBudget } from "./CustomerBudget";

export class BaseBudgetCustomer {
  protected nextHandler: BaseBudgetCustomer | undefined;

  setNextHandler(nextHandler: BaseBudgetCustomer): BaseBudgetCustomer {
    this.nextHandler = nextHandler;
    return nextHandler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) {
      return this.nextHandler.handle(budget);
    }
    return budget;
  }
}
