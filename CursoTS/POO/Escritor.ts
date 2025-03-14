import { Ferramenta } from "./Ferramenta";


// Inversão de dependência
export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor() {}

    set ferramenta(ferramenta: Ferramenta) {
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta;
    }

    escrever(): void {
        if (this._ferramenta === null) {
            console.log('Não é possível escrever sem uma ferramenta');
            return;
        }

        this._ferramenta.escrever();
    }
}

const escritor = new Escritor();
const caneta = new Ferramenta();
const maquinaEscrever = new Ferramenta();

escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquinaEscrever;
escritor.escrever();
