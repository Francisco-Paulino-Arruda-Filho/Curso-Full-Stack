type temNome = { name: string; };
type temSobrenome = { lastName: string; };
type temIdade = { age: number; };

type Pessoa = temNome & temSobrenome & temIdade;

const pessoa: Pessoa = {
  name: 'Lucas',
  lastName: 'Fernando',
  age: 30
}
