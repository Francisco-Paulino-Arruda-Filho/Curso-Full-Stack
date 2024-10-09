const HomeModel = require('../models/HomeModel');

/*HomeModel.create({
    titulo: 'Um título de teste',
    descricao: 'Uma descrição de teste final'
}).then(dados => {
    console.log(dados);
}).catch(e => {
    console.log(e);
});*/

exports.home = function(req, res, next) {
    res.render('home'); // Isso renderiza a página e encerra a execução da função
    return;
};


exports.trataPOST = function(req, res, next) {
    res.send(
        `
            Olá, sou sua nova rota de POST
            ${req.body.nome}
        `
    )
}