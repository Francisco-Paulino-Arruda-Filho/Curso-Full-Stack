const HomeModel = require('../models/HomeModel');
const Contato = require('../models/ContatoModel');

exports.home = async function(req, res, next) {
    try {
        const contatos = await Contato.buscaContatos();
        res.render('home', { contatos: contatos });
    } catch (e) {
        console.log(e);
        res.render('home', {contatos: {}}); // Isso renderiza a página e encerra a execução da função
    }
    return;
};