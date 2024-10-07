function falaOi(msg: string, tempo: number) {
    return new Promise((resolve, reject) => {
        if(typeof msg === 'string') {
            setTimeout(() => {
                resolve(msg);
            }, tempo)
        } else {
            reject(false)
        }
    })
}

async function executa() {
    try {
        const fase1 = await falaOi('Fase 1',  Math.floor(Math.random() * 10))
        console.log(fase1)

        const fase2 = await falaOi('Fase 2',  Math.floor(Math.random() * 10))
        console.log(fase2)

        const fase3 = await falaOi('Fase 3',  Math.floor(Math.random() * 10))
        console.log(fase3)
    } catch {
        throw new Error('Deu erro')
    }
}

export default executa