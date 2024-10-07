const cachorro = require('./class');

const cachorrinho = new cachorro('Rex');

cachorrinho.latir()
console.log(__filename) // Retorna o caminho absoluto do arquivo
console.log(__dirname) // Retorna o caminho absoluto do diretório