import { nome, sobrenome, idade, soma } from './modulo'
import Pessoa from '../src/models/Pessoa'

console.log(nome, sobrenome, idade)

const p1 = new Pessoa(nome, sobrenome)

console.log(p1.getNomeCompleto)

console.log(soma(2, 3)) // 5