import funcaoVerificaCPF from "../vertificadorCPF/funcaoVerificaCPF";

const ValidaFormulario = (usuario: string, nome: string, sobrenome: string, cpf: string, senha: string, confirmacaoSenha: string): boolean => {
    if(nome !== '' && sobrenome !== '' && cpf !== '' && senha !== '' && confirmacaoSenha !== '' ) {
        if(senha === confirmacaoSenha) {
            if(usuario.length >= 3 && usuario.length <= 12) {
                const usuarioValido = /^[a-zA-Z0-9]+$/.test(usuario)
                const cpfValido = funcaoVerificaCPF(cpf)
                if(usuarioValido && cpfValido) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export default ValidaFormulario