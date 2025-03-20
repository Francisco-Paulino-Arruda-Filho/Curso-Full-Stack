import { CustomerBudget } from "./CustomerBudget";
import { DirectorBudgetCustomer } from "./DirectorBudgetCustomer";
import { ManagerBudgetCustomer } from "./ManagerBudgetCustomer";
import { SellerBudgetHandler } from "./SellerBudgetHandler";

const customerBudget = new CustomerBudget(10)
const seller = new SellerBudgetHandler()

seller.setNextHandler(new ManagerBudgetCustomer())
seller.setNextHandler(new DirectorBudgetCustomer())
seller.setNextHandler(new SellerBudgetHandler())
