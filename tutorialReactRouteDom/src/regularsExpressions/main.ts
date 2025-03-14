// * (opcionais) - 0 ou n vezes
// + (obrigatório) - 1 ou n vezes
// ? (opcionais) - 0 ou 1 vez
// {n, m} - de n até m vezes
// \ - caractere de escape

// g - Encontra todas as ocorrências
// ()- grupos
// i - insensitive
// | - ou
// [^] - Negação

import texto from './texto';

const regex = /João/gi;

console.log(regex.test(texto)); // true - João aparece no texto

export default texto.match(regex); // [ 'João', 'João' ] - Encontra todas as ocorrências de João