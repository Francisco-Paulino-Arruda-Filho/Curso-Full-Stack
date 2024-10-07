const factoryPessoa = (nome: string, sobrenome: string) => {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            console.log(`Meu nome é ${nome} ${sobrenome}`)
        }
    }
}

export default factoryPessoa