const Contato = require('../models/ContatoModel')

exports.index = function(req, res) {
    if (req.session.user) {
        const user = req.session.user;
        res.render('contatos', { user: user, contato: {}}); // Certifique-se de que o 'user' está sendo passado
    } else {
        req.flash('errors', 'Você precisa estar logado para acessar essa página.');
        req.session.save(() => res.redirect('/login/index'));
    }
};

exports.register = async function(req, res) {   
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/index'));
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.');
        //req.session.save(() => res.redirect('/contato/index'));
        res.redirect(`/contato/edit/${contato.contato._id}`);
        return;
    } catch (e) {
        console.log(e);
        return res.render('error');
    }
}

exports.editIndex = async function(req, res) {
    if (!req.params.id) return res.render('error');
    const contato = await Contato.buscaId(req.params.id);
    if (!contato) return res.render('error');
    res.render('contatos', { contato: contato });
}

exports.saveEdit = async function(req, res) {
    if (!req.params.id) return res.render('error');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);
    if (contato.errors.length > 0) {
        req.flash('errors', contato.errors);
        req.session.save(() => res.redirect('/contato/index'));
        return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect('/contato/index'));
    return;
}

exports.deleteIndex = async function(req, res) {
    if (!req.params.id) return res.render('error');
    const contato = await Contato.delete(req.params.id);
    if (!contato) return res.render('error');
    req.flash('success', "Contato apagado com sucesso");
    req.session.save(() => res.redirect('/'));
    return;
}