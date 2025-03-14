import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
    private juros: number;

    constructor(saldo: number, juros: number) {
        super(saldo);
        this.juros = juros;
    }

    getJuros(): number {
        return this.juros;
    }

    setJuros(juros: number): void {
        this.juros = juros;
    }

    render(): void {
        this.depositar(this.getSaldo() * this.juros);
    }
}
