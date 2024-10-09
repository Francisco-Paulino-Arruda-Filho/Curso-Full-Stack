module.exports = function meuMiddleware(req, res, next) {
    next()
}

module.exports = function outroMiddleware(req, res, next) {
    next()
}

module.exports = function checkCsrfError(err, req, res, next) {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('error')
    }
}

module.exports = function csrfMiddleware(req, res, next) {
    //res.locals.csrfToken = req.csrfToken()
    next()
}