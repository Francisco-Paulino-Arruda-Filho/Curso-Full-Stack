class Pessoa {
    nome: string;
    sobrenome: string;
    nomeCompleto: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = this.nome + ' ' + this.sobrenome;
    }

    comer(comida: string): void {
        console.log(`${this.nome} está comendo ${comida}.`);
    }

    falar(mensagem: string): void {
        console.log(`${this.nome} diz: ${mensagem}`);
    }

    // Getter para o nome
    get getNome(): string {
        return this.nome;
    }

    // Setter para o nome
    set setNome(novoNome: string) {
        this.nome = novoNome;
    }

    // Getter para o sobrenome
    get getSobrenome(): string {
        return this.sobrenome;
    }

    get getNomeCompleto(): string {
        return this.nomeCompleto
    }

    // Setter para o sobrenome
    set setSobrenome(novoSobrenome: string) {
        this.sobrenome = novoSobrenome;
    }
}

export default Pessoa
