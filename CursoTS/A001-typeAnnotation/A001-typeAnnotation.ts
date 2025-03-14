const nome: string = 'Francisco Paulino Arruda Filho'; // string
const idade: number = 20
const adulto: boolean = true
const simbolo: symbol = Symbol('qualquer-symbol')
const big: bigint = BigInt(10)

// Arrays
const arrayNumbers: Array<number> = [1, 2, 3]
const arrayStrings: Array<string> = ['a', 'b', 'c']
const arrayBooleans: Array<boolean> = [true, false, true]
const arrayStrings2: string[] = ['a', 'b', 'c']
const arrayNumbers2: number[] = [1, 2, 3]
const arrayBooleans2: boolean[] = [true, false, true]

// Objetos
const pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'Francisco Paulino Arruda Filho',
    idade: 20
}
console.log(pessoa.nome)

// Funções
function soma2(x: number, y: number): number {
    return x + y
}

const soma3 = (x: number, y: number): number => x + y

