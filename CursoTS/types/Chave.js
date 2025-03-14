var obterChave = function (obj, chave) { return obj[chave]; };
var pessoa = {
    nome: 'Francisco',
    sobrenome: 'Paulino Arruda Filho',
    idade: 20,
    vacinas: ['HPV', 'H1N1', 'Gripe']
};
var vacinas = obterChave(pessoa, 'vacinas');
console.log(vacinas);
