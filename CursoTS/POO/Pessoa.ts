
export class Pessoa {
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

export class PessoaFisica extends Pessoa {
    private rg: string;

    constructor(nome: string, telefone: string, cpf: string, rg: string) {
        super(nome, telefone, cpf);
        this.rg = rg;
    }

    getRg(): string {
        return this.rg;
    }

    setRg(rg: string): void {
        this.rg = rg;
    }
}

export class PessoaJuridica extends Pessoa {
    private cnpj: string;

    constructor(nome: string, telefone: string, cpf: string, cnpj: string) {
        super(nome, telefone, cpf);
        this.cnpj = cnpj;
    }

    getCnpj(): string {
        return this.cnpj;
    }

    setCnpj(cnpj: string): void {
        this.cnpj = cnpj;
    }
}
