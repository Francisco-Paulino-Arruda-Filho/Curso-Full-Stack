export interface ShoppingOrderState {
  getName(): string;
  approvePayment(): void;
  rejectPayment(): void;
  shipOrder(): void;
  waitPayment(): void;
}
