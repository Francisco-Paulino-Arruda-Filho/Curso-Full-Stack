
export class Colaborador {
    private nome: string;
    private telefone: string;
    private cpf: string;

    constructor(nome: string, telefone: string, cpf: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getTelefone(): string {
        return this.telefone;
    }

    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    getCpf(): string {
        return this.cpf;
    }

    setCpf(cpf: string): void {
        this.cpf = cpf;
    }
}
