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

falaOi('Frase 1', Math.floor(Math.random() * 10)).then(resposta => {
    console.log(resposta)
    return falaOi('Frase 2', Math.floor(Math.random() * 10))
}).then(resposta => {
    console.log(resposta)
    return falaOi('Frase 3', Math.floor(Math.random() * 10))
}).catch()

const promises = [
    falaOi('Promise 1', 100),
    falaOi('Promise 2', 500),
    falaOi('Promise 3', 1000)
]

Promise.all(promises).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

export default falaOi