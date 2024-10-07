exports.home = function(req, res, next) {
    console.log("Parâmetros do controller:", req.params); // Isso será impresso
    res.render('home'); // Isso renderiza a página e encerra a execução da função
    next();
};


exports.trataPOST = function(req, res, next) {
    res.send(
        `
            Olá, sou sua nova rota de POST
            ${req.body.nome}
        `
    )
}