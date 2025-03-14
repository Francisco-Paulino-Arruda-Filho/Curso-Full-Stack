type Idade = number;

type Pessoa = {
  name: string;
  age: Idade;
  adult?: boolean;
  salario: number;
  corPreferida?: corPreferida;
}

type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type corPreferida = corRGB | corCMYK;

const pessoa: Pessoa = {
  name: 'Lucas',
  age: 30,
  salario: 200_000
}

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
