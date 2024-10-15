const Login = require('../models/LoginModel');

exports.index = function (req, res) {
    if (req.session.user) {
        return res.render('loginLogado'); // 'errors' e 'success' já estarão disponíveis via res.locals
    } else {
        res.render('login', { csrfToken: req.csrfToken() }); // 'errors' e 'success' já estarão disponíveis via res.locals
    }
};

exports.register = async function (req, res) {
    const login = new Login(req.body);
    await login.register();

    if (login.error.length > 0) {
        req.flash('errors', login.error);
        req.session.save(() => {
            const redirectUrl = req.get('Referrer') || '/login/index';
            return res.redirect(redirectUrl);
        });
        return;
    }

    req.flash('success', 'Usuário registrado com sucesso!');
    req.session.save(() => {
        // Redireciona para uma página após o registro bem-sucedido
        return res.redirect('/login/index'); // Mude para a rota que desejar
    });
};

exports.login = async function (req, res) {
    const login = new Login(req.body);
    await login.login();

    //.log("quantidae de erros", login.error.length)
    if (login.error.length > 0) {
        req.flash('errors', login.error);
        req.session.save(() => {
            const redirectUrl = req.get('Referrer') || '/login/index';
            return res.redirect(redirectUrl);
        });
        return;
    }

    req.flash('success', 'Usuário logado com sucesso!');
    req.session.user = login.user;
    res.locals.user = req.session.user || null;
    req.session.save(() => {
        return res.redirect('/'); // Mude para a rota que desejar
    });
};

exports.logout = function (req, res) {
    req.session.destroy();
    res.redirect('/login/index');
}