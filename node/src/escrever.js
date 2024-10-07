const fs = require('fs');
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'pessoas.json');
const ler = require('./ler.js');

const pessoas = [
    {nome: 'Roberto', idade: 30},
    {nome: 'Maria', idade: 35},
    {nome: 'João', idade: 40},
]

const json = JSON.stringify(pessoas, '', 2);

fs.writeFile(caminhoArquivo, json, { flag: 'w' }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Arquivo criado com sucesso!');
});

const leArquivo  = async (caminho) => {
    const dados = await ler(caminho)
    return dados;
}

const dadosArquivo = leArquivo(caminhoArquivo).then(dados => {
    console.log("Olá", JSON.parse(dados));
}).catch(e => {
    console.log(e);
});