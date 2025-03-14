const cpfs = `Os CPFs são 254.224.877-45,
    123.569.852-96,
    963.987.321-00,
    963.987.32a-00 
    e 963.987.321-00`;

export const cpf = cpfs.match(/(?:\d{3}\.){2}\d{3}-\d{2}/g); // Encontra todos os CPFs