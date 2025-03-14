
const html = `<p>hola mundo</p>
<div>Soy un div</div>
<p>Soy otro p</p>
<div>Soy otro div</div>
`;
const regex = /<p>(.*?)<\/p>/;
console.log(regex.test(html)); // true - <p>hola mundo</p> aparece no texto
console.log(html.match(regex)); // [ '<p>hola mundo</p>', 'hola mundo' ] - Encontra todas as ocorrências de <p>hola mundo</p> e hola mundo
console.log(html.match(/<.+>.+<\/.+>/g)) // greedy 
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // non-greedy 
console.log(html.match(/<.+?>/g)) // lazy

const numerosAlfabeto = '0123456789 abcdefghijklmnopqrstuvwxz ABCDEFGHIJKLMNOPQRSTUVWXZ';
console.log(numerosAlfabeto.match(/[0-9]/g)); // [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
console.log(numerosAlfabeto.match(/[a-z]/g)); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z' ]

export { html, regex, numerosAlfabeto };