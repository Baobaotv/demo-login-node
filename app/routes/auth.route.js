const login = require('../controllers/auth/login.controller');
const register = require('../controllers/auth/register.controller');
module.exports = app => {
    var router = require('express').Router();
    router.get('/login', login.showLoginForm)
    router.get('/register', register.create)
    app.use(router);
}