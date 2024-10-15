const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const loginController = require('./controllers/loginController');
const contatosController = require('./controllers/contatosController');
const { loginRequired, csrfMiddleware } = require('./middleware/middleware');

// Home
router.get('/', csrfMiddleware, homeController.home);

// Rotas de login
router.get('/login/index', csrfMiddleware, loginController.index);
router.post('/login/register', loginController.register);
router.post('/login/login', loginController.login);
router.get('/login/logout', loginController.logout);

// Rotas de contatos (com login required e CSRF middleware)
router.get('/contato/index', loginRequired, csrfMiddleware, contatosController.index);
router.post('/contato/register', loginRequired, contatosController.register);
router.get('/contato/edit/:id', loginRequired, contatosController.editIndex);
router.post('/contato/edit/:id', loginRequired, contatosController.saveEdit);
router.get('/contato/delete/:id', loginRequired, contatosController.deleteIndex);

module.exports = router;
