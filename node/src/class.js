module.exports = class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    latir() {
        console.log(this.nome + ' está latindo')
    }
}

