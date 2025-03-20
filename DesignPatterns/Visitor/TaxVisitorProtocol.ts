export interface TaxVisitorProtocol {
  visitAlcoholicDrinks(price: number): number;
  visitFood(price: number): number;
  visitCigarette(price: number): number;
}
