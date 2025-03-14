const objeto1: Record<string, string | number> = {
    nome: 'Francisco',
    sobrenome: 'Paulino Arruda Filho',
    idade: 20
}

type PessoaProtocol2 = {
    nome: string;
    sobrenome: string,
    idade: number;
}

type PessoaRequired = Required<PessoaProtocol2>;
type PessoaPartial = Partial<PessoaRequired>;
type PessoaReadonly = Readonly<PessoaRequired>;
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;
type PessoaOmit = Omit<PessoaRequired, 'nome'>;
type PessoaExclude = Exclude<PessoaProtocol2, PessoaRequired>;

const objeto2: PessoaRequired = {
    nome: 'Francisco',
    sobrenome: 'Paulino Arruda Filho',
    idade: 20
}

console.log(objeto2);

const objeto3: PessoaPartial = {
    nome: 'Francisco',
    sobrenome: 'Paulino Arruda Filho'
}

console.log(objeto3);

const objeto4: PessoaReadonly = {
    nome: 'Francisco',
    sobrenome: 'Paulino Arruda Filho',
    idade: 20
}

console.log(objeto4);

const objeto5: PessoaPick = {
    nome: 'Francisco',
    sobrenome: 'Paulino Arruda Filho'
}

type AccountMongo = {
  _id: string,
  nome: string,
  sobrenome: string,
  idade: number
}

type AccountApi = {
  id: string,
  nome: string,
  sobrenome: string,
  idade: number
}

type Account = AccountMongo & AccountApi;

