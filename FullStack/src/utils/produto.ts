class Produto {
    private _nome: string;
    private _preco: number;
    private _estoque: number;

    constructor(nome: string, preco: number, estoque: number) {
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
    }

    get nome() {
        return this._nome;
    }

    set nome(valor: string) {
        this._nome = valor;
    }

    get preco() {
        return this._preco;
    }

    set preco(valor: number) {
        this._preco = valor;
    }

    get estoque() {
        return this._estoque;
    }

    set estoque(valor: number) {
        this._estoque = valor;
    }

    aumento(valor: number) {
        this._preco =+ valor;
    }

    subtracao(valor: number) {
        this._preco -= valor
    }
}

export default Produto;
