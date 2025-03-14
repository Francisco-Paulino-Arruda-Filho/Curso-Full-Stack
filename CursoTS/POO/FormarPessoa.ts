type nome = string;
type sobreNome = string;
type idade = number;

type TipoPessoa = {
    nome: nome,
    sobreNome: sobreNome,
    idade: idade
}

export class Pessoa {
    private nome: nome;
    private sobreNome: sobreNome;
    private idade: idade;

    constructor(nome: nome, sobreNome: sobreNome, idade: idade) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.idade = idade;
    }

    getNome(): nome {
        return this.nome;
    }

    setNome(nome: nome): void {
        this.nome = nome;
    }

    getSobreNome(): sobreNome {
        return this.sobreNome;
    }

    setSobreNome(sobreNome: sobreNome): void {
        this.sobreNome = sobreNome;
    }

    getIdade(): idade {
        return this.idade;
    }

    setIdade(idade: idade): void {
        this.idade = idade;
    }
}
