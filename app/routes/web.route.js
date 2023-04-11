module.exports = app => {
    var router = require('express').Router();

    router.get('/home', (req, res) => {
        res.render('home');
    });

    app.use(router);
}