const gerarSenha = (letrasMaiusculas: boolean, letrasMinusculas: boolean, adicionarNumeros: boolean, adicionarSimbolos: boolean, qtdCaracteres: number) => {
    let caracteresDisponiveis = '';

    if (letrasMaiusculas) caracteresDisponiveis += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (letrasMinusculas) caracteresDisponiveis += 'abcdefghijklmnopqrstuvwxyz';
    if (adicionarNumeros) caracteresDisponiveis += '0123456789';
    if (adicionarSimbolos) caracteresDisponiveis += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (!caracteresDisponiveis) {
        alert('Por favor, selecione ao menos um tipo de caractere.');
        return;
    }

    let senha = '';
    for (let i = 0; i < qtdCaracteres; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresDisponiveis.length);
        senha += caracteresDisponiveis[randomIndex];
    }

    return senha.toString()
};

export default gerarSenha