class ValidaCPF {
    static validarCPF(cpf: string) {
        // Remove todos os caracteres que não sejam números
        cpf = cpf.replace(/\D/g, '');

        // Verifica se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
            return false;
        }

        // Transforma o CPF em um array de números
        const cpfArray = Array.from(cpf).map((element) => parseInt(element));
        const cpfArraySemDigito = cpfArray.slice(0, 9); // Pega os primeiros 9 dígitos
        const primeiroDigito = cpfArray[9]; // Primeiro dígito verificador
        const segundoDigito = cpfArray[10]; // Segundo dígito verificador

        // Cálculo do primeiro dígito verificador
        const primeiroDigitoCalculado = cpfArraySemDigito
            .reduce((acc, element, index) => acc + element * (10 - index), 0) % 11;

        const primeiroDigitoValido = primeiroDigitoCalculado < 2 ? 0 : 11 - primeiroDigitoCalculado;

        if (primeiroDigito !== primeiroDigitoValido) {
            return false;
        }

        // Inclui o primeiro dígito verificador para calcular o segundo dígito
        const cpfArrayComPrimeiroDigito = [...cpfArraySemDigito, primeiroDigito];

        // Cálculo do segundo dígito verificador
        const segundoDigitoCalculado = cpfArrayComPrimeiroDigito
            .reduce((acc, element, index) => acc + element * (11 - index), 0) % 11;

        const segundoDigitoValido = segundoDigitoCalculado < 2 ? 0 : 11 - segundoDigitoCalculado;

        // Verifica se o segundo dígito está correto
        if (segundoDigito !== segundoDigitoValido) {
            return false;
        }

        return true;
    }
}

export default ValidaCPF