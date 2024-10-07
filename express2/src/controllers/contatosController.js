exports.contatos = function(req, res) {
    console.log("Parâmetros do controller de contato:", req.params); // Isso será impresso
    res.render('contatos')
}

exports.trataPOST = function(req, res) {
    res.send(
        `
            Olá, sou sua nova rota de POST
            Nome recebido: ${req.body.nome}
        `
    );
}