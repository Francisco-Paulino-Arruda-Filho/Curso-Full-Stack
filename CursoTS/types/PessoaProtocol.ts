
interface PessoaProtocol<T, U> {
  nome: T,
  sobrenome: T,
  idade: U
}

const aluno: PessoaProtocol<string, number> = {
  nome: 'Francisco',
  sobrenome: 'Paulino Arruda Filho',
  idade: 20
}

const professor: PessoaProtocol<string, number> = {
  nome: 'Francisco',
  sobrenome: 'Paulino Arruda Filho',
  idade: 20
}
