class DispositivoEletronico {
    private _nome: string;
    private _marca: string;
    private _statusLigado: boolean;

    constructor(nome: string, marca: string) {
        this._nome = nome;
        this._marca = marca;
        this._statusLigado = false; // Inicialmente desligado
    }

    // Getters e Setters
    get nome(): string {
        return this._nome;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(novaMarca: string) {
        this._marca = novaMarca;
    }

    // Método para ligar o dispositivo
    ligar(): void {
        if (!this._statusLigado) {
            this._statusLigado = true;
            console.log(`${this._nome} está ligado.`);
        } else {
            console.log(`${this._nome} já está ligado.`);
        }
    }

    // Método para desligar o dispositivo
    desligar(): void {
        if (this._statusLigado) {
            this._statusLigado = false;
            console.log(`${this._nome} está desligado.`);
        } else {
            console.log(`${this._nome} já está desligado.`);
        }
    }

    // Método para verificar o status
    verificarStatus(): void {
        if (this._statusLigado) {
            console.log(`${this._nome} está ligado.`);
        } else {
            console.log(`${this._nome} está desligado.`);
        }
    }
}

export default DispositivoEletronico