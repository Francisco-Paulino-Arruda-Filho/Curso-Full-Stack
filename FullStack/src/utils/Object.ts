import novasPessoas from "./Pessoas";
import executa from "./asyncAwait";

interface Pessoa {
    nome: string;
    idade: number;
  }

const pessoas: Pessoa[] = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 },
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 35 }
  ];
  console.log(pessoas[0]['idade'])
  const aux = { nome: "João", idade: 25 };
  console.log(Object.getOwnPropertyDescriptor(aux, 'nome'))
  /*const obj = new Object()
  obj.nome = 'Chico'
  obj.sobrenome = 'Arruda'
  obj.falarNome = () => {
    console.log(`Meu nome é ${obj.nome} ${obj.sobrenome}`)
  }
  console.log(obj)
  console.log(obj.falarNome())*/

  const pessoaMaiorQue25 = pessoas.filter(
    obj => {
      if(obj.idade > 25) {
        return obj
      }
    }
  )
  console.log(pessoaMaiorQue25)
  console.log(novasPessoas.get('João'))
  console.log(executa().then(
    (response) => {
      console.log(response)
    }))
