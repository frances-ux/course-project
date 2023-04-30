const data = require('../data/data');

module.exports = {
    index: (request, response) => {
        response.render('pages/index', {});
    },
    about: (request, response) => {
        response.render('pages/about', {});
    },
    login: (request, response) => {
        response.render('pages/login', {});
    }
}