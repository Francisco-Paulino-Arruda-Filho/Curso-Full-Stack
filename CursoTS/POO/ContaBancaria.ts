
export class ContaBancaria {
    private saldo: number = 0;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    getSaldo(): number {
        return this.saldo;
    }

    setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente');
            return;
        }

        this.saldo -= valor;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }
}
