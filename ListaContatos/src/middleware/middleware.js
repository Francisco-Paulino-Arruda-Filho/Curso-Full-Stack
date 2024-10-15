const { login } = require("../controllers/loginController");

module.exports = {
  meuMiddleware: function(req, res, next) {
    res.locals.errors = req.flash('errors'); // Lê os erros da sessão e os armazena em res.locals
    res.locals.success = req.flash('success'); // Lê as mensagens de sucesso
    next();
  },
  checkCsrfError: function(err, req, res, next) {
    if (err && 'EBADCSRFTOKEN' === err.code) {
      return res.render('error');
    }
    next();
  },
  csrfMiddleware: function(req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    res.locals.user = req.session.user || null; // Se não houver usuário logado, `user` será `null`
    next();
  },
  loginRequired: function(req, res, next) {
    if (!req.session.user) {
      req.flash('errors', 'Você precisa fazer login.');
      req.session.save(() => res.redirect('/'));
      return;
    }
    next();
  }
};