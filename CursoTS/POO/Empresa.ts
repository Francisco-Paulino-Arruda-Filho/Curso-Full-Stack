import { Colaborador } from "./Colaborador";

export class Empresa {
    private nome: string;
    private telefone: string;
    private cnpj: string;
    private colaboradores: Colaborador[] = [];

    constructor(nome: string, telefone: string, cnpj: string, colaboradores: Colaborador[] = []) {
        this.nome = nome;
        this.telefone = telefone;
        this.cnpj = cnpj;
        this.colaboradores = colaboradores;
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

    getCnpj(): string {
        return this.cnpj;
    }

    setCnpj(cnpj: string): void {
        this.cnpj = cnpj;
    }

    getColaboradores(): Colaborador[] {
        return this.colaboradores;
    }

    setColaboradores(colaboradores: Colaborador[]): void {
        this.colaboradores = colaboradores;
    }

    addColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    removeColaborador(cpf: string): void {
        this.colaboradores = this.colaboradores.filter(colaborador => colaborador.getCpf() !== cpf);
    }
}

const empresa = new Empresa('Empresa 1', '123456789', '123456789');
console.log(empresa);
