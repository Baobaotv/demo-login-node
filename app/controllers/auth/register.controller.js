require('dotenv/config');

exports.create = (req, res) => {
    res.render('auth/register');
}
