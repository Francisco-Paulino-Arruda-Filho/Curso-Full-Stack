namespace meuNamespace {
    export const nomeDoNamespace = 'Nome do namespace';
    export const nome = 'Nome do namespace';

    export class PessoaDoNamespace {
        constructor(public nome: string) {
            this.nome = nome;
        }
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Francisco');

    export namespace outroNamespace {
        export const nome = 'Nome do outro namespace';
    }
}
