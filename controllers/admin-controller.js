const data = require('../data/data');
const { v4: uuid } = require('uuid');

module.exports = {
    admin: (request, response) => {
        response.render('pages/admin', {
            data: data
        });
    },
    create_book: (request, response) => {
        response.render('pages/create', {
            data: data
        });
    },
    update_book: (request, response) => {
        let id = request.params._id;
        const data = data.find(book => book._id === String(id));
        response.render('pages/update', {
            data: data
        });
    }
}

