
const Pessoa = (nome: string, idade: number) => {
    return {
        nome,
        idade,
        falar: () => console.log(`Oi, eu sou ${nome} e tenho ${idade} anos`)
    }

}

export default Pessoa