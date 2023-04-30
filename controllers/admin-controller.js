const data = require('../data/data');
const { v4: uuid } = require('uuid');

module.exports = {
    admin: (request, response) => {
        response.render('pages/admin', {
            inventoryArray: data
        });
    },
    create_book: (request, response) => {
        response.render('pages/create', {
        });
    },
    update_book: (request, response) => {
        const { _id } = request.params;
        const foundBook = data.find(book => book._id === _id);
        response.render('pages/update', {
            foundBook: foundBook
        });
    }
}