const encontraPalavras = /[\wÀ-ú]+/g;

const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(encontraPalavras)); // [ 'João', 'é', 'calmo', 'mas', 'no', 'transito', 'fica', 'nervoso' ]

export { encontraPalavras, texto };