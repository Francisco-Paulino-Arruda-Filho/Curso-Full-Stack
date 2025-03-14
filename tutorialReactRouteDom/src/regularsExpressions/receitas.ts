// Encontra todas as palavras
const encontraPalavras = /[\wÀ-ú]+/g;
// Valida CPF
const geraCPF = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Valida CPF
const validaCPF = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Encontra CPF
const encontraCPF = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// Encontra todos os números de telefone
const encontraNumeroCelular = /\d{2}\s\d{5}-\d{4}/g;

// Valida IP
const validaIP = /(?:\d{1,3}\.){3}\d{1,3}/g;

// Encontra IP
const encontraIP =/(?:\d{1,3}\.){3}\d{1,3}/g

// Valida CNPJ
const validaCNPJ = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/g;

// Encontra CNPJ
const encontraCNPJ = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/g;

// Valida senha forte
const validaSenhaForte = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/g;

export { 
    encontraCNPJ, 
    validaCNPJ, 
    validaIP, 
    validaCPF, 
    encontraCPF, 
    encontraNumeroCelular, 
    encontraIP, 
    encontraPalavras, 
    geraCPF,
    validaSenhaForte
};