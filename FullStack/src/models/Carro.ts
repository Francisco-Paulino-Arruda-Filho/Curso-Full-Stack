class Carro {
    private _marca: string;
    private _modelo: string;
    private _ano: number;
    private _velocidadeAtual: number;
    private _limiteVelocidade: number;

    constructor(marca: string, modelo: string, ano: number, limiteVelocidade: number) {
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
        this._velocidadeAtual = 0; // Inicialmente o carro está parado
        this._limiteVelocidade = limiteVelocidade;
    }

    // Getters e Setters
    get marca(): string {
        return this._marca;
    }

    set marca(novaMarca: string) {
        this._marca = novaMarca;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(novoModelo: string) {
        this._modelo = novoModelo;
    }

    get ano(): number {
        return this._ano;
    }

    set ano(novoAno: number) {
        if (novoAno > 1885) {
            this._ano = novoAno;
        } else {
            console.log("Ano inválido!");
        }
    }

    get limiteVelocidade(): number {
        return this._limiteVelocidade;
    }

    set limiteVelocidade(novoLimite: number) {
        this._limiteVelocidade = novoLimite;
    }

    // Método para acelerar o carro
    acelerar(valor: number): void {
        if (this._velocidadeAtual + valor > this._limiteVelocidade) {
            this._velocidadeAtual = this._limiteVelocidade;
            console.log(`Você atingiu o limite de velocidade: ${this._limiteVelocidade} km/h`);
        } else {
            this._velocidadeAtual += valor;
            console.log(`Acelerando... Velocidade atual: ${this._velocidadeAtual} km/h`);
        }
    }

    // Método para desacelerar o carro
    desacelerar(valor: number): void {
        if (this._velocidadeAtual - valor < 0) {
            this._velocidadeAtual = 0;
            console.log("O carro parou.");
        } else {
            this._velocidadeAtual -= valor;
            console.log(`Desacelerando... Velocidade atual: ${this._velocidadeAtual} km/h`);
        }
    }

    // Método para mostrar detalhes do carro
    mostrarDetalhes(): void {
        console.log(`Carro: ${this._marca} ${this._modelo}, Ano: ${this._ano}, Limite de Velocidade: ${this._limiteVelocidade} km/h`);
    }

    // Método para ligar o carro
    ligar(): void {
        console.log(`${this._marca} ${this._modelo} está ligado!`);
    }

    // Método para desligar o carro
    desligar(): void {
        console.log(`${this._marca} ${this._modelo} está desligado!`);
    }
}

export default Carro