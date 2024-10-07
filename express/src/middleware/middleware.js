module.exports = function meuMiddleware(req, res, next) {
    req.session = { nome: 'Francisco', sobrenome: 'Paulino'}
    console.log()
    console.log('Passei no seu middleware global')
    console.log()
    next()
}