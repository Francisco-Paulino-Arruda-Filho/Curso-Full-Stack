function produto(nome: string, preco: number) {
    this.nome = nome
    this.preco = preco
}

produto.prototype.aumento = function(valor: number) {
    this.preco += valor
}

produto.prototype.desconto = function(valor: number) {
    this.preco -= valor
}

function Camiseta(preco: number, cor: string, nome: string) {
    produto.call(this, nome, preco)
}

Camiseta.prototype = Object.create(produto.prototype)
Camiseta.prototype.constructor = Camiseta

export { Camiseta, produto } 