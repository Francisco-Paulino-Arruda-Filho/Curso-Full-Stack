const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 },
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 35 }
];

const novasPessoas = new Map()

pessoas.forEach(pessoa => {
    novasPessoas.set(pessoa.nome, pessoa.idade)
})

export default novasPessoas