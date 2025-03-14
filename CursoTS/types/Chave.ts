type obterChave = (obj: { [key: string]: any }, chave: string) => any;

const obterChave: obterChave = (obj, chave) => obj[chave];

const pessoa = {
  nome: 'Francisco',
  sobrenome: 'Paulino Arruda Filho',
  idade: 20,
  vacinas: ['HPV', 'H1N1', 'Gripe']
}

const vacinas = obterChave(pessoa, 'vacinas');
console.log(vacinas);

export class Pessoa<U, T> {
  constructor(
    public nome: U,
    public sobrenome: U,
    public idade: T
  ) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const key in this.elementos) {
      console.log(this.elementos[key]);
    }
  }
}
