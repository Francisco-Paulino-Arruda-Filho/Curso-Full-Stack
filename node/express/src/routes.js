const meuMiddleware = require('./middleware/middleware')
const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatosController')

route.get('/', meuMiddleware, homeController.home, function(req, res) {
    console.log('Ainda estou aqui');
    console.log("Parâmetros do router:", req.body.nome); // Isso será impresso
    console.log("Parâmetros do router:", req.session.nome); // Isso será impresso
    console.log('Parâmetros do router:', req.session.sobrenome)
    console.log('controller')
});

route.post('/', homeController.trataPOST)
route.get('/contatos', contatoController.contatos)
route.post('/contatos', contatoController.trataPOST)

module.exports = route